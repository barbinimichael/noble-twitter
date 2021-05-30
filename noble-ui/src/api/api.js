import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: 'https://api.nobulltwitter.com/',
  headers: {
    "Content-Type": "application/json",
  },
});