import {
  GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, POST_USER, POST_USER_SUCCESS,
  POST_USER_FAILURE, POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE,
  LOGOUT_USER,
} from '../constants';

export const getNews = () => ({
  type: GET_NEWS,
});

export const getNewsSuccess = (payload) => ({
  type: GET_NEWS_SUCCESS,
  payload,
});

export const getNewsFailure = (error) => ({
  type: GET_NEWS_FAILURE,
  error,
});

export const postUser = (payload) => ({
  type: POST_USER,
  payload,
});

export const postUserSuccess = (payload) => ({
  type: POST_USER_SUCCESS,
  payload,
});

export const postUserFailure = (error) => ({
  type: POST_USER_FAILURE,
  error,
});

export const postLogIn = (payload) => ({
  type: POST_LOGIN,
  payload,
});

export const postLogInSuccess = (payload) => ({
  type: POST_LOGIN_SUCCESS,
  payload,
});

export const postLogInFailure = (error) => ({
  type: POST_LOGIN_FAILURE,
  error,
});

export const logOutUser = (error) => ({
  type: LOGOUT_USER,
  error,
});
