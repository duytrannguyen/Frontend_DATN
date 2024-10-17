import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Banner() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [upcomingProducts, setUpcomingProducts] = useState([]);
  const [error, setError] = useState(null);

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

  const blogs = [
    {
      date: "20",
      month: "Feb",
      title: "10 Reasons to be helpful towards any animals",
      image: "images/blog1.jpg",
      description:
        "At the core of our practice is the idea that cities are the incubators of our greatest achievements.",
      link: "single-post.html",
    },
    {
      date: "21",
      month: "Feb",
      title: "How to know your pet is hungry",
      image: "images/blog2.jpg",
      description:
        "Understanding your pet’s needs is crucial for their well-being.",
      link: "single-post.html",
    },
    {
      date: "22",
      month: "Feb",
      title: "Best home for your pets",
      image: "images/blog3.jpg",
      description: "Creating a comfortable space for your pets is essential.",
      link: "single-post.html",
    },
  ];

  const instagramImages = [
    { src: "images/insta1.jpg", alt: "Instagram image 1" },
    { src: "images/insta2.jpg", alt: "Instagram image 2" },
    { src: "images/insta3.jpg", alt: "Instagram image 3" },
    { src: "images/insta4.jpg", alt: "Instagram image 4" },
    { src: "images/insta5.jpg", alt: "Instagram image 5" },
    { src: "images/insta6.jpg", alt: "Instagram image 6" },
  ];

  return (
    <>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="images/anh1.jpg" className="d-block w-100" alt="Banner 1" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="images/anh2.jpg" className="d-block w-100" alt="Banner 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/anh3.jpg" className="d-block w-100" alt="Banner 3" />
        </Carousel.Item>
      </Carousel>

      {/* Categories Section */}
      <section id="categories" className="my-5 text-center">
        <div className="container">
          <h2 className="display-4 fw-normal">Danh Mục Thú Cưng</h2>
          <div className="row my-5">
            {["Chó", "Mèo", "Chim Vẹt", "Thỏ", "Chuột Hamster"].map(
              (category, index) => (
                <div className="col" key={index}>
                  <a href="#" className="categories-item">
                    <h3>{category}</h3>
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            src="images/banner2.png"
            className="d-block w-100"
            alt="Banner 1"
          />
        </Carousel.Item>
      </Carousel>

      {/* Products Section */}
      <section id="products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal">Sản Phẩm Nổi Bật</h2>
          <Row xs={1} md={5} className="g-4">
            {" "}
            {/* Điều chỉnh số cột theo kích thước màn hình */}
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <a href="/ProductDetail">
                    <Card.Img src={product.imgSrc} alt={product.title} />
                  </a>
                  <Card.Body>
                    <a href="/ProductDetail" className="title">
                      <Card.Title>{product.title}</Card.Title>
                    </a>
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

        <hr />

        <div className="container">
          <h2 className="display-4 fw-normal">Sản Phẩm bán chạy</h2>
          <Row xs={1} md={5} className="g-4">
            {" "}
            {/* Điều chỉnh số cột theo kích thước màn hình */}
            {products.map((product) => (
              <Col key={product.id}>
                <Card>
                  <a href="/ProductDetail">
                    <Card.Img src={product.imgSrc} alt={product.title} />
                  </a>
                  <Card.Body>
                    <a href="/ProductDetail" className="title">
                      <Card.Title>{product.title}</Card.Title>
                    </a>
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

      {/* Latest Blogs Section */}
      <section id="latest-blog" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal">Bài Đăng Trên Blog Mới Nhất</h2>
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-md-4 my-4" key={index}>
                <div className="card">
                  <a href={blog.link}>
                    <img
                      src={blog.image}
                      className="card-img-top blog-image"
                      alt={blog.title}
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href={blog.link} className="btn btn-outline-primary">
                      Đọc thêm
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="insta" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-center">
            Theo Dõi Chúng Tôi Trên Instagram
          </h2>{" "}
          <br />
          <div className="row g-0">
            {instagramImages.map((image, index) => (
              <div
                className="col instagram-item text-center position-relative"
                key={index}
              >
                <a href="#">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
