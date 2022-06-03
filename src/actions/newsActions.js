import { axiosNews } from "./api/Axios";

export const GET_NEWS = "GET_NEWS";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export const getNews = () => ({
  type: GET_NEWS,
});

export const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news,
});

export const getNewsFailure = () => ({
  type: GET_NEWS_FAILURE,
});

let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export function fetchNews() {
  return async (dispatch) => {
    dispatch(getNews());
    try {
      let data = [];
      await axiosNews(process.env.REACT_APP_AXIOS_GET, config).then((resp) => {
        data = resp.data;
      });
      dispatch(getNewsSuccess(data));
    } catch (error) {
      dispatch(getNewsFailure());
    }
  };
}
