import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/layout/user/Header";
import Banner from "../components/page/user/Banner";
import Footer from "../components/layout/user/Footer";
import About from "../components/page/user/About_us";
import Product from "../components/page/user/Product";
import Cart from "../components/page/user/Cart";
import Contact from "../components/page/user/Contact";
import Pay from "../components/page/user/Pay";
import ProductDetail from "../components/page/user/ProductDetail";
import Login from "../screen/User/Login";
import Register from "../screen/User/Register";
import RegisterSeller from "../screen/Seller/Register_Seller";
import ForgotPassword from "../screen/User/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
const User_Router = () => {
  return (
    <div className="app-container ">
      <Header />
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={12} className="p-0">
            <Routes>
              <Route path="/dashboardUser" element={<Banner />} />
              <Route path="/About_us" element={<About />} />
              <Route path="/Product" element={<Product />} />
              <Route
                path="/Cart"
                element={
                  <PrivateRoute allowedRoles={["USER"]}>
                    <Cart />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Contact"
                element={
                  <PrivateRoute allowedRoles={["USER"]}>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Pay"
                element={
                  <PrivateRoute allowedRoles={["USER"]}>
                    <Pay />
                  </PrivateRoute>
                }
              />
              <Route path="/ProductDetail" element={<ProductDetail />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route
                path="/Register_Seller"
                element={
                  <PrivateRoute allowedRoles={["USER"]}>
                    <RegisterSeller />
                  </PrivateRoute>
                }
              />
              <Route path="/Forgot-password" element={<ForgotPassword />} />
            </Routes>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default User_Router;