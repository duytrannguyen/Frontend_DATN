import { Navigate } from 'react-router-dom';
import { TOKEN,RoleName } from '../constant/APIConstant';

const PrivateRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem(TOKEN); // Sử dụng TOKEN từ constant
    const role = localStorage.getItem(RoleName); // Đảm bảo tên khóa đúng
    console.log("token" ,token)
    // Kiểm tra nếu không có token
    if (!token) {
        console.error("Không có token, người dùng cần đăng nhập.");
        return <Navigate to="/login" />;
    }

    // Kiểm tra vai trò
    if (allowedRoles && (!role || !allowedRoles.includes(role))) {
        console.error("Vai trò người dùng không hợp lệ hoặc không được phép.");
        console.log(">>>",role)
        console.log("token" ,token)
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default PrivateRoute;
