import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../constants';

export const getNews = () => ({
  type: GET_NEWS,
});

export const getNewsSuccess = (payload) => ({
  type: GET_NEWS_SUCCESS,
  payload,
});

export const getNewsFailure = () => ({
  type: GET_NEWS_FAILURE,
});
