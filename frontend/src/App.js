/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./components/css/Product.css";
import "./components/css/ProductDetail.css";
import "./components/css/ProductManagement.css";
import User_Router from "./router/User_Router";
import Seller_Router from "./router/Seller_Router";
// import "./seller/css/style.css";

const App = () => {
  return (
    <Routes>
      {/* Định tuyến cho giao diện Admin */}
      <Route path="/seller/*" element={<Seller_Router />} />
      {/* Định tuyến cho giao diện User */}
      <Route path="/*" element={<User_Router />} />
    </Routes>
  );
};

export default App;
