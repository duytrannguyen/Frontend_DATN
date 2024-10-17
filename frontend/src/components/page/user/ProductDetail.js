import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const products = [
    {
      id: 1,
      imgSrc: "images/item1.jpg",
      title: "Grey hoodie",
      price: "$18.00",
      buy: 500,
      discount: null,
    },
    {
      id: 2,
      imgSrc: "images/item2.jpg",
      title: "Grey hoodie",
      price: "$18.00",
      buy: 500,
      discount: null,
    },
    {
      id: 3,
      imgSrc: "images/item3.jpg",
      title: "Grey hoodie",
      price: "$18.00",
      buy: 500,
      discount: null,
    },
    {
      id: 4,
      imgSrc: "images/item4.jpg",
      title: "Grey hoodie",
      price: "$18.00",
      buy: 500,
      discount: null,
    },
    {
      id: 4,
      imgSrc: "images/item4.jpg",
      title: "Grey hoodie",
      price: "$18.00",
      buy: 500,
      discount: null,
    },
  ];

  return (
    <>
      <br />
      <div className="container">
        <div className="row d-flex ">
          {" "}
          {/* Sử dụng d-flex để tạo bố cục ngang */}
          <div className="col-md-9">
            {" "}
            {/* Phần hình ảnh và thông tin sản phẩm */}
            <div className="d-flex">
              {" "}
              {/* Sử dụng Flexbox để căn chỉnh phần tử ngang */}
              {/* Phần hình ảnh */}
              <div className="image-section" style={{ flex: 3 }}>
                {" "}
                {/* Tăng flex để hình ảnh chiếm nhiều không gian hơn */}
                <img
                  src="https://via.placeholder.com/500" // Thay đổi kích thước hình ảnh
                  alt="Sample Homie Adult Cat Sterilised"
                  className="product-image"
                  style={{ width: "100%", height: "auto", maxHeight: "400px" }} // Đảm bảo ảnh chiếm hết không gian và có chiều cao tối đa
                />
                {/* Phần hình nhỏ bên dưới */}
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
              {/* Phần thông tin sản phẩm */}
              <div className="info-section ml-3" style={{ flex: 1 }}>
                {" "}
                {/* Giảm flex để phần thông tin chiếm ít không gian hơn */}
                <h1 className="product-title1" style={{ fontSize: "1.5rem" }}>
                  Sample Thức Ăn Mèo Homie Sterilised Adult Chicken 100g
                </h1>
                <p className="brand">
                  Thương hiệu: <span>HOMIE</span>
                </p>
                <p className="views-sales"> Số lượng: 8997 | 302 đã bán</p>
                <div className="price">
                  <span className="current-price">20,000đ</span>
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
            </div>{" "}
            {/* Đóng thẻ d-flex */}
          </div>{" "}
          {/* Đóng col-md-9 */}
          <div className="col-md-3">
            {" "}
            {/* Phần cam kết bán hàng */}
            <div className="commitments-section">
              <h3>Cam kết bán hàng</h3>
              <ul>
                <li>Hàng chính hãng. Nguồn gốc rõ ràng.</li>
                <li>Đền bù 100% nếu hàng lỗi.</li>
                <li>Giao hàng ngay 30 phút. (nội thành TP Cần Thơ)</li>
                <li>Đổi trả 7 ngày miễn phí.</li>
              </ul>
            </div>
          </div>{" "}
          {/* Đóng col-md-3 */}
        </div>{" "}
        {/* Đóng row */}
      </div>{" "}
      {/* Đóng container */}
      <section id="products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Mô tả</h2>{" "}
          {/* Thêm class text-left để căn chỉnh tiêu đề sang trái */}
          <hr />
          <br />
          <Row className="g-4 border-description">
            {" "}
            {/* Thêm class border-description để áp dụng viền trắng */}
            <p>
              {" "}
              {/* Để giữ định dạng sạch sẽ, bạn có thể sử dụng thẻ <p> cho mô tả */}
              THÔNG TIN SẢN PHẨM: <br />
              - Tên sản phẩm: Bát ăn có đế nghiêng chống gù cho chó mèo. <br />
              Đối với các bé trưởng thành, bát thức ăn bệt gây tác hại mỏi xương
              cổ, ảnh hưởng xương sống. Quá trình nhai nuốt cũng không hiệu quả
              do phải cúi thấp. Bát thức ăn nâng cao và điều chỉnh được độ
              nghiêng 15 độ là giải pháp an toàn cho vật nuôi. Tư thế thoải mái,
              dễ chịu khi nhai nuốt sẽ làm vật nuôi dễ dàng hấp thụ thức ăn.
              Tránh tác động xấu về lâu dài lên hệ cơ xương và tiêu hóa. <br />
              - Chất liệu: Nhựa PP an toàn cho sức khỏe và thân thiện với môi
              trường. Chịu nhiệt tốt. Dễ dàng lau chùi. <br />- Kích thước: dài,
              rộng 13 cm, cao 14.5 cm.
            </p>
          </Row>
        </div>
      </section>
      <section id="products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Sản Phẩm Tương Tự</h2>{" "}
          {/* Thêm class text-left để căn chỉnh tiêu đề sang trái */}
          <hr />
          <Row xs={1} md={5} className="g-4">
            {" "}
            {/* Điều chỉnh số cột theo kích thước màn hình */}
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Img src={product.imgSrc} alt={product.title} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <span className="price">Giá: {product.price}</span> <br />
                      <p className="buy">{product.buy} đã bán</p>
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
