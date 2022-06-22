import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  POST_USER,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  LOGOUT_USER,
  USER_DATA,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
  ADD_NEWS,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_FAILURE,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
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

export const userData = () => ({
  type: USER_DATA,
});

export const userDataSuccess = (payload) => ({
  type: USER_DATA_SUCCESS,
  payload,
});

export const userDataFailure = (error) => ({
  type: USER_DATA_FAILURE,
  error,
});

export const addNews = (payload) => ({
  type: ADD_NEWS,
  payload,
});

export const addNewsSuccess = (payload) => ({
  type: ADD_NEWS_SUCCESS,
  payload,
});

export const addNewsFailure = (error) => ({
  type: ADD_NEWS_FAILURE,
  error,
});

export const editProfile = (payload) => ({
  type: EDIT_PROFILE,
  payload,
});

export const editProfileSuccess = (payload) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload,
});

export const editProfileFailure = (error) => ({
  type: EDIT_PROFILE_FAILURE,
  error,
});
