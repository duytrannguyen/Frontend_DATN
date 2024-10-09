import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom'; // Thêm import Link
import axios from "../serviceAxios/axios";

const Product = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [upcomingProducts, setUpcomingProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/home/products/postingDate")
      .then((response) => {
        console.log(response.data);  // Kiểm tra dữ liệu trả về từ API
        setCurrentProducts(response.data.currentProducts);
        setUpcomingProducts(response.data.upcomingProducts);
      })
      .catch((error) => {
        setError("Lỗi khi lấy dữ liệu sản phẩm: " + error.message);
      });
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="img-wrappers col-md-12">
            <img src="images/anh5.jpg" className="img-fluid" alt="Banner 1" />
          </div>
        </Carousel.Item>
      </Carousel>

      <section id="clothing" className="my-5">
        <div className="container">
          <div className="row">
            {/* Phần ListGroup */}
            <div className="col-md-3">
              <ListGroup as="ul">
                <ListGroup.Item as="li" active style={{ backgroundColor: '#ffb6c1', color: 'black' }}>
                  Theo mức giá
                </ListGroup.Item>

                {["Dưới 50.000", "50.000 - 250.000", "200.000 - 500.000", "500.000 - 1.000.000", "Trên 1.000.000"].map((priceRange, index) => (
                  <ListGroup.Item as="li" key={index}>
                    <div className="d-flex align-items-center custom-radio">
                      <input type="radio" name="category" id={`priceRange${index}`} className="me-2" />
                      <label htmlFor={`priceRange${index}`} className="m-0">{priceRange}</label>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <br />
              <ListGroup as="ul">
                <ListGroup.Item as="li" active style={{ backgroundColor: '#ffb6c1', color: 'black' }}>
                  Danh mục sản phẩm
                </ListGroup.Item>
                <ListGroup.Item as="li">Thời trang</ListGroup.Item>
                <ListGroup.Item as="li">Thức ăn</ListGroup.Item>
                <ListGroup.Item as="li">Phụ kiện</ListGroup.Item>
              </ListGroup>
            </div>

            {/* Phần Sản Phẩm */}
            <div className="col-md-9">
              <div className="section-header d-md-flex justify-content-between align-items-center">
                <h2 className="display-4 fw-normal">Sản Phẩm</h2>
                <div className="d-flex align-items-center">
                  <span className="me-2 fw-bold">Sắp xếp: </span>
                  <select className="custom-select w-auto px-6">
                    <option>Sản phẩm phổ biến</option>
                    <option>Giá tăng dần</option>
                    <option>Giá giảm dần</option>
                    <option>Sản phẩm mới</option>
                    <option>Sản phẩm cũ</option>
                  </select>
                </div>
              </div>

              <div className="row">
                {currentProducts.map((product) => (
                  <div className="col-md-4 my-4" key={product.productId}>
                    <div className="card">
                      <Link to={`/ProductDetail/${product.productId}`}>
                        <img
                          src={`Image_SP/${product.imageUrl}`} // Đảm bảo đường dẫn đúng với thư mục hình ảnh
                          className="card-img-top"
                          alt={product.productName}
                        />
                      </Link>
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                          }).format(product.price)}
                        </p>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => alert("Đã thêm vào giỏ!")}
                          >
                            Thêm vào giỏ
                          </button>
                          <button className="btn btn-outline-danger">
                            Yêu thích
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Pagination className="custom-pagination d-flex justify-content-center">
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
