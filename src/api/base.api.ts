import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.stanleystella.com/webrequest/productsV2/',
  });