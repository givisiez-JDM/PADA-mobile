import axios from "axios";

const apiPADA = axios.create({
  baseURL: "https://vacina-backend.azurewebsites.net/",
});

export default apiPADA;
