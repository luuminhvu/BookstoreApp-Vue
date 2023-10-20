import axios from "axios";
const api = axios.create({
  baseURL: "https://bookstore-vue.onrender.com",
});
export default api;
