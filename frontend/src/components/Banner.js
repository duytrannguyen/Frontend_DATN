import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Banner() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [upcomingProducts, setUpcomingProducts] = useState([]);
  const [error, setError] = useState(null);

  const products = [
    { id: 1, imgSrc: 'images/item1.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null},
    { id: 2, imgSrc: 'images/item2.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 3, imgSrc: 'images/item3.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 1, imgSrc: 'images/item1.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null},
    { id: 2, imgSrc: 'images/item2.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 3, imgSrc: 'images/item3.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 1, imgSrc: 'images/item1.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null},
    { id: 2, imgSrc: 'images/item2.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 3, imgSrc: 'images/item3.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', buy: 500, discount: null },
// =======
//   const products = [
//     { id: 1, imgSrc: 'images/item1.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null, status: 'New' },
//     { id: 2, imgSrc: 'images/item2.jpg', title: 'Red t-shirt', price: '$15.00', rating: 4.5, discount: null },
//     { id: 3, imgSrc: 'images/item3.jpg', title: 'Blue sneakers', price: '$25.00', rating: 4.0, discount: null, status: '-10%' },
//     { id: 4, imgSrc: 'images/item4.jpg', title: 'Green backpack', price: '$20.00', rating: 4.8, discount: null },
// >>>>>>> dev
  ];

  const blogs = [
    {
      date: '20',
      month: 'Feb',
      title: '10 Reasons to be helpful towards any animals',
      image: 'images/blog1.jpg',
      description: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements.',
      link: 'single-post.html'
    },
    {
      date: '21',
      month: 'Feb',
      title: 'How to know your pet is hungry',
      image: 'images/blog2.jpg',
      description: 'Understanding your pet’s needs is crucial for their well-being.',
      link: 'single-post.html'
    },
    {
      date: '22',
      month: 'Feb',
      title: 'Best home for your pets',
      image: 'images/blog3.jpg',
      description: 'Creating a comfortable space for your pets is essential.',
      link: 'single-post.html'
    }
  ];

  const instagramImages = [
    { src: 'images/insta1.jpg', alt: 'Instagram image 1' },
    { src: 'images/insta2.jpg', alt: 'Instagram image 2' },
    { src: 'images/insta3.jpg', alt: 'Instagram image 3' },
    { src: 'images/insta4.jpg', alt: 'Instagram image 4' },
    { src: 'images/insta5.jpg', alt: 'Instagram image 5' },
    { src: 'images/insta6.jpg', alt: 'Instagram image 6' }
  ];

  return (
    <>


<header>
      <div className="container py-2">

      <div className="col-sm-12 col-lg-12 d-flex justify-content-between align-items-center">
  <div className="main-logo">
    <a href="/ProductManagement">
      Kênh người bán
    </a>
    <a href="index.html">
      Trở thành người bán
    </a>
  </div>

  <div className="account-options ml-auto">
  <a href="index.html" className="me-3">Thông báo</a>
  <a href="index.html" className="me-3">Hỗ trợ</a>
  
  <div className="custom-select-wrapper me-3">
    <select className="filter-categoriess">
      <option>Tiếng việt</option>
      <option>English</option>
    </select>
  </div>

  <a href="index.html" className="me-3">Đăng nhập</a>
  <a href="index.html">Đăng ký</a>
</div>
</div>


        <div className="row py-4 pb-0 pb-sm-4 align-items-center">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="logo" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-sm-8 offset-sm-2 offset-md-0 col-lg-7 d-none d-lg-block">
            <div className="search-bar border rounded-2 px-0 border-dark-subtle">
            
            <form
  id="search-form"
  className="text-center d-flex align-items-center w-100 position-relative"
  action=""
  method=""
>
  <input
    type="text"
    className="form-control"
    placeholder="Search products"
    style={{ paddingRight: '40px' }} // Tạo khoảng cách bên phải cho icon
  />
 <button
  type="submit"
  className="btn position-absolute search-button"
  style={{
    left: '91%',
    backgroundColor: '#ff69b4', // Màu hồng cho nút
    color: 'white',             // Màu chữ/icon là trắng
    width: '64px',              // Chiều rộng của nút
    height: '35px',             // Chiều cao của nút
    border: 'none',             // Xóa viền
    borderRadius: '5px',        // Bo góc nút
  }}
>
  <i className="bi bi-search" style={{ fontSize: '16px', color: 'white' }}></i> {/* Icon tìm kiếm màu trắng */}
</button>

</form>

            </div>
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
            {['Chó', 'Mèo', 'Chim Vẹt', 'Thỏ', 'Chuột Hamster'].map((category, index) => (
              <div className="col" key={index}>
                <a href="#" className="categories-item">
                  <h3>{category}</h3>
                </a>
              </div>
            ))}
          </div>
          
          <div className="col-sm-8 col-lg-2 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
          <ul className="d-flex justify-content-end list-unstyled m-0">
                  <li>
                    <a href="index.html" className="mx-3">
                      <span className="fs-4"><iconify-icon icon="mdi:heart" class="fs-4"></iconify-icon></span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      <span className="fs-4 position-relative"><iconify-icon icon="mdi:cart" class="fs-4 position-relative"></iconify-icon></span>
                      <span className="position-absolute translate-middle badge rounded-circle bg-danger pt-2">3</span>
                    </a>
                  </li>
                </ul>
          </div>

          <div className="container">
  <nav className="main-menu d-flex navbar navbar-expand-lg justify-content-between">
    <div className="d-flex d-lg-none align-items-end mt-3">
      <ul className="d-flex justify-content-end list-unstyled m-0">
        <li>
          <a href="account.html" className="mx-3">
            <span className="fs-4">👤</span>
          </a>
        </li>
        <li>
          <a href="wishlist.html" className="mx-3">
            <span className="fs-4">❤️</span>
          </a>
        </li>
        <li>
          <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
            <span className="fs-4 position-relative">🛒</span>
            <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">03</span>
          </a>
        </li>
        <li>
          <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
            <span className="fs-4">🔍</span>
          </a>
        </li>
      </ul>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body d-flex justify-content-start">
        <select className="filter-categories border-0 mb-0 me-5 fw-bold">
          <option>DANH MỤC SẢN PHẨM</option>
          <option>Trang phục</option>
          <option>Thức ăn</option>
          <option>Phụ kiên</option>
          <option>Thú cưng</option>
        </select>

        <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
          <li className="nav-item">
            <a href="/" className="nav-link active">Trang chủ</a>
          </li>
          <li className="nav-item">
            <a href="/Product" className="nav-link active">Cửa hàng cho cún</a>
          </li>

          <li className="nav-item">
            <a href="/Product" className="nav-link active">Cửa hàng cho mèo</a>
          </li>

          <li className="nav-item">
            <a href="/Product" className="nav-link active">Cửa hàng cho chuột hamster</a>
          </li>

          <li className="nav-item">
            <a href="/Product" className="nav-link active">Cửa hàng cho thỏ</a>
          </li>

          <li className="nav-item">
            <a href="/Product" className="nav-link active">Của hàng cho chim vẹt</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</div>

        </div>  
      </div>
    </header>
    
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
            {['Chó', 'Mèo', 'Chim Vẹt', 'Thỏ', 'Chuột Hamster'].map((category, index) => (
              <div className="col" key={index}>
                <a href="#" className="categories-item">
                  <h3>{category}</h3>
                </a>

      {/* Products Section */}
      <section id="products" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal">Sản Phẩm Nổi Bật</h2>
          <div className="row">
            {products.map(product => (
              <div className="col-md-3 my-4" key={product.id}>
                <div className="card">
                  <a href="single-product.html">
                    <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary me-2" onClick={() => alert('Đã thêm vào giỏ!')}>Thêm vào giỏ</button>
                      <button className="btn btn-outline-danger">Yêu thích</button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="images/banner2.png" className="d-block w-100" alt="Banner 1" />
        </Carousel.Item>
      </Carousel>


      {/* Products Section */}
      <section id="products" className="my-5">
  <div className="container">
    <h2 className="display-4 fw-normal">Sản Phẩm Nổi Bật</h2>
    <Row xs={1} md={5} className="g-4"> {/* Điều chỉnh số cột theo kích thước màn hình */}
      {products.map(product => (
        <Col key={product.id}>
          <Card>
          <a href='/ProductDetail'><Card.Img src={product.imgSrc} alt={product.title} /></a> 
            <Card.Body>
              <a href='/ProductDetail' className='title'><Card.Title>{product.title}</Card.Title></a>
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

  <hr/>

  <div className="container">
    <h2 className="display-4 fw-normal">Sản Phẩm bán chạy</h2>
    <Row xs={1} md={5} className="g-4"> {/* Điều chỉnh số cột theo kích thước màn hình */}
      {products.map(product => (
        <Col key={product.id}>
          <Card>
          <a href='/ProductDetail'><Card.Img src={product.imgSrc} alt={product.title} /></a> 
            <Card.Body>
              <a href='/ProductDetail' className='title'><Card.Title>{product.title}</Card.Title></a>
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
              <img src={blog.image} className="card-img-top blog-image" alt={blog.title} />
            </a>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.description}</p>
              <a href={blog.link} className="btn btn-outline-primary">Đọc thêm</a>
            </div>
      {/* Latest Blogs Section */}
      <section id="latest-blog" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal">Bài Đăng Trên Blog Mới Nhất</h2>
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-md-4 my-4" key={index}>
                <div className="card">
                  <a href={blog.link}>
                    <img src={blog.image} className="card-img-top" alt={blog.title} />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href={blog.link} className="btn btn-outline-primary">Đọc thêm</a>
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
          <h2 className="display-4 fw-normal text-center">Theo Dõi Chúng Tôi Trên Instagram</h2> <br/>
      {/* Instagram Section */}
      <section id="insta" className="my-5">
        <div className="container">
          <h2 className="display-4 fw-normal text-center">Theo Dõi Chúng Tôi Trên Instagram</h2>
          <div className="row g-0">
            {instagramImages.map((image, index) => (
              <div className="col instagram-item text-center position-relative" key={index}>
                <a href="#">
                  <img src={image.src} alt={image.alt} className="img-fluid rounded" />
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
