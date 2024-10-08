import My_Form_Login from "../../component/My_Form_Login";
import { TOKEN } from "../../constant/APIConstant";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../service/API";
import { message } from "antd";
import { useState } from "react";
const Login = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const event = (e) => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
      loginService(e.email, e.password)
        .then((res) => {
          localStorage.setItem(TOKEN, res.token);
          navigate("/");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            message.error("Email hoặc mật khẩu không đúng");
          } else {
            message.error("Đăng nhập thất bại");
          }
        });
        
    }, 3000);
  };
  return (
    <>
      <My_Form_Login
        event={event}
        toF="/user/forgot-password"
        toR="/user/register"
        spin={spin}
      />
    </>
  );
};

export default Login;
