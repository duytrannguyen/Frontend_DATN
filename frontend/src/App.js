/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Nhập ToastContainer và toast
import "react-toastify/dist/ReactToastify.css"; // Nhập CSS của toastify
import "./App.scss";
import "./components/css/Product.css";
import "./components/css/ProductDetail.css";
import "./components/css/ProductManagement.css";
import User_Router from "./router/User_Router";
import Seller_Router from "./router/Seller_Router";
import Loader from "./utils/Loading";

const App = () => {
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Giả lập quá trình tải
    const timer = setTimeout(() => {
      setLoading(false); // Thay đổi trạng thái loading sau 2 giây
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị hủy
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Định tuyến cho giao diện Admin */}
        <Route path="/seller/*" element={<Seller_Router />} />
        {/* Định tuyến cho giao diện User */}
        <Route path="/*" element={<User_Router />} />
      </Routes>
    </>
  );
};

export default App; // Xuất khẩu App
