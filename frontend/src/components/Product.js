import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";

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

// Thành phần bộ lọc giá
const PriceFilter = ({ isOpen, toggleFilter }) => (
  <Card className="price-filter-card">
    <Card.Header className="d-flex justify-content-between align-items-center">
      <span className="filter-title">Lọc Giá</span>
      <button className="filter-toggle-button" onClick={toggleFilter}>
        {isOpen ? "-" : "+"}
      </button>
    </Card.Header>
    {isOpen && (
      <Card.Body>
        <form className="price-filter-form">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="under500k"
            />
            <label className="form-check-label" htmlFor="under500k">
              Dưới 500,000₫
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="500k-1m" />
            <label className="form-check-label" htmlFor="500k-1m">
              500,000₫ - 1,000,000₫
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="1m-2m" />
            <label className="form-check-label" htmlFor="1m-2m">
              1,000,000₫ - 2,000,000₫
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="2m-30m" />
            <label className="form-check-label" htmlFor="2m-30m">
              2,000,000₫ - 30,000,000₫
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="above3m" />
            <label className="form-check-label" htmlFor="above3m">
              Trên 3,000,000₫
            </label>
          </div>
        </form>
      </Card.Body>
    )}
  </Card>
);

// Thành phần bộ lọc loại sản phẩm
const CategoryFilter = ({ isOpen, toggleFilter }) => (
  <Card className="category-filter-card">
    <Card.Header className="d-flex justify-content-between align-items-center">
      <span className="filter-title">Loại sản phẩm</span>
      <button className="filter-toggle-button" onClick={toggleFilter}>
        {isOpen ? "-" : "+"}
      </button>
    </Card.Header>
    {isOpen && (
      <Card.Body>
        <form className="category-filter-form">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="forAll" />
            <label className="form-check-label" htmlFor="forAll">
              FOR ALL
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="forCats" />
            <label className="form-check-label" htmlFor="forCats">
              FOR CATS
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="forDogs" />
            <label className="form-check-label" htmlFor="forDogs">
              FOR DOGS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="forSmallPet"
            />
            <label className="form-check-label" htmlFor="forSmallPet">
              FOR SMALL PET
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="forYou" />
            <label className="form-check-label" htmlFor="forYou">
              For You
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="others" />
            <label className="form-check-label" htmlFor="others">
              Khác
            </label>
          </div>
        </form>
      </Card.Body>
    )}
  </Card>
);

// Thành phần bộ lọc thương hiệu
const BrandFilter = ({ isOpen, toggleFilter }) => (
  <Card className="brand-filter-card">
    <Card.Header className="d-flex justify-content-between align-items-center">
      <span className="filter-title">Thương hiệu</span>
      <button className="filter-toggle-button" onClick={toggleFilter}>
        {isOpen ? "-" : "+"}
      </button>
    </Card.Header>
    {isOpen && (
      <Card.Body>
        <form className="brand-filter-form">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="brand1" />
            <label className="form-check-label" htmlFor="brand1">
              Thương hiệu 1
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="brand2" />
            <label className="form-check-label" htmlFor="brand2">
              Thương hiệu 2
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="brand3" />
            <label className="form-check-label" htmlFor="brand3">
              Thương hiệu 3
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="brand4" />
            <label className="form-check-label" htmlFor="brand4">
              Thương hiệu 4
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="brand5" />
            <label className="form-check-label" htmlFor="brand5">
              Thương hiệu 5
            </label>
          </div>
        </form>
      </Card.Body>
    )}
  </Card>
);

const Product = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  const togglePriceFilter = () => setIsPriceOpen(!isPriceOpen);
  const toggleCategoryFilter = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleBrandFilter = () => setIsBrandOpen(!isBrandOpen);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products"); // Thay đổi endpoint tùy thuộc vào API
      setCurrentProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="img-wrapper col-md-12">
            <img src="images/anh5.jpg" className="img-fluid" alt="Banner 1" />
          </div>
        </Carousel.Item>
      </Carousel>

      <section id="clothing" className="my-5">
        <div className="container">
          <div className="row">
            {/* Bộ lọc giá */}
            <div className="col-md-4">
              <PriceFilter
                isOpen={isPriceOpen}
                toggleFilter={togglePriceFilter}
              />
            </div>

            {/* Bộ lọc loại sản phẩm */}
            <div className="col-md-4">
              <CategoryFilter
                isOpen={isCategoryOpen}
                toggleFilter={toggleCategoryFilter}
              />
            </div>

            {/* Bộ lọc thương hiệu */}
            <div className="col-md-4">
              <BrandFilter
                isOpen={isBrandOpen}
                toggleFilter={toggleBrandFilter}
              />
            </div>
          </div>

          {/* Phần sản phẩm */}
          <section id="products" className="my-5">
            <div className="container">
              <h2 className="display-4 fw-normal text-start">Sản Phẩm</h2>

              <div className="sorting-buttons">
                <span>Sắp xếp:</span>
                <button>Nổi bật</button>
                <button>Giá: Tăng dần</button>
                <button>Giá: Giảm dần</button>
                <button>A-Z</button>
                <button>Z-A</button>
                <button>Mới nhất</button>
                <button>Bán chạy</button>
              </div>

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
                          <span className="price">Giá: {product.price}</span>{" "}
                          <br />
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
          </section>

          {/* Pagination */}
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

export default Product;
