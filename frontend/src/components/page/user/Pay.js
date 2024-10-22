import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { showToast, showErrorToast } from "../../../utils/Toast";

import { payService } from "../../../services/payService"; // Import dịch vụ
const CheckoutForm = () => {
  // Sử dụng useLocation để lấy state từ location
  const location = useLocation();
  const [images, setProductImages] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotalAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(32000);
  const { selectedCartItems = [] } = location.state || {}; // Gán giá trị mặc định cho selectedCartItems
  const [invoiceData, setInvoiceData] = useState({
    usersId: 1, // ID người dùng, cần truyền vào từ thông tin người dùng hiện tại
    fullName: "",
    email: "",
    phone: "",
    fullAddress: "",
    paymentMethodId: "",
    discountCodeId: "1",
    feeShip: "32000",
    invoiceItems: [], // Thêm thuộc tính cho danh sách mục hóa đơn
  });

  // Hàm tính tổng tiền cho selectedCartItems
  const calculateSelectedTotalAmount = () => {
    // Kiểm tra nếu không có sản phẩm nào được chọn
    if (selectedCartItems.length === 0) return 0;

    const total = selectedCartItems.reduce((sum, item) => {
      const itemPrice = item.products[0].price; // Lấy giá sản phẩm

      // Tính số tiền giảm giá nếu có phần trăm giảm giá
      const discountAmount = item.products[0].percentDecrease
        ? (itemPrice * item.products[0].percentDecrease) / 100
        : 0; // Tránh lỗi nếu không có percentDecrease

      const priceAfterDiscount = itemPrice - discountAmount; // Giá sau khi giảm
      return sum + priceAfterDiscount * item.quantity; // Cộng dồn thành tiền cho sản phẩm
    }, 0);

    return total; // Trả về tổng tiền
  };

  // Cập nhật tổng tiền cho selectedCartItems trong useEffect
  useEffect(() => {
    const total = calculateSelectedTotalAmount(); // Tính toán tổng cho selectedCartItems
    setTotalAmount(total); // Cập nhật state tổng tiền
  }, [selectedCartItems]); // Cập nhật khi selectedCartItems thay đổi

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    // Kiểm tra nếu có sản phẩm đã chọn để thanh toán
    if (selectedCartItems.length === 0) {
      showErrorToast("Không có sản phẩm nào để thanh toán.");
      return;
    }

    // Tạo danh sách invoiceItems từ selectedCartItems
    const invoiceItems = selectedCartItems.map((cartItem) => ({
      product: {
        productId: cartItem.productId, // Giả sử bạn có productId trong selectedCartItems
      },
      quantity: cartItem.quantity, // Số lượng sản phẩm
      price: cartItem.price, // Giá sản phẩm
    }));

    const invoiceDataToSend = {
      ...invoiceData,
      invoiceItems, // Thêm danh sách mục hóa đơn vào dữ liệu hóa đơn
    };

    try {
      const result = await payService.createInvoice(invoiceDataToSend);
      console.log("Hóa đơn đã được tạo: ", result);
      showToast("Đặt Hàng Thành Công!");
    } catch (error) {
      console.error("Thanh toán thất bại: ", error);
      showErrorToast("Thanh toán thất bại");
    }
  };
  // Hàm để fetch ảnh sản phẩm khi selectedCartItems thay đổi
  const fetchImagesForSelectedItems = async () => {
    if (selectedCartItems.length > 0) {
      // Fetch ảnh sản phẩm cho từng sản phẩm trong selectedCartItems
      const productImagePromises = selectedCartItems.map(async (item) => {
        if (item.products && item.products.length > 0) {
          const productId = item.products[0].productId; // Lấy productId từ sản phẩm đầu tiên
          return fetchProductImages(productId);
        }
        return [];
      });
      const images = await Promise.all(productImagePromises);
      setProductImages(images.flat()); // Đặt hình ảnh sản phẩm
    }
  };

  // Fetch ảnh sản phẩm
  const fetchProductImages = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/home/products/${productId}/images`
      );
      return response.data.length > 0 ? response.data : [];
    } catch (error) {
      console.error("Lỗi khi fetch ảnh sản phẩm:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchImagesForSelectedItems();
  }, [selectedCartItems]); // Gọi lại khi selectedCartItems thay đổi

  return (
    <form onSubmit={handlePayment}>
      <div className="container">
        <strong>ĐỊA CHỈ GIAO HÀNG</strong>
        <hr />
        <div className="row mb-3">
          <label htmlFor="fullName" className="col-sm-2 col-form-label">
            Họ và tên người nhận
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              placeholder="Nhập họ và tên"
              value={invoiceData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Nhập email"
              value={invoiceData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            Số điện thoại
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="10 ký tự số"
              value={invoiceData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="fullAddress" className="col-sm-2 col-form-label">
            Địa chỉ
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="fullAddress"
              name="fullAddress"
              placeholder="Nhập địa chỉ"
              value={invoiceData.fullAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <strong>PHƯƠNG THỨC VẬN CHUYỂN</strong>
        <hr />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="shippingId"
            id="standardShipping"
            value="2"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="standardShipping">
            <strong>Giao hàng tiêu chuẩn: 32.000 VNĐ</strong>
            <br />
            <p style={{ fontSize: "small" }}>Thứ 6 - 25/6</p>
          </label>
        </div>

        <strong>PHƯƠNG THỨC THANH TOÁN</strong>
        <hr />
        {["vnPay", "internetbanking", "cashOnDelivery"].map((method, index) => (
          <div className="form-check" key={method}>
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethodId"
              id={method}
              value={index + 1} // Giá trị của phương thức thanh toán
              defaultChecked={method === "cashOnDelivery"}
              onChange={(e) =>
                setInvoiceData({
                  ...invoiceData,
                  paymentMethodId: e.target.value, // Cập nhật paymentMethodId
                })
              }
            />
            <label className="form-check-label" htmlFor={method}>
              <i
                className={`fa-regular fa-${
                  method === "cashOnDelivery" ? "money-bill-1" : "credit-card"
                }`}
                style={{ fontSize: "x-large" }}
              ></i>
              Thanh toán{" "}
              {method === "cashOnDelivery" ? "khi nhận hàng" : method}
            </label>
          </div>
        ))}

        <div className="card-body">
          <strong>KIỂM TRA LẠI ĐƠN HÀNG</strong>
          <hr />
          <div className="col-md-12">
            {selectedCartItems.length > 0 ? (
              selectedCartItems.map((item) => (
                <div className="row" key={item.cartItemId}>
                  <div className="col-md-2">
                    {item.products.length > 0 ? (
                      item.products.map((product) => {
                        const productImages = images.filter(
                          (image) => image.productId === product.productId
                        );
                        return (
                          <div key={product.imageId}>
                            {productImages.length > 0 ? (
                              <img
                                src={`/images/${productImages[0].imageName}`}
                                alt={product.productName}
                                className="product-image"
                                style={{ width: "80px", height: "80px" }}
                              />
                            ) : (
                              <p>Không có ảnh cho sản phẩm này.</p>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <p>Không có hình ảnh cho sản phẩm này.</p>
                    )}
                  </div>
                  <div className="col-md-5">
                    <p>{item.products[0].productName}</p>
                  </div>
                  <div className="col-md-1">
                    <p>{item.quantity}</p>
                  </div>
                  <div className="col-md-2">
                    <p>
                      <span>
                        {(
                          item.products[0].price -
                          (item.products[0].price *
                            item.products[0].percentDecrease) /
                            100
                        ).toLocaleString()}{" "}
                        VNĐ
                      </span>
                    </p>
                  </div>
                  <div className="col-md-2">
                    <p className="text-primary fw-bold">
                      <span>
                        {(
                          (item.products[0].price -
                            (item.products[0].price *
                              item.products[0].percentDecrease) /
                              100) *
                          item.quantity
                        ).toLocaleString()}{" "}
                        VNĐ
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Không có sản phẩm nào trong giỏ hàng.</p>
            )}
            <hr />
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-3">
                  <p className="text-end">Thành tiền</p>
                  <p className="text-end">Khuyến mãi</p>
                  <p className="text-end">
                    Phí vận chuyển (Giao hàng tiêu chuẩn)
                  </p>
                  <p className="text-end fw-bold">Tổng tiền (gồm VAT)</p>
                </div>
                <div className="col-md-2">
                  <p className="text-end">{total.toLocaleString()} VNĐ</p>
                  <p className="text-end">
                    <span id="discountAmount">
                      {/* {total.toLocaleString()}  */}0 VNĐ
                    </span>
                  </p>
                  <p className="text-end">32.000 VNĐ</p>
                  <p className="text-end text-primary fw-bold">
                    {(total + 32000).toLocaleString()} VNĐ
                  </p>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-7">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  Bằng việc xác nhận mua hàng, bạn đã hoàn toàn đồng ý với
                  <p>
                    <a
                      href="/"
                      className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
                    >
                      Điều khoản & Điều kiện
                    </a>{" "}
                    của chúng tôi.
                  </p>
                </label>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <button
                type="submit"
                id="confirmBtn"
                className="btn btn-outline-primary my-0"
              >
                XÁC NHẬN ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
