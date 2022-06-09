import {
  GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, POST_USER, POST_USER_SUCCESS, POST_USER_FAILURE,
} from '../constants';

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

export const postUser = () => ({
  type: POST_USER,
});

export const postUserSuccess = (payload) => ({
  type: POST_USER_SUCCESS,
  payload,
});

export const postUserFailure = () => ({
  type: POST_USER_FAILURE,
});
