import React, { useEffect, useState } from "react";
import "../../../components/css/ProductDetail.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { showToast, showErrorToast } from "../../../utils/Toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // Dữ liệu sản phẩm hiện tại
  const [similarProducts, setSimilarProducts] = useState([]); // Sản phẩm tương tự
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState([]);
  const { productId } = useParams(); // Lấy productId từ URL
  // console.log("Product ID:", productId); // Kiểm tra giá trị của productId
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/home/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    if (productId) {
      // Kiểm tra xem productId có hợp lệ không
      fetchProduct();
    }
  }, [productId]);
  useEffect(() => {
    const fetchSimilarProducts = async () => {
      console.log("Current product:", product);
      console.log("Category ID:", product ? product.categoryId : null);
      if (product && product.categoryId) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/home/categories/${product.categoryId}/products`
          );
          console.log("Similar products response:", response.data);
          setSimilarProducts(response.data);
        } catch (error) {
          console.error("Error fetching similar products", error);
        }
      } else {
        console.log("Product or categoryId is undefined");
      }
    };

    fetchSimilarProducts();
  }, [product]); // Thực hiện khi product được cập nhật
  // Lấy ảnh sản phẩm
  useEffect(() => {
    const fetchImages = async () => {
      if (product) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/home/products/${product.productId}/images`
          );
          setImages(response.data);
        } catch (error) {
          console.error("Error fetching images", error);
        }
      }
    };

    fetchImages();
  }, [product]); // Thực hiện khi product được cập nhật

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // Hàm điều hướng đến trang chi tiết sản phẩm
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  const handleAddToCart = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/pet/cart/add/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: { usersId: 1 },
            quantity: quantity,
          }),
        }
      );

      if (response.ok) {
        showToast("Thêm vào giỏ hàng thành công!"); // Gọi hàm hiển thị thông báo thành công
        navigate("/cart");
      } else {
        showErrorToast("Lỗi khi thêm sản phẩm vào giỏ hàng"); // Gọi hàm hiển thị thông báo lỗi
      }
    } catch (error) {
      showErrorToast(`Có lỗi xảy ra: ${error.message}`); // Gọi hàm hiển thị thông báo lỗi
    }
  };

  if (!product) {
    return <p>Loading...</p>; // Show a loading state while data is being fetched
  }

  return (
    <>
      <br />
      <div className="container">
        <div className="row d-flex ">
          <div className="col-md-9">
            <div className="d-flex">
              <div className="image-section" style={{ flex: 3 }}>
                {images.length > 0 ? (
                  images.map((image) => (
                    <img
                      key={image.imageId}
                      src={`/images/${image.imageName}`}
                      alt={product.title}
                      className="product-image"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "400px",
                      }}
                    />
                  ))
                ) : (
                  <p>Không có ảnh cho sản phẩm này.</p>
                )}

                <div className="small-images mt-2 d-flex justify-content-between">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Thumbnail 1"
                    style={{ width: "97px", height: "80px" }}
                  />
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Thumbnail 2"
                    style={{ width: "97px", height: "80px" }}
                  />
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Thumbnail 3"
                    style={{ width: "97px", height: "80px" }}
                  />
                </div>
              </div>
              <div className="info-section ml-3" style={{ flex: 1 }}>
                <h1 className="product-title1" style={{ fontSize: "1.5rem" }}>
                  {product.productName}
                </h1>
                <p className="brand">
                  Thương hiệu: <span>{product.sellerName}</span>
                </p>
                <p className="views-sales">
                  Số lượng: {product.quantity} | Giảm giá:{" "}
                  {product.percentDecrease}%
                </p>
                <div className="price">
                  <span className="price">
                    Giá:{" "}
                    {product.price
                      ? product.price.toLocaleString() + "đ"
                      : "Liên hệ"}
                  </span>
                </div>
                <div className="quantity mt-3 d-flex align-items-center">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      onClick={handleDecrease}
                      className="btn btn-secondary"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "5px",
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="form-control text-center"
                      style={{
                        width: "50px",
                        height: "40px",
                        padding: "0",
                        borderRadius: "5px",
                        borderLeft: "0",
                        borderRight: "0",
                      }}
                    />
                    <button
                      onClick={handleIncrease}
                      className="btn btn-secondary"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "5px",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <button
                    className="cart-button1"
                    style={{ marginRight: "10px" }}
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button className="wishlist-button1">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                <p className="shipping-info mt-3">
                  Giao Tận Nơi Hoặc Nhận Tại Cửa Hàng
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="commitments-section">
              <h3>Cam kết bán hàng</h3>
              <ul>
                <li>Hàng chính hãng. Nguồn gốc rõ ràng.</li>
                <li>Đền bù 100% nếu hàng lỗi.</li>
                <li>Giao hàng ngay 30 phút. (nội thành TP Cần Thơ)</li>
                <li>Đổi trả 7 ngày miễn phí.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id="products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Mô tả</h2>
          <hr />
          <br />
          <Row className="g-4 border-description">
            <p>{product.description}</p>
          </Row>
        </div>
      </section>
      <section id="products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Sản Phẩm Tương Tự</h2>
          <hr />
          <Row xs={1} md={5} className="g-4">
            {similarProducts.map((similarProduct) => (
              <Col key={similarProduct.productId}>
                <Card
                  onClick={() => handleProductClick(similarProduct.productId)} // Sử dụng similarProduct.id
                  style={{ cursor: "pointer" }}
                >
                  {images.length > 0 ? (
                    images.map((image) => (
                      <Card.Img
                        key={image.imageId}
                        src={`/images/${image.imageName}`} // Đường dẫn đến ảnh
                        alt={product.title}
                        className="product-image"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "400px",
                        }}
                      />
                    ))
                  ) : (
                    <Card.Body>
                      <p>Không có ảnh cho sản phẩm này.</p>
                    </Card.Body>
                  )}

                  <Card.Body>
                    <Card.Title>{similarProduct.productName}</Card.Title>
                    <Card.Text>
                      <span className="price">Giá: {similarProduct.price}</span>{" "}
                      <br />
                      <p className="buy">{similarProduct.quantity} Còn lại</p>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <button className="cart-button">
                        <i className="bi bi-cart4"></i>
                      </button>
                      <button className="wishlist-button">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
