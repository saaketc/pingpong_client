import axios from "axios";

const URL =
  "http://pingpong-env.eba-c8gpb7nw.ap-south-1.elasticbeanstalk.com/api";

const newsApiKey = "0FE5C5EF4D254A2B98E398588A37FA46";
const newsEndpoint = `https://api.breakingapi.com/news?type=headlines&q=business&locale=en-US&api_key=${newsApiKey}`;

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
  return axios.get(newsEndpoint);
};

export const postData = (resource, data) => {
  return axios.post(`${URL}/${resource}`, data, config);
};
