import React, { useState, useEffect } from "react";
import './css/cart.css';

const Cart = ({ cartItems, user }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        calculateTotal();
    }, [selectedItems, cartItems]);

    const handleCheckboxChange = (cartItemId) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(cartItemId)
                ? prevItems.filter((id) => id !== cartItemId)
                : [...prevItems, cartItemId]
        );
    };

    const calculateTotal = () => {
        if (!Array.isArray(cartItems)) {
            // Nếu cartItems không phải là mảng, thì trả về 0
            setTotalPrice(0);
            setGrandTotal(0);
            return;
        }

        let total = 0;
        cartItems.forEach((item) => {
            if (selectedItems.includes(item.cartItemId)) {
                total += (item.productId.price - (item.productId.price * item.productId.discountPercentage) / 100) * item.quantity;
            }
        });
        setTotalPrice(total);
        setGrandTotal(total); // Adjust this if VAT or other fees are added
    };

    const incrementValue = (cartItemId) => {
        // Update quantity logic here
    };

    const decrementValue = (cartItemId) => {
        // Update quantity logic here
    };

    const proceedToPayment = () => {
        // Payment process logic
    };

    return (
        <div className="container" style={{ paddingTop: "50px" }}>
            {!user ? (
                <div className="alert alert-warning">
                    Vui lòng <a href="/home/login">đăng nhập</a> hoặc <a href="/home/dangky">đăng ký</a> để mua hàng.
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
                                                                e.target.checked ? cartItems.map((item) => item.cartItemId) : []
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
                                                            onBlur={() => {
                                                                // Update quantity logic
                                                            }}
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
                                                                (item.productId.price * item.productId.discountPercentage) / 100}{" "}
                                                            VNĐ
                                                        </b>
                                                    </td>
                                                    <td>
                                                        <b>
                                                            {(item.productId.price -
                                                                (item.productId.price * item.productId.discountPercentage) / 100) *
                                                                item.quantity}{" "}
                                                            VNĐ
                                                        </b>
                                                    </td>
                                                    <td>
                                                        <a href={`/cart/remove/${item.cartItemId}`}>
                                                            <i className="fa-solid fa-trash" style={{ color: "#ed2323" }}></i>
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
                                        <div className="col-md-9">Thành tiền: <b><h6>{totalPrice} VNĐ</h6></b></div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <strong>Tổng Số Tiền (gồm VAT)</strong>
                                            <b><h4 style={{ color: "red" }}>{grandTotal} VNĐ</h4></b>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    disabled={selectedItems.length === 0}
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
