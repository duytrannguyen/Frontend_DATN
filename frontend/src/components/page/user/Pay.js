import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CheckoutForm = () => {
  // Sử dụng useLocation để lấy state từ location
  const location = useLocation();
  const { selectedCartItems = [] } = location.state || {}; // Gán giá trị mặc định cho selectedCartItems
  const [images, setProductImages] = useState([]);

  // Khởi tạo thông tin người dùng với giá trị mặc định
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    fullAddress: "",
  });

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
    <form>
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
              placeholder="Nhập họ và tên"
              // defaultValue={user.fullName}
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
              placeholder="Nhập email"
              // defaultValue={user.email}
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
              placeholder="10 ký tự số"
              // defaultValue={user.phone}
              required
            />
          </div>
        </div>

        {/* <div className="card"> */}
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
        {/* </div> */}

        {/* <div className="card"> */}
        <strong>PHƯƠNG THỨC THANH TOÁN</strong>
        <hr />
        {["vnPay", "internetbanking", "cashOnDelivery"].map((method, index) => (
          <div className="form-check" key={method}>
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethodId"
              id={method}
              value={index + 1}
              defaultChecked={method === "cashOnDelivery"}
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
        {/* </div> */}
        {/* <div className="card mt-5"> */}
        <div className="card-body">
          <strong>KIỂM TRA LẠI ĐƠN HÀNG</strong>
          <hr />
          <div className="col-md-12">
            {selectedCartItems.length > 0 ? ( // Kiểm tra nếu có sản phẩm trong giỏ hàng
              selectedCartItems.map((item) => (
                <div className="row" key={item.cartItemId}>
                  <div className="col-md-2">
                    {item.products.length > 0 ? ( // Kiểm tra xem có sản phẩm không
                      item.products.map((product) => {
                        const productImages = images.filter(
                          (image) => image.productId === product.productId
                        );
                        // Lấy hình ảnh đầu tiên nếu có
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
                      <p>Không có hình ảnh cho sản phẩm này.</p> // Thông báo nếu không có hình ảnh
                    )}
                  </div>
                  <div className="col-md-5">
                    <p>{item.products[0].productName}</p>{" "}
                    {/* Hiển thị tên sản phẩm */}
                  </div>
                  <div className="col-md-1">
                    <p>{item.quantity}</p> {/* Hiển thị số lượng sản phẩm */}
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
              <p>Không có sản phẩm nào trong giỏ hàng.</p> // Hiển thị thông báo nếu không có sản phẩm
            )}
            <hr />
          </div>
        </div>
        {/* </div> */}
        <div className="footer">
          {/* <div className="card"> */}
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
                  <p className="text-end">
                    {/* <span id="itemTotal">
                      {total && total.toLocaleString()} VNĐ
                    </span> */}
                  </p>
                  {/* <input type="hidden" name="status" value={status || 1} /> */}
                  <p className="text-end">
                    <span id="discountAmount">
                      {/* {discountAmount && discountAmount.toLocaleString()} VNĐ */}
                    </span>
                  </p>
                  <p className="text-end">32.000 VNĐ</p>
                  <p className="text-end text-primary fw-bold">
                    {/* <span id="totalAmount">
                      {(
                        (total || 0) -
                        (discountAmount || 0) +
                        32000
                      ).toLocaleString()}{" "}
                      VNĐ
                    </span> */}
                  </p>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>

            {/* </div> */}
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
