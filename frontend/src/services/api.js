import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-project-ifc1.onrender.com/api",
});

export default API;