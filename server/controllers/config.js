import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const $host = axios.create({
  baseURL: process.env.BASE_URL,
});

export { $host };