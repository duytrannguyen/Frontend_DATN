import MyFormLogin from '../../component/MyFormLogin';
import { TOKEN, RoleName } from "../../constant/APIConstant";
import { loginService } from "../../service/API";
import { message } from "antd";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate

const Login = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate(); // Khởi tạo hook useNavigate

  const event = (e) => {
    setSpin(true); // Bắt đầu loading
    loginService(e.email, e.password)
      .then((res) => {
        setSpin(false); // Kết thúc loading

        // Kiểm tra nếu res là undefined hoặc không chứa token
        if (res && res.token) {
          localStorage.setItem(TOKEN, res.token);
          localStorage.setItem(RoleName, res.roleName);
          const userRole = res.roleName;

          // Kiểm tra vai trò người dùng và điều hướng
          if (userRole) {
            switch (userRole) {
              case 'USER':
                navigate("/user/dashboard"); // Điều hướng cho USER
                break;
              case 'SELLER':
                navigate("/seller/dashboard"); // Điều hướng cho SELLER
                break;
              case 'ADMIN':
                navigate("/admin/dashboard"); // Điều hướng cho ADMIN
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
        setSpin(false); // Kết thúc loading
        if (err.response && err.response.status === 400) {
          message.error("Email hoặc mật khẩu không đúng");
        } else {
          message.error("Đăng nhập thất bại");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN)) {
      localStorage.removeItem(TOKEN); // Xóa token khi component mount
    }
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-90 ">
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
