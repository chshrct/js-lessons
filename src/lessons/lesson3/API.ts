import axios from "axios";

const key = "fd1fe2dc";

const configOMB = {
  baseURL: `http://www.omdbapi.com/`,
};
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: (title: string) => {
    return axiosInstance.get(`?&apikey=${key}&s=${title}`);
  },
  searchFilmsByType: (title: string, type: string) => {
    return axiosInstance.get(`?&apikey=${key}&s=${title}&type=${type}`);
  },
};

export default API;
