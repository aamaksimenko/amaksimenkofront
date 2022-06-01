import axios from "axios";

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

export function fetchNews() {
  return async (dispatch) => {
    dispatch(getNews());

    try {
      let data = [];

      await axios
        .get("http://127.0.0.1:3001/news", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((resp) => {
          data = resp.data;
          console.log(data);
        });

      dispatch(getNewsSuccess(data));
    } catch (error) {
      dispatch(getNewsFailure());
    }
  };
}
