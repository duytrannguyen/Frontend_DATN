import { Routes, Route } from "react-router-dom";
import Header from "../components/layout/user/Header";
import Banner from "../components/page/user/Banner";
import Footer from "../components/layout/user/Footer";
import About from "../components/page/user/About_us";
import Product from "../components/page/user/Product";
import Cart from "../components/page/user/Cart";
import Contact from "../components/page/user/Contact";
import Pay from "../components/page/user/Pay";
import ProductDetail from "../components/page/user/ProductDetail";
import FavoriteProduct from "../components/page/user/FavoriteProduct";
import Review from "../components/page/user/Review";
import ProductReview from "../components/page/user/ProductReview";

const User_Router = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About_us" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/FavoriteProduct" element={<FavoriteProduct />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/ProductReview" element={<ProductReview />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default User_Router;
