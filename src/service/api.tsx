import axios from "axios";

const apiPADA = axios.create({
  baseURL: "https://app-vacina-backend-production.up.railway.app",
});

export default apiPADA;
