import React from "react";

function Header() {
  return (
    <header>
      <div className="container py-2">
        <div className="col-sm-12 col-lg-12 d-flex justify-content-between align-items-center">
          <div className="main-logo">
            <a href="/ProductManagement">Kênh người bán</a>
            <a href="index.html">Trở thành người bán</a>
          </div>

          <div className="account-options ml-auto">
            <a href="index.html" className="me-3">
              Thông báo
            </a>
            <a href="index.html" className="me-3">
              Hỗ trợ
            </a>

            <div className="custom-select-wrapper me-3">
              <select className="filter-categoriess">
                <option>Tiếng việt</option>
                <option>English</option>
              </select>
            </div>

            <a href="index.html" className="me-3">
              Đăng nhập
            </a>
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
                  style={{ paddingRight: "40px" }} // Tạo khoảng cách bên phải cho icon
                />
                <button
                  type="submit"
                  className="btn position-absolute search-button"
                  style={{
                    left: "91%",
                    backgroundColor: "#ff69b4", // Màu hồng cho nút
                    color: "white", // Màu chữ/icon là trắng
                    width: "64px", // Chiều rộng của nút
                    height: "35px", // Chiều cao của nút
                    border: "none", // Xóa viền
                    borderRadius: "5px", // Bo góc nút
                  }}
                >
                  <i
                    className="bi bi-search"
                    style={{ fontSize: "16px", color: "white" }}
                  ></i>{" "}
                  {/* Icon tìm kiếm màu trắng */}
                </button>
              </form>
            </div>
          </div>

          <div className="col-sm-8 col-lg-2 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="index.html" className="mx-3">
                  <span className="fs-4">
                    <iconify-icon icon="mdi:heart" class="fs-4"></iconify-icon>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  className="mx-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <span className="fs-4 position-relative">
                    <iconify-icon
                      icon="mdi:cart"
                      class="fs-4 position-relative"
                    ></iconify-icon>
                  </span>
                  <span className="position-absolute translate-middle badge rounded-circle bg-danger pt-2">
                    3
                  </span>
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
                    <a
                      href="#"
                      className="mx-3"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasCart"
                      aria-controls="offcanvasCart"
                    >
                      <span className="fs-4 position-relative">🛒</span>
                      <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                        03
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mx-3"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasSearch"
                      aria-controls="offcanvasSearch"
                    >
                      <span className="fs-4">🔍</span>
                    </a>
                  </li>
                </ul>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header justify-content-center">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
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
                      <a href="/" className="nav-link active">
                        Trang chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Product" className="nav-link active">
                        Cửa hàng cho cún
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/Product" className="nav-link active">
                        Cửa hàng cho mèo
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/Product" className="nav-link active">
                        Cửa hàng cho chuột hamster
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/Product" className="nav-link active">
                        Cửa hàng cho thỏ
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/Product" className="nav-link active">
                        Của hàng cho chim vẹt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
