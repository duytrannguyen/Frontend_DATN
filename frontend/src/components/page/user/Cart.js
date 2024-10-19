import React, { useState, useEffect, useCallback } from "react";
import { cartService } from "../../../services/cartService"; // Import dịch vụ
import { useNavigate } from "react-router-dom";
import "../../css/cart.css";
import { showErrorToast } from "../../../utils/Toast";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; // Gán cứng userId là 1
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []); // Không cần phụ thuộc vào user

  const fetchCartItems = async () => {
    try {
      const response = await cartService.getCartItems(userId);
      console.log("Dữ liệu trả về từ API:", response); // In ra dữ liệu trả về
      // Kiểm tra xem response.cartItems có phải là một mảng không
      if (Array.isArray(response.cartItems)) {
        setCartItems(response.cartItems); // Lưu trữ mảng sản phẩm vào state
        // Khởi tạo selectedItems để chứa tất cả cartItemId
        const initialSelectedItems = response.cartItems.map(
          (item) => item.cartItemId
        );
        setSelectedItems(initialSelectedItems);
      } else {
        console.error(
          "Dữ liệu trả về không phải là một mảng:",
          response.cartItems
        );
        setCartItems([]); // Đặt giỏ hàng rỗng nếu dữ liệu không hợp lệ
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleCheckboxChange = (cartItemId) => {
    setSelectedItems((prevItems) => {
      const newSelectedItems = prevItems.includes(cartItemId)
        ? prevItems.filter((id) => id !== cartItemId) // Bỏ chọn sản phẩm
        : [...prevItems, cartItemId]; // Chọn sản phẩm

      // Tính tổng giá trị sau khi cập nhật selectedItems
      calculateTotal(newSelectedItems);
      return newSelectedItems;
    });
  };
  // Hàm để xử lý checkbox "Tất cả"
  const handleSelectAll = (checked) => {
    const allItemIds = cartItems.map((item) => item.cartItemId);
    setSelectedItems(checked ? allItemIds : []);
    calculateTotal(checked ? allItemIds : []); // Tính tổng khi chọn hoặc bỏ chọn tất cả
  };
  const calculateTotal = (selectedItems) => {
    let total = 0;
    // Lặp qua từng sản phẩm trong giỏ hàng
    cartItems.forEach((cartItem) => {
      // Kiểm tra xem sản phẩm có được chọn không
      if (selectedItems.includes(cartItem.cartItemId)) {
        // Duyệt qua các sản phẩm trong từng cartItem
        cartItem.products.forEach((product) => {
          const price = product.price; // Giá sản phẩm
          const percentDecrease = product.percentDecrease; // Phần trăm giảm giá
          const quantity = cartItem.quantity; // Số lượng sản phẩm trong giỏ hàng
          // Tính giá đã giảm và cộng vào tổng
          const discountedPrice = price - (price * percentDecrease) / 100;
          total += discountedPrice * quantity; // Cộng vào tổng
        });
      }
    });
    setTotalPrice(total); // Cập nhật totalPrice
  };

  const incrementValue = async (cartItemId) => {
    const item = cartItems.find((item) => item.cartItemId === cartItemId);
    if (item) {
      const updatedQuantity = item.quantity + 1;
      await updateCartItem(cartItemId, updatedQuantity);
    }
  };

  const decrementValue = async (cartItemId) => {
    const item = cartItems.find((item) => item.cartItemId === cartItemId);
    if (item && item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      await updateCartItem(cartItemId, updatedQuantity);
    }
  };

  const updateCartItem = async (cartItemId, quantity) => {
    try {
      // Lấy sản phẩm từ giỏ hàng
      const item = cartItems.find((item) => item.cartItemId === cartItemId);
      // Kiểm tra xem sản phẩm có tồn tại không
      if (!item) {
        throw new Error("Sản phẩm không tồn tại trong giỏ hàng");
      }
      const itemData = {
        ...item,
        quantity: quantity, // Cập nhật số lượng
        user: { usersId: 1 },
      };
      // Gọi dịch vụ để cập nhật giỏ hàng
      await cartService.updateCartItem(cartItemId, itemData);
      fetchCartItems(); // Tải lại giỏ hàng
    } catch (error) {
      showErrorToast("Cập nhật thất bại");
      console.error("Error updating cart item:", error);
    }
  };

  //xoá
  const removeCartItem = async (cartItemId) => {
    try {
      await cartService.removeCartItem(cartItemId); // Sử dụng dịch vụ
      fetchCartItems(); // Tải lại giỏ hàng
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const proceedToPayment = () => {
    navigate("/Pay");
  };

  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      {cartItems.length > 0 ? (
        <div className="row">
          <div className="col-md-9">
            <br />
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
                      />{" "}
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
                      {cartItem.products.map((product) => (
                        <React.Fragment key={product.imageId}>
                          <td>
                            <img
                              src={`/images/${product.imageUrl}`}
                              alt={product.productName}
                              style={{ width: "80px", height: "80px" }}
                            />
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
                              {(() => {
                                const discountedPrice =
                                  product.price -
                                  (product.price * product.priceDecreased) /
                                    100;
                                return (
                                  discountedPrice * cartItem.quantity + " VNĐ"
                                );
                              })()}
                            </b>
                          </td>

                          <td>
                            <b>
                              {(() => {
                                const discountedPrice =
                                  product.price -
                                  (product.price * product.priceDecreased) /
                                    100;
                                return (
                                  discountedPrice * cartItem.quantity + " VNĐ"
                                );
                              })()}
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
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <br />
            <div className="card">
              <div className="row">
                <div className="col-md-9">
                  Thành tiền:{" "}
                  <b>
                    <h6>{totalPrice} VNĐ</h6>
                  </b>
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
              Thanh Toán
            </button>
          </div>
        </div>
      ) : (
        <div className="alert alert-info mt-3">Giỏ hàng trống</div>
      )}
    </div>
  );
};

export default Cart;
