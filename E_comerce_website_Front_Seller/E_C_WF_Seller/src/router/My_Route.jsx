import { Route, Routes } from "react-router-dom";

import LoginSeller from "../screen/Seller/Login";

import RegisterSeller from "../screen/Seller/Register";

import ForgotPasswordSeller from "../screen/Seller/ForgotPassword";

import SellerScreen from "../screen/Seller/SellerScreen";

import Register_Seller from "../screen/Seller/Register_Seller";
import Home from "../screen/Seller/Home";
import My_Content from "../component/My_Content";
const My_Route = () => {
  return (
    <>
      <Routes>
        <Route path="/seller" element={<SellerScreen />}>
          <Route path="login" element={<LoginSeller />} />
          <Route path="register" element={<RegisterSeller />} />
          <Route path="forgot-password" element={<ForgotPasswordSeller />} />
        </Route>
        <Route path="/register_seller" element={<Register_Seller />} />
        <Route path="/seller/home" element={<Home />} >
          <Route path="add-product" element={<My_Content/>} />
        </Route>
      </Routes>
    </>
  );
};

export default My_Route;
