import Carousel from 'react-bootstrap/Carousel';

function Banner() {

  const products = [
    { id: 1, imgSrc: 'images/item1.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null, status: 'New' },
    { id: 2, imgSrc: 'images/item2.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null },
    { id: 3, imgSrc: 'images/item3.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null, status:'-10%' },
    { id: 4, imgSrc: 'images/item4.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, discount: null },
  ];

  const product = [
    { id: 1, category: 'cat', imgSrc: 'images/item9.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 2, category: 'dog', imgSrc: 'images/item10.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 3, category: 'dog', imgSrc: 'images/item11.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 4, category: 'cat', imgSrc: 'images/item12.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, status: 'Sold' },
    { id: 5, category: 'bird', imgSrc: 'images/item13.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 6, category: 'bird', imgSrc: 'images/item14.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 7, category: 'dog', imgSrc: 'images/item15.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, status: 'Sale' },
    { id: 8, category: 'cat', imgSrc: 'images/item16.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
  ];

  const blogs = [
    {
        date: '20',
        month: 'Feb',
        title: '10 Reasons to be helpful towards any animals',
        image: 'images/blog1.jpg',
        description: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
        link: 'single-post.html'
    },
    {
        date: '21',
        month: 'Feb',
        title: 'How to know your pet is hungry',
        image: 'images/blog2.jpg',
        description: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
        link: 'single-post.html'
    },
    {
        date: '22',
        month: 'Feb',
        title: 'Best home for your pets',
        image: 'images/blog3.jpg',
        description: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
        link: 'single-post.html'
    }
];

const instagramImages = [
  { src: 'images/insta1.jpg', alt: 'insta-img' },
  { src: 'images/insta2.jpg', alt: 'insta-img' },
  { src: 'images/insta3.jpg', alt: 'insta-img' },
  { src: 'images/insta4.jpg', alt: 'insta-img' },
  { src: 'images/insta5.jpg', alt: 'insta-img' },
  { src: 'images/insta6.jpg', alt: 'insta-img' }
];

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="img-wrapper col-md-12">
            <img src="images/anh1.jpg" className="img-fluid" alt="Banner 1" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="img-wrapper col-md-12">
            <img src="images/anh2.jpg" className="img-fluid" alt="Banner 2" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-wrapper col-md-12">
            <img src="images/anh3.jpg" className="img-fluid" alt="Banner 3" />
          </div>
        </Carousel.Item>
      </Carousel>

      <section id="categories">
        <div className="container my-3 py-5">
        <h2 className="display-4 fw-normal">Thú Cưng Yêu Tích Của Bạn</h2>
          <div className="row my-5 text-center">
          
            <div className="col">
              <a href="#" className="categories-item">
                <h3>Chuột Hamster</h3>
              </a>
            </div>
            <div className="col">
              <a href="#" className="categories-item">
                <h3>Thỏ</h3>
              </a>
            </div>
            <div className="col">
              <a href="#" className="categories-item">
                <h3>Chim vẹt</h3>
              </a>
            </div>
            <div className="col">
              <a href="#" className="categories-item">
                <h3>Chó</h3>
              </a>
            </div>
            <div className="col">
              <a href="#" className="categories-item">
                <h3>Mèo</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="clothing">
  <div className="container my-5 py-5">
    <div className="section-header d-md-flex justify-content-between align-items-center">
      <h2 className="display-4 fw-normal">Thời Trang Thú Cưng</h2>
    </div>

    <div className="isotope-container row">
      {products.map(product => (
        <div className={`item ${product.category} col-md-4 col-lg-3 my-4`} key={product.id}>
          {product.status && (
            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
              {product.status}
            </div>
          )}
          <div className="card position-relative">
            <a href="single-product.html"><img src={product.imgSrc} className="img-fluid rounded-4" alt="image" /></a>
            <div className="card-body p-0">
              <a href="single-product.html" className='title'>
                <h3 className="card-title pt-4 m-0">{product.title}</h3>
              </a>

              <div className="card-text">
              <span className="rating secondary-font">
  {[...Array(5)].map((_, index) => (
    <iconify-icon key={index} icon="clarity:star-solid"></iconify-icon>
  ))}
  <span className="rating-number">{product.rating}</span> {/* Chỉnh số 5 vào thẻ span */}
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
  </div>
</section>

<section id="clothing">
  <div className="container">
    <div className="section-header d-md-flex justify-content-between align-items-center">
      <h2 className="display-4 fw-normal">Thức ăn Thú Cưng</h2>
    </div>

    <div className="isotope-container row">
      {product.map(product => (
        <div className={`item ${product.category} col-md-4 col-lg-3 my-4`} key={product.id}>
          {product.status && (
            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
              {product.status}
            </div>
          )}
          <div className="card position-relative">
            <a href="single-product.html"><img src={product.imgSrc} className="img-fluid rounded-4" alt="image" /></a>
            <div className="card-body p-0">
              <a href="single-product.html" className='title'>
                <h3 className="card-title pt-4 m-0">{product.title}</h3>
              </a>

              <div className="card-text">
              <span className="rating secondary-font">
  {[...Array(5)].map((_, index) => (
    <iconify-icon key={index} icon="clarity:star-solid"></iconify-icon>
  ))}
  <span className="rating-number">{product.rating}</span> {/* Chỉnh số 5 vào thẻ span */}
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
  </div>
</section>

<section id="banner-2" className="my-3" style={{ background: '#F9F3EC' }}>
        <div className="container">
          <div className="row flex-row-reverse banner-content align-items-center">
            <div className="img-wrapper col-12 col-md-6">
              <img src="images/banner-img2.png" className="img-fluid" alt="Banner" />
            </div>
            <div className="content-wrapper col-12 offset-md-1 col-md-5 p-5">
              <div className="secondary-font text-primary text-uppercase mb-3 fs-4">Upto 40% off</div>
              <h2 className="banner-title display-1 fw-normal">Clearance sale !!!</h2>
              <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                shop now
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

<section id="latest-blog">
            <div className="container">
                <div className="row mt-5">
                    <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
                        <h2 className="display-4 fw-normal">Bài Đăng Trên Blog Mới Nhất</h2>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, index) => (
                        <div className="col-md-4 my-4 my-md-0" key={index}>
                            <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                                <h3 className="secondary-font text-primary m-0">{blog.date}</h3>
                                <p className="secondary-font fs-6 m-0">{blog.month}</p>
                            </div>
                            <div className="card position-relative">
                                <a href={blog.link}>
                                    <img src={blog.image} className="img-fluid rounded-4" alt="image" />
                                </a>
                                <div className="card-body p-0">
                                    <a href={blog.link} className='blog-read'>
                                        <h3 className="card-title pt-4 pb-3 m-0">{blog.title}</h3>
                                    </a>
                                    <div className="card-text">
                                        <p className="blog-paragraph fs-6">{blog.description}</p>
                                        <a href={blog.link} className="blog-read">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

         <section id="insta">
            <div className="row g-0 py-5">
                {instagramImages.map((image, index) => (
                    <div className="col instagram-item text-center position-relative" key={index}>
                        <div className="icon-overlay d-flex justify-content-center position-absolute">
                            <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
                        </div>
                        <a href="#">
                            <img src={image.src} alt={image.alt} className="img-fluid rounded-3" />
                        </a>
                    </div>
                ))}
            </div>
        </section>

    </>
  );
}

export default Banner;
