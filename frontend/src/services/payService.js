import axios from "axios";
const API_URL = "http://localhost:8080/api/pet/invoices";

export const invoiceService = {
  // Tạo hóa đơn (Dùng khi thanh toán)
  createInvoice(invoiceDTO) {
    return axios
      .post(`${API_URL}/pay`, invoiceDTO)
      .then((response) => response.data)
      .catch((error) => {
        console.error("There was an error creating the invoice!", error);
        throw error;
      });
  },

  // Lọc hóa đơn theo trạng thái hoá đơn của user
  getInvoicesByUserIdAndStatuses(userId, statusNames) {
    return axios
      .get(`${API_URL}/user/${userId}`, {
        params: { StatusName: statusNames },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("There was an error fetching the invoices!", error);
        throw error;
      });
  },
};
