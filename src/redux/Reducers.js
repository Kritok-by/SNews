import { combineReducers } from 'redux';
import {
  LOGOUT,
  LOGIN_DATA,
  CURRENT_PROFILE,
  HASHTAG,
  NUMBER_TAB,
  CURRENT_POSTS,
  CURRENT_POST,
  SHOW_ALERT,
  HIDE_ALERT,
  EDIT_ARTICLE,
  GET_COMMENTS,
} from './Types';

const defState = {
  currentUser: {},
  errorLogin: [],
  posts: {},
  profile: '',
  hashTag: 'none',
  numberTab: 1,
  url: 'https://conduit.productionready.io/api/articles?limit=10&offset=',
  slug: '',
  values: {
    title: '',
    about: '',
    text: '',
    tags: [],
    slug: '',
  },
  comments: [],
};

const autorize = (state = defState, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return { ...state, currentUser: action.data };
    case LOGOUT:
      return { ...state, currentUser: {} };
    case SHOW_ALERT:
      return { ...state, errorLogin: state.errorLogin.concat(action.payload) };
    case HIDE_ALERT:
      return { ...state, errorLogin: [] };
    default:
      return state;
  }
};

const profile = (state = defState, action) => {
  switch (action.type) {
    case CURRENT_PROFILE:
      return { ...state, profile: action.user };
    default:
      return state;
  }
};

const articles = (state = defState, action) => {
  switch (action.type) {
    case HASHTAG:
      return { ...state, hashTag: action.tag };
    case NUMBER_TAB:
      return { ...state, numberTab: action.num };
    case CURRENT_POSTS:
      return { ...state, posts: { ...action.data } };
    case URL:
      return { ...state, url: action.url };
    case CURRENT_POST:
      return { ...state, slug: action.slug };
    case EDIT_ARTICLE:
      return { ...state, values: { ...action.values } };
    default:
      return state;
  }
};

const comments = (state = defState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: [...action.data] };
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  autorize,
  articles,
  profile,
  comments,
});
