import { toast } from "react-toastify"; // Nhập ToastContainer và toast
import "react-toastify/dist/ReactToastify.css"; // Nhập CSS của toastify

// Hàm hiển thị thông báo thành công
export const showToast = (message) => {
  toast.success(message, {
    position: "top-right", // Vị trí thông báo
    autoClose: 3000, // Tự động đóng sau 3 giây
    hideProgressBar: false, // Hiển thị thanh tiến trình
    closeOnClick: true, // Đóng khi nhấn
    draggable: true, // Có thể kéo được
    progress: undefined,
  });
};
// Hàm hiển thị thông báo lỗi
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
};
