import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
const Product = () => {

  const products = [
    { id: 1, imgSrc: 'images/item1.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null, status: 'New' },
    { id: 2, imgSrc: 'images/item2.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null },
    { id: 3, imgSrc: 'images/item3.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null, status:'-10%' },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null },
    { id: 5, imgSrc: 'images/item5.jpg', title: 'Black T-shirt', price: '$22.00', rating: 4.5, discount: '15%', status: 'Sale' }
  ];

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

  <ListGroup.Item as="li">
    <div className="d-flex align-items-center custom-radio">
      <input type="radio" name="category" id="under50k" className="me-2" />
      <label htmlFor="under50k" className="m-0">Dưới 50.000</label>
    </div>
  </ListGroup.Item>

  <ListGroup.Item as="li">
    <div className="d-flex align-items-center custom-radio">
      <input type="radio" name="category" id="50kTo250k" className="me-2" />
      <label htmlFor="50kTo250k" className="m-0">50.000 - 250.000</label>
    </div>
  </ListGroup.Item>

  <ListGroup.Item as="li">
    <div className="d-flex align-items-center custom-radio">
      <input type="radio" name="category" id="200kTo500k" className="me-2" />
      <label htmlFor="200kTo500k" className="m-0">200.000 - 500.000</label>
    </div>
  </ListGroup.Item>

  <ListGroup.Item as="li">
    <div className="d-flex align-items-center custom-radio">
      <input type="radio" name="category" id="500kTo1000k" className="me-2" />
      <label htmlFor="500kTo1000k" className="m-0">500.000 - 1.000.000</label>
    </div>
  </ListGroup.Item>

  <ListGroup.Item as="li">
    <div className="d-flex align-items-center custom-radio">
      <input type="radio" name="category" id="above1000k" className="me-2" />
      <label htmlFor="above1000k" className="m-0">Trên 1.000.000</label>
    </div>
  </ListGroup.Item>
</ListGroup>

              <br/>
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

              <div className="isotope-container row">
                {products.slice(0, 3).map(product => (  // Chỉ hiển thị 3 sản phẩm
                  <div className={`item ${product.category} col-md-4 my-4`} key={product.id}>
                    {product.status && (
                      <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                        {product.status}
                      </div>
                    )}
                    <div className="card position-relative">
                      <a href="single-product.html">
                        <img src={product.imgSrc} className="img-fluid rounded-4" alt={product.title} />
                      </a>
                      <div className="card-body p-0">
                        <a href="single-product.html" className="title">
                          <h3 className="card-title pt-4 m-0">{product.title}</h3>
                        </a>

                        <div className="card-text">
                          <span className="rating secondary-font">
                            {[...Array(5)].map((_, index) => (
                              <iconify-icon key={index} icon="clarity:star-solid"></iconify-icon>
                            ))}
                            <span className="rating-number">{product.rating}</span>
                          </span>

                          <h3 className="secondary-font">{product.price}</h3>

                          <div className="d-flex justify-content-center flex-wrap mt-3">
                            <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                              <h5 className="text-uppercase m-0">Add to Cart</h5>
                            </a>
                            <a href="#" className="btn-wishlist px-4 pt-3">
                              <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                            </a>
                          </div>
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
