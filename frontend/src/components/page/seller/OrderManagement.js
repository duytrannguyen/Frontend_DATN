import React, { useState } from "react";
import "../../css/OrderManagement.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OrderManagement = () => {
  const [selectedTab, setSelectedTab] = useState("tatCa");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* Tabs Section */}
              <div className="col-lg-12">
                <div className="card info-card">
                  <div className="card-body">
                    <ul className="nav nav-tabs order-status-tabs">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "tatCa" ? "active" : ""
                            }`}
                          href="#"
                          onClick={() => handleTabClick("tatCa")}
                        >
                          Tất cả
                          <div>0 đơn hàng</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "choXacNhan" ? "active" : ""
                            }`}
                          href="#"
                          onClick={() => handleTabClick("choXacNhan")}
                        >
                          Chờ xác nhận
                          <div>0/0 đơn quá hạn XN</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "dangXuLy" ? "active" : ""
                            }`}
                          href="#"
                          onClick={() => handleTabClick("dangXuLy")}
                        >
                          Đang xử lý
                          <div>0/0 đơn quá hạn XN</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "dangVanChuyen" ? "active" : ""
                            }`}
                          href="#"
                          onClick={() => handleTabClick("dangVanChuyen")}
                        >
                          Đang vận chuyển
                          <div>0 đơn hàng</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "daGiaoHang" ? "active" : ""
                            }`}
                          href="#"
                          onClick={() => handleTabClick("daGiaoHang")}
                        >
                          Đã giao hàng
                          <div>0 đơn hàng</div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "daHuy" ? "active" : ""
                            }`}
                          href="#"
                          onClick={() => handleTabClick("daHuy")}
                        >
                          Đã hủy
                          <div>0 đơn hàng</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Display the content for the selected tab */}
              <div className="col-lg-12">
                <div className="card info-card">
                  <div className="card-body">
                    {selectedTab === "choXacNhan" && (
                      <>
                        <h5 className="card-title">Đơn hàng chờ xác nhận</h5>
                        {/* Filter Section */}
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mã đơn hàng"
                            style={{ maxWidth: "150px" }}
                          />
                          <input
                            type="text"
                            className="form-control mx-2"
                            placeholder="Tên khách hàng"
                            style={{ maxWidth: "200px" }}
                          />
                          <input
                            type="date"
                            className="form-control mx-2"
                            style={{ maxWidth: "150px" }}
                          />
                          <button className="btn btn-primary ms-2">
                            <i className="bi bi-search me-2"></i>Tìm kiếm
                          </button>
                        </div>

                        {/* Order List Section */}
                        <table className="table table-striped align-middle text-center">
                          <thead>
                            <tr>
                              <th scope="col">Mã đơn hàng</th>
                              <th scope="col">Hình thức giao hàng</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Khách hàng phải trả</th>
                              <th scope="col">Hạn xác nhận</th>
                              <th scope="col">Thao tác</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i className="bi bi-bag-fill me-2"></i>719533246
                              </td>
                              <td>Giao hàng nhanh</td>
                              <td>
                                <span className="badge bg-danger">
                                  Chưa xác nhận
                                </span>
                              </td>
                              <td>1</td>
                              <td>0 đ</td>
                              <td>Ngày mai 09:28:00</td>
                              <td>
                                <button className="btn-custom">
                                  Xem chi tiết
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-bag-fill me-2"></i>750602738
                              </td>
                              <td>Giao hàng nhanh</td>
                              <td>
                                <span className="badge bg-success">
                                  Chưa xác nhận
                                </span>
                              </td>
                              <td>1</td>
                              <td>1,450,374 VNĐ</td>
                              <td>XN lúc 07/06/2021 14:05:07</td>
                              <td>
                                <button className="btn-custom">
                                  Xem chi tiết
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </>
                    )}

                    {selectedTab === "tatCa" && (
                      <>
                        <h5 className="card-title">Danh sách tất cả đơn hàng</h5>
                        {/* Filter Section */}
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mã đơn hàng"
                            style={{ maxWidth: "150px" }}
                          />
                          <input
                            type="text"
                            className="form-control mx-2"
                            placeholder="Tên khách hàng"
                            style={{ maxWidth: "200px" }}
                          />
                          <input
                            type="date"
                            className="form-control mx-2"
                            style={{ maxWidth: "150px" }}
                          />
                          <button className="btn btn-primary ms-2">
                            <i className="bi bi-search me-2"></i>Tìm kiếm
                          </button>
                        </div>

                        {/* Order List Section */}
                        <table className="table table-striped align-middle text-center">
                          <thead>
                            <tr>
                              <th scope="col">Mã đơn hàng</th>
                              <th scope="col">Hình thức giao hàng</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Khách hàng phải trả</th>
                              <th scope="col">Hạn xác nhận</th>
                              <th scope="col">Thao tác</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i className="bi bi-bag-fill me-2"></i>719533246
                              </td>
                              <td>Giao hàng nhanh</td>
                              <td>
                                <span className="badge bg-danger">
                                  Chưa xác nhận
                                </span>
                              </td>
                              <td>1</td>
                              <td>0 đ</td>
                              <td>Ngày mai 09:28:00</td>
                              <td>
                                <button className="btn-custom">
                                  Xem chi tiết
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-bag-fill me-2"></i>750602738
                              </td>
                              <td>Giao hàng nhanh</td>
                              <td>
                                <span className="badge bg-success">
                                  Được giao
                                </span>
                              </td>
                              <td>1</td>
                              <td>1,450,374 VNĐ</td>
                              <td>XN lúc 07/06/2021 14:05:07</td>
                              <td>
                                <button className="btn-custom">
                                  Xem chi tiết
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}

                    {selectedTab === "dangXuLy" && (
                      <>
                        <h5 className="card-title">Danh sách đơn hàng đang xử lý</h5>
                      </>
                    )}

                    {selectedTab === "dangVanChuyen" && (
                      <>
                        <h5 className="card-title">Danh sách đơn hàng đang vận chuyển</h5>
                      </>
                    )}

                    {selectedTab === "daGiaoHang" && (
                      <>
                        <h5 className="card-title">Danh sách đơn hàng đang đã giao</h5>
                      </>
                    )}

                    {selectedTab === "daHuy" && (
                      <>
                        <h5 className="card-title">Danh sách đơn hàng đã hủy</h5>
                      </>
                    )}
                    {/* You can add other tab content in a similar way */}
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderManagement;
