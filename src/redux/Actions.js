import {
  LOGIN_DATA,
  LOGOUT,
  CURRENT_PROFILE,
  HASHTAG,
  NUMBER_TAB,
  CURRENT_POSTS,
  SHOW_ALERT,
  HIDE_ALERT,
  CURRENT_POST,
  EDIT_ARTICLE,
  GET_COMMENTS,
} from './Types';

export const logIn = (data) => ({ type: LOGIN_DATA, data });

export const logOut = () => ({ type: LOGOUT });

export const currentProfile = (user) => ({
  type: CURRENT_PROFILE,
  user,
});

export const currentPost = (slug) => ({
  type: CURRENT_POST,
  slug,
});

export const hashTag = (tag) => ({
  type: HASHTAG,
  tag,
});

export const numberTab = (num) => ({
  type: NUMBER_TAB,
  num,
});

export const currentPosts = (data) => (dispatch) => {
  dispatch({ type: CURRENT_POSTS, data });
};

export const currentUrl = (url) => ({
  type: URL,
  url,
});

export const showAlert = (text) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: text,
  });

  setTimeout(() => {
    dispatch(hideAlert());
  }, 3000);
};

export const hideAlert = () => ({
  type: HIDE_ALERT,
});

export const prevArticleValues = (values) => ({
  type: EDIT_ARTICLE,
  values,
});

export const getComments = (slug) => async (dispatch) => {
  const res = await fetch(
    `https://conduit.productionready.io/api/articles/${slug}/comments`
  );
  const data = await res.json();
  dispatch({
    type: GET_COMMENTS,
    data: data.comments,
  });
};
