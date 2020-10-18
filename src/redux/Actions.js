
import {
  CURRENT_USER,
  LOGIN_DATA,
  LOGOUT,
  NEXT_PAGE,
  CURRENT_PROFILE,
  HASHTAG,
  NUMBER_TAB,
  CURRENT_POSTS, SHOW_ALERT, HIDE_ALERT, CURRENT_POST, EDIT_ARTICLE
} from "./Types";

export const currentUser = (user) => {
  return {
    type: CURRENT_USER,
    user,
  };
};

export const logIn = (data) => {
  return {
    type: LOGIN_DATA,
    data,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export const nextPage = (num) => {
  return {
    type: NEXT_PAGE,
    num,
  };
};

export const currentProfile = (user) => {
  return {
    type: CURRENT_PROFILE,
    user,
  };
};

export const currentPost = (slug) => {
  return {
    type: CURRENT_POST,
    slug
  }

}


export const hashTag = (tag) => {
  return {
    type: HASHTAG,
    tag,
  };
};

export const numberTab = (num) => {
  return {
    type: NUMBER_TAB,
    num,
  };
};

export const currentPosts = (data) => {
  return dispatch=>{
    dispatch({ type: CURRENT_POSTS, data })
  }
};

export const currentUrl = (url) => {
  return {
    type: URL,
    url,
  };
};


export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export const prevArticleValues = (values) => {
  return {
    type: EDIT_ARTICLE,
    values
  }
}
