import { Routes, Route } from "react-router-dom";
import Headers from "../components/layout/seller/Header";
import Sidebar from "../components/layout/seller/sidebar";
import Dashboard from "../components/page/seller/Dashboard";
import OrderManagement from "../components/page/seller/OrderManagement";
import ProductManagement from "../components/page/seller/ProductManagement";
import CategoryManagement from "../components/page/seller/CategoryManagement";
import UserManagement from "../components/page/seller/UserManagement";
const Seller_Router = () => {
  return (
    <>
      <Headers />
      <Sidebar />
      {/* Do bên App.js đường dẫn đã có sẳn /seller khi muốn chạy thì phải :
        /seller/ (thêm một trong những đường dẫn phía dưới) ví dụ: /seller/dashboard */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        <Route path="/CategoryManagement" element={<CategoryManagement />} />
        <Route path="/OrderManagement" element={<OrderManagement />} />
        <Route path="/UserManagement" element={<UserManagement />} />
      </Routes>
    </>
  );
};

export default Seller_Router;
