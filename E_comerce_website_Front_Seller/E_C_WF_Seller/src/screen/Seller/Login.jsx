import My_Form_Login from "../../component/My_Form_Login";
import { TOKEN } from "../../constant/APIConstant";
import { useNavigate } from "react-router-dom";
import {
  getSellerService,
  loginService,
} from "../../service/API";
import { message } from "antd";
import { useState,useEffect } from "react";
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
          getSellerService()
            .then((res) => {
              console.log(res);
              navigate("/seller/home");
            })
            .catch((err) => {
              if (err.response.status === 400) {
                navigate("/register_seller");
              }
            });
        })
        .catch((err) => {
          if (err.response.status === 400) {
            message.error("Email hoặc mật khẩu không đúng");
          }
          message.error("Đăng nhập thất bại");
        });
    }, 3000);
  };
  useEffect(() => {
    if (localStorage.getItem(TOKEN)) {
      localStorage.removeItem(TOKEN);
    }
  }, []);
  return (
    <>
      <My_Form_Login
        event={event}
        toF="/seller/forgot-password"
        toR="/seller/register"
        spin={spin}
      />
    </>
  );
};

export default Login;
