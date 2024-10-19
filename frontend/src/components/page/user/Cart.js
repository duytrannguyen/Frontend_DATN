import React, { useState, useEffect, useCallback } from "react";
import "../../css/cart.css";

const Cart = () => {
  // Dữ liệu mẫu cho giỏ hàng
  const sampleCartItems = [
    {
      cartItemId: 1,
      productId: {
        productName: "Sản phẩm 1",
        price: 100000,
        discountPercentage: 10,
        imageId: { imageName: "product1.jpg" },
      },
      quantity: 2,
    },
    {
      cartItemId: 2,
      productId: {
        productName: "Sản phẩm 2",
        price: 200000,
        discountPercentage: 20,
        imageId: { imageName: "product2.jpg" },
      },
      quantity: 1,
    },
  ];

  // Dữ liệu mẫu cho người dùng
  const sampleUser = {
    username: "exampleUser",
    isAuthenticated: true,
  };

  const [cartItems, setCartItems] = useState(sampleCartItems);
  const [user, setUser] = useState(sampleUser);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const calculateTotal = useCallback(() => {
    if (!Array.isArray(cartItems)) {
      setTotalPrice(0);
      setGrandTotal(0);
      return;
    }

    let total = 0;
    cartItems.forEach((item) => {
      if (selectedItems.includes(item.cartItemId)) {
        total +=
          (item.productId.price -
            (item.productId.price * item.productId.discountPercentage) / 100) *
          item.quantity;
      }
    });
    setTotalPrice(total);
    setGrandTotal(total);
  }, [cartItems, selectedItems]);

  useEffect(() => {
    calculateTotal();
  }, [selectedItems, cartItems, calculateTotal]);

  const handleCheckboxChange = (cartItemId) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(cartItemId)
        ? prevItems.filter((id) => id !== cartItemId)
        : [...prevItems, cartItemId]
    );
  };

  const incrementValue = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementValue = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartItemId === cartItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const proceedToPayment = () => {
    // Chuyển trang đến "/Pay"
    navigate("/Pay");
  };

  return (
    <div className="container" style={{ paddingTop: "50px" }}>
      {!user ? (
        <div className="alert alert-warning">
          Vui lòng <a href="/home/login">đăng nhập</a> hoặc{" "}
          <a href="/home/dangky">đăng ký</a> để mua hàng.
        </div>
      ) : (
        <>
          {cartItems && cartItems.length > 0 ? (
            <div className="row">
              <div className="col-md-9">
                <br />
                <div className="card">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                            onChange={(e) =>
                              setSelectedItems(
                                e.target.checked
                                  ? cartItems.map((item) => item.cartItemId)
                                  : []
                              )
                            }
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
                      {cartItems.map((item) => (
                        <tr key={item.cartItemId}>
                          <td>
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(item.cartItemId)}
                              onChange={() =>
                                handleCheckboxChange(item.cartItemId)
                              }
                            />
                          </td>
                          <td>
                            <img
                              src={`/Image_SP/${item.productId.imageId.imageName}`}
                              alt=""
                              style={{ width: "80px", height: "80px" }}
                            />
                          </td>
                          <td>{item.productId.productName}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              onClick={() => decrementValue(item.cartItemId)}
                            >
                              -
                            </button>
                            <input
                              style={{ width: "30px" }}
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              onClick={() => incrementValue(item.cartItemId)}
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <b>
                              {item.productId.price -
                                (item.productId.price *
                                  item.productId.discountPercentage) / 100}{" "}
                              VNĐ
                            </b>
                          </td>
                          <td>
                            <b>
                              {(item.productId.price -
                                (item.productId.price *
                                  item.productId.discountPercentage) / 100) *
                                item.quantity}{" "}
                              VNĐ
                            </b>
                          </td>
                          <td>
                            <a href={`/cart/remove/${item.cartItemId}`}>
                              <i
                                className="fa-solid fa-trash"
                                style={{ color: "#ed2323" }}
                              ></i>
                            </a>
                          </td>
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
                        <h4 style={{ color: "red" }}>{grandTotal} VNĐ</h4>
                      </b>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  // disabled={selectedItems.length === 0}
                  onClick={proceedToPayment}
                >
                  Thanh Toán
                </button>
              </div>
            </div>
          ) : (
            <div className="alert alert-info mt-3">Giỏ hàng trống</div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
