import axios from "axios";
require('dotenv/config')

axios.defaults.withCredentials = true

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});