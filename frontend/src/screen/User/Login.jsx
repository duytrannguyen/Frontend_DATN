import { message } from "antd";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate
import MyFormLogin from '../../component/MyFormLogin';
import { RoleName, TOKEN } from "../../constant/APIConstant";
import { loginService } from "../../service/API";

const Login = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate(); // Khởi tạo hook useNavigate

  const event = (e) => {
    setSpin(true); // Bắt đầu loading
    loginService(e.email, e.password)
      .then((res) => {
        setSpin(false); // Kết thúc loading

        if (res && res.token) {
          localStorage.setItem(TOKEN, res.token);
          localStorage.setItem(RoleName, res.roleName);
          const userRole = res.roleName;

          if (userRole) {
            switch (userRole) {
              case 'USER':
                navigate("/user/dashboard");
                break;
              case 'SELLER':
                navigate("/seller/dashboard");
                break;
              case 'ADMIN':
                navigate("/admin/dashboard");
                break;
              default:
                message.error("Vai trò người dùng không hợp lệ");
                break;
            }
          } else {
            message.error("Không có vai trò người dùng trong phản hồi");
          }
        } else {
          message.error("Đăng nhập thất bại: Không nhận được token từ server");
        }
      })
      .catch((err) => {
        setSpin(false);
        if (err.response && err.response.status === 400) {
          message.error("Email hoặc mật khẩu không đúng");
        } else {
          message.error("Đăng nhập thất bại");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN)) {
      localStorage.removeItem(TOKEN);
    }
  }, []);

  return (
    
    <div className="container " >
      <div className="card shadow-lg p-4" style={{ width: '400px', minHeight: '400px', borderRadius: '10px' }}>
        <h2 className="text-center mb-4">Đăng Nhập</h2>
        <MyFormLogin
          event={event}
          toF="/user/Forgot-password"
          toR="/user/Register"
          spin={spin}
        />
      </div>
    </div>
  );
};

export default Login;
