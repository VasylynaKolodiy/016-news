import {
  POST_NEW_USER_REQUEST,
  POST_NEW_USER_SUCCESS,
  POST_NEW_USER_FAIL,
  POST_LOGIN_USER_REQUEST,
  POST_LOGIN_USER_SUCCESS,
  POST_LOGIN_USER_FAIL,
  POST_HEADER_REQUEST,
  POST_HEADER_SUCCESS,
  POST_HEADER_FAIL
} from "../actions/users";

const user = localStorage.getItem('user');
const initialState = {
  loading: false,
  user: user,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case POST_NEW_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case POST_NEW_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case POST_NEW_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case POST_LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case POST_LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case POST_LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case POST_HEADER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POST_HEADER_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
      };

    case POST_HEADER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
