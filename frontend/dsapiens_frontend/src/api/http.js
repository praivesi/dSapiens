import axios from "redaxios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default instance;
