import { Route, Routes } from "react-router-dom";
import Login from "../screen/User/Login";
import Register from "../screen/User/Register";
import ForgotPassword from "../screen/User/ForgotPassword";
import UserScreen from "../screen/User/UserScreen";
import HomePage from "../screen/Home/HomePage";
import AccountPage from "../screen/Home/AccountPage";
import AccountProfile from "../screen/Home/AccountProfile";
import AccountAddress from "../screen/Home/AccountAddress";
import AccountChangePassword from "../screen/Home/AccountChangePassword";
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
      </Routes>
    </>
  );
};

export default My_Route;
