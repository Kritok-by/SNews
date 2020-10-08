import { combineReducers } from "redux";
import { appReducer } from "./effectsReducer";
import {LOGOUT , LOGIN_DATA, ERROR_LOGIN, NEXT_PAGE, CURRENT_PROFILE, HASHTAG, NUMBER_TAB, CURRENT_POSTS, CURRENT_POST} from "./Types";


const defState = {
  currentUser: {},
  errorLogin: [],
  posts: {},
  page: 0,
  profile: '',
  hashTag: 'none',
  numberTab: 1,
  url: 'https://conduit.productionready.io/api/articles?limit=10&offset=',
  slug: ''
}

const autorize = (state = defState, action) => {
  switch (action.type){
    case LOGIN_DATA:
      return{...state, currentUser: action.data}
    case ERROR_LOGIN:
      return {...state, errorLogin: [...action.data]}
    case LOGOUT:
      return {...state, currentUser: {}}
    default:
      return state
  }
}

const profile = (state = defState, action) => {
  switch(action.type){
    case CURRENT_PROFILE:
      return {...state, profile: action.user}
    default:
      return state
  }
}

const articles = (state = defState, action)=>{
  switch (action.type){
    case NEXT_PAGE:
      return {...state, page: action.num}
      case HASHTAG:
        return {...state, hashTag: action.tag}
      case NUMBER_TAB:
        return {...state, numberTab: action.num}
      case CURRENT_POSTS:
        return {...state, posts: {...action.data}}
      case URL:
        return {...state, url: action.url}
      case CURRENT_POST:
        return {...state, slug: action.slug}
    default:
      return state
  }
}


export const Reducers = combineReducers({
  autorize: autorize,
  articles: articles,
  profile: profile,
  appReducer: appReducer
})
