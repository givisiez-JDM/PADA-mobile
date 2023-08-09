import axios from "axios";

const apiPADA = axios.create({
  //baseURL: "https://app-vacina-backend-production.up.railway.app",
  baseURL: "http://172.16.10.184:3001",
});

export default apiPADA;
