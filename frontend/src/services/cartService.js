// src/services/cartService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/pet/cart";

const getCartItems = async (userId) => {
  const response = await axios.get(`${API_URL}/view/${userId}`);
  return response.data; // Giả sử response.data là mảng sản phẩm
};

const updateCartItem = async (cartItemId, itemData) => {
  await axios.put(`${API_URL}/update/${cartItemId}`, itemData);
};

const removeCartItem = async (cartItemId) => {
  await axios.delete(`${API_URL}/remove/${cartItemId}`);
};

export const cartService = {
  getCartItems,
  updateCartItem,
  removeCartItem,
};
