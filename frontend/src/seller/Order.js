import React from 'react';
import './css/OrderManagement.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const OrderManagement = () => {
    return (
        <main className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            {/* Tabs Section */}
                            <div className="tabs-section col-12">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <i className="bi bi-box-seam me-2"></i>Chờ xử lý
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="bi bi-box me-2"></i>Chờ đóng gói
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="bi bi-truck me-2"></i>Chờ bàn giao
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Filter Section */}
                            <div className="col-12 my-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <input type="text" className="form-control" placeholder="Số đơn hàng" />
                                    <input type="date" className="form-control mx-2" />
                                    <button className="btn btn-primary ms-2">
                                        <i className="bi bi-search me-2"></i>Tìm kiếm
                                    </button>
                                </div>
                            </div>

                            {/* Order List */}
                            <div className="col-12 my-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Danh sách đơn hàng</h5>
                                        <table className="table table-striped align-middle text-center">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sản phẩm</th>
                                                    <th scope="col">Tổng cộng</th>
                                                    <th scope="col">Trạng thái</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><i className="bi bi-bag-fill me-2"></i>Pet Food</td>
                                                    <td>500.000 VNĐ</td>
                                                    <td><span className="badge bg-warning">Chờ xử lý</span></td>
                                                    <td>
                                                        <button className="btn btn-info">
                                                            <i className="bi bi-eye me-2"></i>Chi tiết
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Toast Notification */}
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Thông báo</strong>
                        <small>Vừa xong</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Đã tải xong chi tiết đơn hàng!
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrderManagement;
