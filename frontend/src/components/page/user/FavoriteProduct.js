import "../../css/FavoriteProduct.css";
import React from "react";
import { Card, Row, Col, Pagination } from "react-bootstrap";

const FavoriteProduct = () => {
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
      title: "Blue T-shirt",
      price: "$15.00",
      buy: 300,
      discount: null,
    },
    {
      id: 3,
      imgSrc: "images/item3.jpg",
      title: "Black jeans",
      price: "$25.00",
      buy: 200,
      discount: null,
    },
    {
      id: 4,
      imgSrc: "images/item4.jpg",
      title: "White sneakers",
      price: "$30.00",
      buy: 400,
      discount: null,
    },
    {
      id: 5,
      imgSrc: "images/item5.jpg",
      title: "Grey hoodie",
      price: "$18.00",
      buy: 500,
      discount: null,
    },
  ];

  return (
    <>
      <section id="similar-products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-left">Sản Phẩm Yêu Thích</h2>
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
                      <button className="trash3-button"><i class="bi bi-trash3"></i></button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <hr/>

          <Pagination className="custom-pagination d-flex justify-content-center">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
          
        </div>
      </section>
    </>
  );
};

export default FavoriteProduct;
