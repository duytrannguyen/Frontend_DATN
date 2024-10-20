import MyFormForgot from "../../component/MyFormForgot";
import { forgotPasswordService } from "../../service/API";
import { message } from "antd";
import { useState } from "react";
const ForgotPassword = () => {
  const [spin,setSpin] = useState(false);
  const event = (e) => {
    setSpin(true);
    setTimeout(() => {
      forgotPasswordService(e.email).then(() => {
        setSpin(false);
        message.success("Vui lòng kiểm tra email của bạn để lấy lại mật khẩu");
      }).catch(() => {
        setSpin(false);
        message.error("Email không tồn tại");
      });
    }, 3000);
  };
  return (
    <>
      <MyFormForgot spin={spin}  event={event} to="/user/login" />
    </>
  );
};

export default ForgotPassword;
