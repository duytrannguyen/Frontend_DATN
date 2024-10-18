import { Route, Routes } from "react-router-dom";
import Headers from "../components/layout/seller/Header";
import Sidebar from "../components/layout/seller/sidebar";
import CategoryManagement from "../components/page/seller/CategoryManagement";
import Dashboard from "../components/page/seller/Dashboard";
import OrderManagement from "../components/page/seller/OrderManagement";
import ProductManagement from "../components/page/seller/QuanLySanPham/ProductManagement";
import ProductForm from "../components/page/seller/QuanLySanPham/ProductForm";
import { Container, Row, Col } from "react-bootstrap";

const Seller_Router = () => {
  return (
    <>
      {/* Header */}
      <Headers />
      <Container fluid>
        <Row>
          {/* Sidebar - Chiếm 3 cột */}
          <Col xs={12} md={3} lg={2} className="p-0">
            <Sidebar />
          </Col>

          {/* Main Content - Chiếm 9 cột */}
          <Col xs={12} md={9} lg={10} className="p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ProductManagement" element={<ProductManagement />} />
              <Route path="/ProductForm" element={<ProductForm />} />
              <Route path="/CategoryManagement" element={<CategoryManagement />} />
              <Route path="/OrderManagement" element={<OrderManagement />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Seller_Router;
