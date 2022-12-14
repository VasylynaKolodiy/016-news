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
  CREATE_NEW_ARTICLE_REQUEST,
  CREATE_NEW_ARTICLE_SUCCESS,
  CREATE_NEW_ARTICLE_FAIL,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,
  ADD_FAVORITES_FAIL,
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITES_REQUEST,
  DELETE_FAVORITES_FAIL,
  DELETE_FAVORITES_SUCCESS,
  DELETE_FAVORITES_REQUEST,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAIL, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAIL,
} from "../actions/articles";

const initialState = {
  loading: false,
  articles: {},
  article: {},
  comments: [],
  newArticle: {},
  deletedArticle: [],
  loadingFavorite: false,
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

    case CREATE_NEW_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CREATE_NEW_ARTICLE_SUCCESS:
      return {
        ...state,
        newArticle: action.payload,
        loading: false,
        error: '',
      };

    case CREATE_NEW_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
      };

    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          ...action.payload
        },
        error: '',
      };

    case DELETE_ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_FAVORITES_REQUEST:
      return {
        ...state,
        loadingFavorite: true,
      };

    case ADD_FAVORITES_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          ...action.payload[0],
        },
        article: action.payload[1],
        loadingFavorite: false,
      };

    case ADD_FAVORITES_FAIL:
      return {
        ...state,
        loadingFavorite: false,
      };

    case DELETE_FAVORITES_REQUEST:
      return {
        ...state,
        loadingFavorite: true,
      };

    case DELETE_FAVORITES_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          ...action.payload[0],
        },
        article: action.payload[1],
        loadingFavorite: false,
      };

    case DELETE_FAVORITES_FAIL:
      return {
        ...state,
        loadingFavorite: false,
      };

    case EDIT_ARTICLE_REQUEST:
      return {
        ...state,
      };

    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };

    case EDIT_ARTICLE_FAIL:
      return {
        ...state,
      };

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          action.payload,
          ...state.comments,
        ],
      };

    case ADD_COMMENT_FAIL:
      return {
        ...state,
      };

    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,

      };

    case DELETE_COMMENT_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
