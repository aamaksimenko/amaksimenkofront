import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from "redux/constants";

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
