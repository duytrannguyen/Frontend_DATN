import { Routes, Route } from "react-router-dom";
import Headers from "../components/layout/seller/Header";
import Sidebar from "../components/layout/seller/sidebar";
import Dashboard from "../components/page/seller/Dashboard";
import OrderManagement from "../components/page/seller/OrderManagement";
import ProductManagement from "../components/page/seller/ProductManagement";
import CategoryManagement from "../components/page/seller/CategoryManagement";
const Seller_Router = () => {
  return (
    <>
      <div className="app-container">
        <Headers />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <Sidebar />
            </div>
            <div className="col-12 col-md-9">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/ProductManagement"
                  element={<ProductManagement />}
                />
                <Route
                  path="/CategoryManagement"
                  element={<CategoryManagement />}
                />
                <Route path="/OrderManagement" element={<OrderManagement />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seller_Router;
