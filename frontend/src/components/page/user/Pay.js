import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/pay.css";

const CheckoutForm = () => {
  const [invoices, setInvoices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    shippingMethod: 2,
    paymentMethod: 1,
    discountCode: "",
    hasNote: false,
    note: "",
  });
  const [cartItems, setCartItems] = useState([]); // Giả định bạn đã có cartItems
  const [total, setTotal] = useState(0); // Tổng tiền
  const [discountAmount, setDiscountAmount] = useState(0); // Số tiền khuyến mãi
  const [status, setStatus] = useState(""); // Trạng thái đơn hàng

  useEffect(() => {
    // Giả định bạn đã gọi API để lấy thông tin hóa đơn ở đây
    const fetchInvoices = async () => {
      try {
        const response = await fetch(`/api/user/1?StatusName=active`);
        const data = await response.json();
        setInvoices(data);
      } catch (error) {
        console.error("Lỗi khi tải hóa đơn:", error);
      }
    };
    fetchInvoices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu lên máy chủ ở đây
    console.log("Dữ liệu gửi đi:", formData);
  };

  const applyDiscount = () => {
    // Xử lý áp dụng mã khuyến mãi ở đây
    console.log("Áp dụng mã giảm giá:", formData.discountCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="card mt-5">
          <strong>ĐỊA CHỈ GIAO HÀNG</strong>
          <hr />
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">
              Họ và tên người nhận
            </label>
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

          <div>
            <h5>Thông tin hóa đơn:</h5>
            {invoices.length > 0 ? (
              <ul>
                {invoices.map((invoice, index) => (
                  <li key={index}>
                    Hóa đơn ID: {invoice.id}, Trạng thái: {invoice.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không có hóa đơn nào.</p>
            )}
          </div>

          {/* Phần còn lại của form */}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
