import React, { useState, useEffect } from "react";
import { cartService } from "../../../services/cartService"; // Import dịch vụ
import { useNavigate, useLocation } from "react-router-dom";
import "../../css/cart.css";
import { showErrorToast } from "../../../utils/Toast";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; // Gán cứng userId là 1
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [images, setProductImages] = useState([]);
  const location = useLocation();
  // const { selectedItems: preSelectedItems } = location.state || {}; // Nhận các mục đã chọn từ trang trước (nếu có)

  // Fetch dữ liệu giỏ hàng
  const fetchCartItems = async () => {
    if (!userId) {
      console.error("userId không xác định");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/pet/cart/view/${userId}`
      );
      const { cartItems } = response.data;
      if (Array.isArray(cartItems)) {
        setCartItems(cartItems);
        // Fetch ảnh sản phẩm
        const productImagePromises = cartItems.map(async (item) => {
          if (item.products && item.products.length > 0) {
            const productId = item.products[0].productId;
            return fetchProductImages(productId);
          }
          return [];
        });

        const images = await Promise.all(productImagePromises);
        setProductImages(images.flat());
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy giỏ hàng:", error);
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
      return [];
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Tính tổng tiền
  const calculateTotal = (selectedItems) => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      if (selectedItems.includes(cartItem.cartItemId)) {
        cartItem.products.forEach((product) => {
          const discountedPrice =
            product.price - (product.price * product.percentDecrease) / 100;
          total += discountedPrice * cartItem.quantity;
        });
      }
    });
    setTotalPrice(total);
  };

  // Chọn/bỏ chọn từng sản phẩm
  const handleCheckboxChange = (cartItemId) => {
    setSelectedItems((prevItems) => {
      const newSelectedItems = prevItems.includes(cartItemId)
        ? prevItems.filter((id) => id !== cartItemId)
        : [...prevItems, cartItemId];
      calculateTotal(newSelectedItems);
      return newSelectedItems;
    });
  };

  // Chọn tất cả
  const handleSelectAll = (checked) => {
    const allItemIds = cartItems.map((item) => item.cartItemId);
    setSelectedItems(checked ? allItemIds : []);
    calculateTotal(checked ? allItemIds : []);
  };

  // Tăng số lượng sản phẩm
  const incrementValue = async (cartItemId) => {
    const item = cartItems.find((item) => item.cartItemId === cartItemId);
    if (item) {
      await updateCartItem(cartItemId, item.quantity + 1);
    }
  };

  // Giảm số lượng sản phẩm
  const decrementValue = async (cartItemId) => {
    const item = cartItems.find((item) => item.cartItemId === cartItemId);
    if (item && item.quantity > 1) {
      await updateCartItem(cartItemId, item.quantity - 1);
    }
  };

  // Cập nhật sản phẩm trong giỏ hàng
  const updateCartItem = async (cartItemId, quantity) => {
    try {
      const item = cartItems.find((item) => item.cartItemId === cartItemId);
      const itemData = { ...item, quantity, user: { usersId: 1 } };
      await cartService.updateCartItem(cartItemId, itemData);
      fetchCartItems(); // Reload giỏ hàng sau khi cập nhật
    } catch (error) {
      showErrorToast("Cập nhật thất bại");
    }
  };

  // Xóa sản phẩm
  const removeCartItem = async (cartItemId) => {
    try {
      await cartService.removeCartItem(cartItemId);
      fetchCartItems();
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  // Xử lý thanh toán
  const proceedToPayment = () => {
    if (selectedItems.length === 0) {
      showErrorToast("Vui lòng chọn ít nhất một sản phẩm để thanh toán.");
      return;
    }
    // Lấy danh sách cartItem tương ứng với selectedItems
    const selectedCartItems = cartItems.filter((cartItem) =>
      selectedItems.includes(cartItem.cartItemId)
    );
    console.log("Location State:", location.state);
    console.log("Các sản phẩm đã chọn:", selectedItems); // In ra các sản phẩm đã chọn
    // Gửi danh sách các cartItem đã chọn đến trang thanh toán
    navigate("/Pay", { state: { selectedCartItems } });
  };

  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      {cartItems.length > 0 ? (
        <div className="row">
          <div className="col-md-9">
            <div className="card card">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked={
                          selectedItems.length === cartItems.length &&
                          cartItems.length > 0
                        }
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                      Tất cả
                    </th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem) => (
                    <tr key={cartItem.cartItemId}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(cartItem.cartItemId)}
                          onChange={() =>
                            handleCheckboxChange(cartItem.cartItemId)
                          }
                        />
                      </td>
                      {cartItem.products.map((product) => {
                        const productImages = images.filter(
                          (image) => image.productId === product.productId
                        );
                        return (
                          <React.Fragment key={product.imageId}>
                            <td>
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
                            </td>
                            <td>{product.productName}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() =>
                                  decrementValue(cartItem.cartItemId)
                                }
                              >
                                -
                              </button>
                              <input
                                style={{ width: "30px" }}
                                value={cartItem.quantity}
                                readOnly
                              />
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() =>
                                  incrementValue(cartItem.cartItemId)
                                }
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <b>
                                {(product.price -
                                  (product.price * product.percentDecrease) /
                                    100) *
                                  cartItem.quantity}{" "}
                                VNĐ
                              </b>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  removeCartItem(cartItem.cartItemId)
                                }
                                className="btn btn-danger btn-sm"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </React.Fragment>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="row">
                <div className="col-md-9">
                  Thành tiền: <b>{totalPrice} VNĐ</b>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <strong>Tổng Số Tiền (gồm VAT)</strong>
                  <b>
                    <h4 style={{ color: "red" }}>{totalPrice} VNĐ</h4>
                  </b>
                </div>
              </div>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={proceedToPayment}
            >
              Tiến Hành Thanh Toán
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h4>Giỏ hàng của bạn đang trống.</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
