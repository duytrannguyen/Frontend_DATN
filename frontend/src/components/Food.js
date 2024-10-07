import React from 'react';

const PetFoodies = () => {
  const products = [
    { id: 1, category: 'cat', imgSrc: 'images/item9.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 2, category: 'dog', imgSrc: 'images/item10.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 3, category: 'dog', imgSrc: 'images/item11.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 4, category: 'cat', imgSrc: 'images/item12.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, status: 'Sold' },
    { id: 5, category: 'bird', imgSrc: 'images/item13.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 6, category: 'bird', imgSrc: 'images/item14.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
    { id: 7, category: 'dog', imgSrc: 'images/item15.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0, status: 'Sale' },
    { id: 8, category: 'cat', imgSrc: 'images/item16.jpg', title: 'Grey hoodie', price: '$18.00', rating: 5.0 },
  ];

  return (
    <section id="foodies" className="my-5">
      <div className="container my-5 py-5">
        <div className="section-header d-md-flex justify-content-between align-items-center">
          <h2 className="display-3 fw-normal">Pet Foodies</h2>
          <div className="mb-4 mb-md-0">
            <p className="m-0">
              <button className="filter-button me-4 active" data-filter="*">ALL</button>
              <button className="filter-button me-4" data-filter=".cat">CAT</button>
              <button className="filter-button me-4" data-filter=".dog">DOG</button>
              <button className="filter-button me-4" data-filter=".bird">BIRD</button>
            </p>
          </div>
          <div>
            <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
              shop now
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </a>
          </div>
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
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">{product.title}</h3>
                  </a>

                  <div className="card-text">
                    <span className="rating secondary-font">
                      {[...Array(5)].map((_, index) => (
                        <iconify-icon key={index} icon="clarity:star-solid" className="text-primary"></iconify-icon>
                      ))}
                      {product.rating}
                    </span>

                    <h3 className="secondary-font text-primary">{product.price}</h3>

                    <div className="d-flex flex-wrap mt-3">
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
  );
};

export default PetFoodies;
