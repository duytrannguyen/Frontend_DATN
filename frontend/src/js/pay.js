import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pay.css';

const CheckoutForm = ({ user, cartItems, total, discountAmount, status }) => {
    const [formData, setFormData] = useState({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        shippingMethod: 2,
        paymentMethod: 1,
        discountCode: "",
        note: "",
        agreeTerms: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic gửi form lên server hoặc xử lý tại đây
        console.log(formData);
    };

    const applyDiscount = () => {
        // Logic áp dụng mã khuyến mãi
        console.log("Applying discount code:", formData.discountCode);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="card mt-5">
                    <strong>ĐỊA CHỈ GIAO HÀNG</strong>
                    <hr />

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Họ và tên người nhận</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                placeholder="Nhập họ và tên"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Nhập email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Số điện thoại</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="10 ký tự số"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="card">
                        <strong>PHƯƠNG THỨC VẬN CHUYỂN</strong>
                        <hr />
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="shippingMethod"
                                value="2"
                                checked={formData.shippingMethod === 2}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">
                                <strong>Giao hàng tiêu chuẩn: 32.000 VNĐ</strong>
                                <p style={{ fontSize: "small" }}>Thứ 6 - 25/6</p>
                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <strong>PHƯƠNG THỨC THANH TOÁN</strong>
                        <hr />
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="2"
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">Thanh toán VNPay</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="3"
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">Thanh toán Internetbanking</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="1"
                                checked={formData.paymentMethod === 1}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">Thanh toán khi nhận hàng</label>
                        </div>
                    </div>

                    <div className="card">
                        <strong>MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG</strong>
                        <hr />
                        <div className="row g-3 align-items-center">
                            <div className="col-sm-7">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="discountCode"
                                        placeholder="Nhập mã khuyến mãi"
                                        value={formData.discountCode}
                                        onChange={handleInputChange}
                                    />
                                    <button
                                        className="btn btn-primary btn-xs col-auto"
                                        type="button"
                                        onClick={applyDiscount}
                                    >
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <strong>THÔNG TIN KHÁC</strong>
                        <hr />
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="hasNote"
                                checked={formData.hasNote}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label">Ghi Chú</label>
                        </div>
                        {formData.hasNote && (
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="note"
                                    placeholder="Ghi chú"
                                    value={formData.note}
                                    onChange={handleInputChange}
                                />
                                <label>Ghi chú</label>
                            </div>
                        )}
                    </div>

                    <div className="card">
                        <strong>KIỂM TRA LẠI ĐƠN HÀNG</strong>
                        <hr />
                        <div className="col-md-12">
                            {cartItems.map((item, index) => (
                                <div className="row" key={index}>
                                    <div className="col-md-2">
                                        <img
                                            src={`/images/${item.productId.imageId.imageName}`}
                                            alt={item.productId.productName}
                                            style={{ width: "150px", height: "150px" }}
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <p>{item.productId.productName}</p>
                                    </div>
                                    <div className="col-md-1">
                                        <p>{item.quantity}</p>
                                    </div>
                                    <div className="col-md-2">
                                        <p>{item.productId.price - (item.productId.price * item.productId.discountPercentage / 100)} VNĐ</p>
                                        <p className="giaGiam text-body-tertiary">
                                            {item.productId.price} VNĐ
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="card">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-3">
                                    <p className="text-end">Thành tiền</p>
                                    <p className="text-end">Khuyến mãi</p>
                                    <p className="text-end">Phí vận chuyển (Giao hàng tiêu chuẩn)</p>
                                    <p className="text-end fw-bold">Tổng tiền (gồm VAT)</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="text-end">{total || 0} VNĐ</p>
                                    <p className="text-end">{discountAmount || 0} VNĐ</p>
                                    <p className="text-end">32.000 VNĐ</p>
                                    <p className="text-end text-primary fw-bold">
                                        {total - discountAmount + 32000} VNĐ
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-7">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={handleCheckboxChange}
                                            required
                                        />
                                        <label className="form-check-label">
                                            Tôi đã kiểm tra lại đơn hàng và đồng ý với điều khoản sử dụng
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        type="submit"
                                        className={`btn btn-warning text-center col-md-12 ${status === "empty" ? "disabled" : ""
                                            }`}
                                    >
                                        Xác nhận đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;
