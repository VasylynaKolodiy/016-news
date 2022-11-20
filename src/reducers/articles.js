import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_REQUEST,
} from "../actions/articles";

const initialState = {
  loading: false,
  articles: {},
  article: {},
  comments: {},
};

export default function articles(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };

    case GET_ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        loading: false,
      };

    case GET_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };

    case GET_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
