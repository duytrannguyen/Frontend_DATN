import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const products = [
    { id: 1, imgSrc: "images/item1.jpg", title: "Grey hoodie", price: "$18.00", buy: 500 },
    { id: 2, imgSrc: "images/item2.jpg", title: "Grey hoodie", price: "$18.00", buy: 500 },
    { id: 3, imgSrc: "images/item3.jpg", title: "Grey hoodie", price: "$18.00", buy: 500 },
    { id: 4, imgSrc: "images/item4.jpg", title: "Grey hoodie", price: "$18.00", buy: 500 },
    { id: 5, imgSrc: "images/item5.jpg", title: "Grey hoodie", price: "$18.00", buy: 500 }, // Đã chỉnh sửa id
  ];

  return (
    <>
      <br />
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-9">
            <div className="d-flex">
              <div className="image-section" style={{ flex: 3 }}>
                <img
                  src="https://via.placeholder.com/500"
                  alt="Sample Product"
                  className="product-image"
                  style={{ width: "100%", height: "auto", maxHeight: "400px" }}
                />
                <div className="small-images mt-2 d-flex justify-content-between">
                  {[...Array(3)].map((_, index) => (
                    <img
                      key={index}
                      src="https://via.placeholder.com/100"
                      alt={`Thumbnail ${index + 1}`}
                      style={{ width: "97px", height: "80px" }}
                    />
                  ))}
                </div>
              </div>
              <div className="info-section ml-3" style={{ flex: 1 }}>
                <h1 className="product-title1" style={{ fontSize: "1.5rem" }}>
                  Sample Thức Ăn Mèo Homie Sterilised Adult Chicken 100g
                </h1>
                <p className="brand">Thương hiệu: <span>HOMIE</span></p>
                <p className="views-sales">Số lượng: 8997 | 302 đã bán</p>
                <div className="price">
                  <span className="current-price">20,000đ</span>
                </div>
                <div className="quantity mt-3 d-flex align-items-center">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={handleDecrease} className="btn btn-secondary" style={{ width: "40px", height: "40px", borderRadius: "5px" }}>-</button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="form-control text-center"
                      style={{ width: "50px", height: "40px", padding: "0", borderRadius: "5px", borderLeft: "0", borderRight: "0" }}
                    />
                    <button onClick={handleIncrease} className="btn btn-secondary" style={{ width: "40px", height: "40px", borderRadius: "5px" }}>+</button>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <button className="cart-button1" style={{ marginRight: "10px" }}>Thêm vào giỏ hàng</button>
                  <button className="wishlist-button1"><i className="bi bi-heart"></i></button>
                </div>
                <p className="shipping-info mt-3">Giao Tận Nơi Hoặc Nhận Tại Cửa Hàng</p>
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
          <p>
            THÔNG TIN SẢN PHẨM: <br />
            - Tên sản phẩm: Bát ăn có đế nghiêng chống gù cho chó mèo. <br />
            Đối với các bé trưởng thành, bát thức ăn bệt gây tác hại mỏi xương cổ, ảnh hưởng xương sống. Quá trình nhai nuốt cũng không hiệu quả do phải cúi thấp. Bát thức ăn nâng cao và điều chỉnh được độ nghiêng 15 độ là giải pháp an toàn cho vật nuôi. Tư thế thoải mái, dễ chịu khi nhai nuốt sẽ làm vật nuôi dễ dàng hấp thụ thức ăn. Tránh tác động xấu về lâu dài lên hệ cơ xương và tiêu hóa. <br />
            - Chất liệu: Nhựa PP an toàn cho sức khỏe và thân thiện với môi trường. Chịu nhiệt tốt. Dễ dàng lau chùi. <br />
            - Kích thước: dài, rộng 13 cm, cao 14.5 cm.
          </p>
        </div>
      </section>

      <section id="reviews" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Đánh giá sản phẩm</h2>
          <hr />
          <Row className="g-4">
            <Col md={12}>
              <div className="rating-container">
                <div className="rating-summary">
                  <span className="rating-score">4.4</span>
                  <div className="stars">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="filters">
                  <button className="btn btn-outline">Tất Cả</button>
                  <button className="btn btn-outline">5 Sao (38)</button>
                  <button className="btn btn-outline">4 Sao (5)</button>
                  <button className="btn btn-outline">3 Sao (3)</button>
                  <button className="btn btn-outline">2 Sao (0)</button>
                  <button className="btn btn-outline">1 Sao (5)</button>
                </div>
              </div>

              <div className="review-container">
                <div className="review-header">
                  <img src="https://via.placeholder.com/40" alt="avatar" className="review-avatar" />
                  <div className="review-info">
                    <span className="review-username">.linhh.</span>
                    <span className="review-time">2024-09-17 12:15 | Phân loại hàng: Quà mơ, S</span>
                    <div className="review-stars">★★★★★</div>
                  </div>
                </div>
                <div className="review-content">
                 
                  <p>nhìn chung cũng ok, vải không dày lắm nhưng cũng 0 đến mức lộ lắm, mặc bra màu nude là được</p>
                </div>
                <div className="review-reply">
                  <p><strong>Phản Hồi Của Người Bán:</strong></p>
                  <p>Chào bạn, cảm ơn bạn rất nhiều vì đã ủng hộ. Sự hài lòng của bạn là động lực lớn nhất của chúng tôi. Chúng tôi rất mong chờ lần ghé thăm tới của bạn.</p>
                </div>
              </div>

              <div className="review-container">
                <div className="review-header">
                  <img src="https://via.placeholder.com/40" alt="avatar" className="review-avatar" />
                  <div className="review-info">
                    <span className="review-username">.linhh.</span>
                    <span className="review-time">2024-09-17 12:15 | Phân loại hàng: Quà mơ, S</span>
                    <div className="review-stars">★★★★★</div>
                  </div>
                </div>
                <div className="review-content">
                  
                  <p>nhìn chung cũng ok, vải không dày lắm nhưng cũng 0 đến mức lộ lắm, mặc bra màu nude là được</p>
                </div>
                <div className="review-reply">
                  <p><strong>Phản Hồi Của Người Bán:</strong></p>
                  <p>Chào bạn, cảm ơn bạn rất nhiều vì đã ủng hộ. Sự hài lòng của bạn là động lực lớn nhất của chúng tôi. Chúng tôi rất mong chờ lần ghé thăm tới của bạn.</p>
                </div>
              </div>

              <div className="button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button id="showMoreMota" type="button" className="btn btn-outline-primary" onClick={toggleShowMore}>
                  {showMore ? 'Thu Gọn' : 'Xem Thêm Thông Tin'}
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="similar-products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Sản Phẩm Tương Tự</h2>
          <hr />
          <Row xs={1} md={5} className="g-4">
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Img src={product.imgSrc} alt={product.title} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <span className="price">Giá: {product.price}</span><br />
                      <p className="buy">{product.buy} đã bán</p>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <button className="cart-button"><i className="bi bi-cart4"></i></button>
                      <button className="wishlist-button"><i className="bi bi-heart"></i></button>
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
