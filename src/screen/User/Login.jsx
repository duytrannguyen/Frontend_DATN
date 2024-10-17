import My_Form_Login from "../../component/My_Form_Login";
import { TOKEN } from "../../constant/APIConstant";
import { loginService } from "../../service/API";
import { message } from "antd";
import { useState, useEffect } from "react";
const Login = () => {
  const [spin, setSpin] = useState(false);

  const event = (e) => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
      loginService(e.email, e.password)
        .then((res) => {
          localStorage.setItem(TOKEN, res.token);
          window.location.href = "http://localhost:3000?token=" + res.token;
          // window.location.href = "http://localhost:5173/user/login";
          // window.location.href = "http://localhost:5174/seller/login";
        })
        .catch((err) => {
          if (err.response.status === 400) {
            message.error("Email hoặc mật khẩu không đúng");
          } else {
            message.error("Đăng nhập thất bại");
          }
          33;
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
        toF="/user/forgot-password"
        toR="/user/register"
        spin={spin}
      />
    </>
  );
};

export default Login;
