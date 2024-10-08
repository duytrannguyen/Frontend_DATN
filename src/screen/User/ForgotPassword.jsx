import My_Form_Forgot from "../../component/My_Form_Forgot";
import { forgotPasswordService } from "../../service/API";
import { message } from "antd";
import { useState } from "react";
const ForgotPassword = () => {
  const [spin,setSpin] = useState(false);
  const event = (e) => {
    setSpin(true);
    setTimeout(() => {
      forgotPasswordService(e.email).then((res) => {
        console.log(res);
        setSpin(false);
        message.success("Vui lòng kiểm tra email của bạn để lấy lại mật khẩu");
      }).catch((err) => {
        setSpin(false);
        console.log(err);
        message.error("Email không tồn tại");
      });
    }, 3000);
  };
  return (
    <>
      <My_Form_Forgot spin={spin}  event={event} to="/user/login" />
    </>
  );
};

export default ForgotPassword;
