import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TOKEN, RoleName } from '../../constant/APIConstant';
import instance from "../../config/axios";

const PrivateRoute = ({ children, allowedRoles }) => {
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const token = localStorage.getItem(TOKEN);
    const role = localStorage.getItem(RoleName)

    useEffect(() => {
        const fetchUserInfo = async () => {
            console.log("token PR", token)
            console.log("role RR", role)
            try {
                const response = await instance.get('/user/user-info', {
                    headers: {
                        Authorization: `Bearer${token}`,
                    },
                });
                console.log("response PR", response)  
            } catch (error) {
                console.error("Lỗi khi lấy thông tin người dùng:", error);
                setUserRole(null); // Đặt vai trò thành null nếu có lỗi
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchUserInfo();
        } else {
            setLoading(false); // Nếu không có token, bỏ qua loading
        }
    }, [token ,role]);

    // Nếu vẫn đang loading, có thể hiển thị một spinner hoặc loading state
    if (loading) {
        return <div>Loading...</div>; // Hoặc một spinner
    }

    // Kiểm tra nếu không có token
    if (!token) {
        console.error("Không có token, người dùng cần đăng nhập.");
        return <Navigate to="/login" />;
    }

    // Kiểm tra vai trò
    if (allowedRoles && (!role || !allowedRoles.includes(role))) {
        console.error("Vai trò người dùng không hợp lệ hoặc không được phép.");
        console.log("userRole PR", role)
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default PrivateRoute;
