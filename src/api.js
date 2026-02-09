import axios from "axios";

const api = axios.create({
  baseURL: "https://fsp-c1xu.onrender.com",
});

export default api;
