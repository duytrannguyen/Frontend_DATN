import { Route, Routes } from "react-router-dom";
import Login from "../screen/User/Login";
import LoginSeller from "../screen/Seller/Login";
import Register from "../screen/User/Register";
import RegisterSeller from "../screen/Seller/Register";
import ForgotPassword from "../screen/User/ForgotPassword";
import ForgotPasswordSeller from "../screen/Seller/ForgotPassword";
import UserScreen from "../screen/User/UserScreen";
import HomePage from "../screen/Home/HomePage";
import SellerScreen from "../screen/Seller/SellerScreen";
import AccountPage from "../screen/Home/AccountPage";
import AccountProfile from "../screen/Home/AccountProfile";
import AccountAddress from "../screen/Home/AccountAddress";
import AccountChangePassword from "../screen/Home/AccountChangePassword";
import Register_Seller from "../screen/Seller/Register_Seller";
const My_Route = () => {
  return (
    <>
      <Routes>
        <Route path="/user" element={<UserScreen />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/" element={<HomePage />}>
          <Route path="account/" element={<AccountPage />}>
            <Route path="profile" element={<AccountProfile />}></Route>
            <Route path="address" element={<AccountAddress />}></Route>
            <Route
              path="change-password"
              element={<AccountChangePassword />}
            ></Route>
          </Route>
        </Route>
        <Route path="/seller" element={<SellerScreen />}>
          <Route path="login" element={<LoginSeller />} />
          <Route path="register" element={<RegisterSeller />} />
          <Route path="forgot-password" element={<ForgotPasswordSeller />} />
        </Route>
        <Route path="/register_seller" element={<Register_Seller />} />
      </Routes>
    </>
  );
};

export default My_Route;
