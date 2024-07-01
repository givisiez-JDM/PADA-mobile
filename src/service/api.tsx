import axios from "axios";

const apiPADA = axios.create({
  baseURL: "https://app-vacina-production.up.railway.app/",
  //baseURL: "http://172.16.10.190:3001",
});

export default apiPADA;
