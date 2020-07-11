import axios from "axios";
// import userServices from "./userServices";
const URL = "http://localhost:8765/api";
const newsApiKey = "7025d539d43b41de90fcfd2acdc69660";
const newsEndpoint = "http://newsapi.org/v2/top-headlines";

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // "x-auth-token": userServices.getToken(),
    
  },
};

export const getData = (resource, params = null) => {
  return axios.get(`${URL}/${resource}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params,
  });
};

export const getNews = () => {
  return axios.get(`${newsEndpoint}?country=in&apiKey=${newsApiKey}`);
};

export const postData = (resource, data) => {
  return axios.post(`${URL}/${resource}`, data, config);
};
