import MyFormLogin from '../../MyForm/MyFormLogin';
import { TOKEN, RoleName } from "../../../constant/APIConstant";
import { loginService } from "../../../service/API";
import { message } from "antd";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate(); 

  const event = (e) => {
    setSpin(true);

    const { email, password } = e; // Lấy email và password từ đối tượng e

    // Kiểm tra nếu email và password trống
    if (!email || !password) {
      message.error("Vui lòng nhập email và mật khẩu");
      setSpin(false);
      return;
    }

    setTimeout(() => {
      loginService(email, password)
        .then((res) => {
          setSpin(false);
          localStorage.setItem(TOKEN, res.token);
          localStorage.setItem(RoleName,res.roleName);
          const userRole = res.roleName; 

          if (userRole === "USER") {
            navigate("/?token=" + res.token);
          } else if (userRole === "SELLER") {
            navigate("/seller/dashboard?token=" + res.token);
          }  else if (userRole === "ADMIN") {
            navigate("/seller/dashboard?token=" + res.token);
          }else {
            message.error("Role không hợp lệ");
          }
          console.log("Login",res.token);
          console.log("Login",userRole);
        })
        .catch((err) => {
          setSpin(false);
          if (err.response && err.response.status === 400) {
            message.error("Email hoặc mật khẩu không đúng");
          } else {
            message.error("Đăng nhập thất bại");
          }
        });
    }, 3000);
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN)) {
      localStorage.removeItem(TOKEN);
    }
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-90">
      <div className="card shadow" style={{ width: '570px', height: '435px' }}>
        <div className="card-body">
          <MyFormLogin 
            event={event}
            toF="/user/Forgot-password"
            toR="/user/Register"
            spin={spin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
