import axios from "axios";

export function axiosNews(url, conf) {
  return axios.get(url, conf);
}
