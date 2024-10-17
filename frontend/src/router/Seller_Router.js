import { Routes, Route } from "react-router-dom";
import Headers from "../components/layout/seller/Header";
import Sidebar from "../components/layout/seller/sidebar";
import Dashboard from "../components/page/seller/Dashboard";

const Seller_Router = () => {
  return (
    <>
      <Headers />
      <Sidebar />
      <Dashboard />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Thêm các route khác nếu cần */}
      </Routes>
    </>
  );
};

export default Seller_Router;
