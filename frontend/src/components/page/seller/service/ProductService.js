
import instance from "../../../../config/axios"

const fetchAllProduct = async () => {
  try {
    const response = await instance.get('/seller/products/list');
    console.log("sản phẩm",response); // Kiểm tra cấu trúc phản hồi
    return {
      data: response.data.content, // Dữ liệu sản phẩm
      //     total: response.data.totalElements, // Tổng số sản phẩm
      //     total_pages: response.data.totalPages // Tổng số trang
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      data: [],
      // total: 0,
      // total_pages: 0
    };
  }
};
const createProduct = async (formData) => {
  try {
    const response = await instance.post('/seller/products/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Thiết lập tiêu đề cho yêu cầu multipart
      },
    });
    return response.data; // Trả về dữ liệu phản hồi từ server
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};
const UpdateProduct = async (productId, formData) => {
  try {
    // Đảm bảo rằng bạn có '/' trước productId trong URL
    const response = await instance.put(`/seller/products/update/${productId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Thiết lập tiêu đề cho yêu cầu multipart
      },
    });
    return response.data; // Trả về dữ liệu phản hồi từ server
  } catch (error) {
    console.error("Lỗi khi update sản phẩm:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};
const deleteProduct = async (productId) => {
  try {
    const response = await instance.delete(`/seller/products/delete/${productId}`);
    
    if (response.status === 200) {
      // Nếu API trả về status 200, bạn có thể xử lý dữ liệu ở đây nếu cần
      return response.data; // Hoặc có thể chỉ cần return true nếu không cần dữ liệu
    }
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};

export { fetchAllProduct, createProduct, UpdateProduct, deleteProduct };
