import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://backend-eventease-532d40edaf9e.herokuapp.com",
});

export default API;
