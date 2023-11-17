import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3001",
  baseUrl: "http://127.0.0.1:60024",
  withCredentials: true,
});

export default instance;
