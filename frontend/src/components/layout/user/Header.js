import React from "react";
import { TOKEN } from "../../../constant/APIConstant";

function Header() {
  const logout = () => {
    // Xóa token và thông tin người dùng đã lưu trong localStorage
    localStorage.removeItem(TOKEN);
    localStorage.removeItem('userInfo');

    // Chuyển hướng người dùng về trang đăng nhập
    window.location.href = "http://localhost:3000/Login";
  };

  return (
    <header>
      <div className="container-fluid py-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-12 col-lg-6 d-flex justify-content-start">
            <div className="main-logo">
              <a href="/Register_Seller" className="me-3">Trở thành người bán</a>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6 d-flex justify-content-end align-items-center">
            <a href="index.html" className="me-3">Thông báo</a>
            <a href="index.html" className="me-3">Hỗ trợ</a>

            <div className="custom-select-wrapper me-3">
              <select className="form-select">
                <option>Tiếng Việt</option>
                <option>English</option>
              </select>
            </div>

            <a href="/Login" className="me-3">Đăng nhập</a>
            <a href="/Register" className="me-3">Đăng ký</a>
            <li onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>Đăng xuất</li>
          </div>
        </div>

        <div className="row py-4 align-items-center">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="logo" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-sm-8 col-lg-7">
            <div className="search-bar border rounded-2 px-0">
              <form id="search-form" className="d-flex align-items-center w-100 position-relative" action="" method="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products"
                  style={{ paddingRight: "40px" }}
                />
                <button
                  type="submit"
                  className="btn btn-pink position-absolute"
                  style={{
                    left: "91%",
                    backgroundColor: "#ff69b4",
                    color: "white",
                    width: "64px",
                    height: "35px",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <i className="bi bi-search" style={{ fontSize: "16px", color: "white" }}></i>
                </button>
              </form>
            </div>
          </div>

          <div className="col-sm-8 col-lg-2 d-flex justify-content-end align-items-center mt-4 mt-sm-0">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="index.html" className="mx-3 fs-4">
                  <iconify-icon icon="mdi:heart"></iconify-icon>
                </a>
              </li>
              <li>
                <a href="index.html" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <span className="fs-4 position-relative">
                    <iconify-icon icon="mdi:cart"></iconify-icon>
                    <span className="position-absolute translate-middle badge rounded-circle bg-danger pt-2">3</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="row w-100">
              <div className="col-3 mb-3">
                <select className="form-select" aria-label="Danh mục sản phẩm">
                  <option defaultValue>DANH MỤC SẢN PHẨM</option>
                  <option>Trang phục</option>
                  <option>Thức ăn</option>
                  <option>Phụ kiện</option>
                  <option>Thú cưng</option>
                </select>
              </div>

              <div className="col-9">
                <ul className="navbar-nav d-flex flex-row flex-wrap list-unstyled m-0">
                  <li className="nav-item">
                    <a href="/dashboardUser" className="nav-link">Trang chủ</a>
                  </li>
                  <li className="nav-item">
                    <a href="/Product" className="nav-link">Cửa hàng cho cún</a>
                  </li>
                  <li className="nav-item">
                    <a href="/Product" className="nav-link">Cửa hàng cho mèo</a>
                  </li>
                  <li className="nav-item">
                    <a href="/Product" className="nav-link">Cửa hàng cho chuột hamster</a>
                  </li>
                  <li className="nav-item">
                    <a href="/Product" className="nav-link">Cửa hàng cho thỏ</a>
                  </li>
                  <li className="nav-item">
                    <a href="/Product" className="nav-link">Cửa hàng cho chim vẹt</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
