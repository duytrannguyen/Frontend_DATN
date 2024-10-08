import My_Form_Register from "../../component/My_Form_Register";
import { registerService } from "../../service/API";
import { useState } from "react";
import { message } from "antd";
const Register = () => {
  const [spin, setSpin] = useState(false);
  const event = (e) => {
    setSpin(true);
    setTimeout(() => {
      registerService(e.email, e.password)
        .then((res) => {
          console.log(res);
          setSpin(false);
          message.success("Đăng ký thành công");
        })
        .catch((err) => {
          setSpin(false);
          if (err.response.status === 400) {
            message.error("Email đã tồn tại");
          } else {
            message.error("Đăng ký thất bại");
          }
        });
      
    }, 3000);
  };
  return <My_Form_Register spin={spin} event={event} to="/user/login" />;
};

export default Register;
