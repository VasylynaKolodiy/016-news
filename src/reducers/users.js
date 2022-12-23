import {
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAIL,
} from "../actions/users";

const initialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem('user')),
  error: '',
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: '',
      };

    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: '',
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case LOGOUT:
      localStorage.removeItem('user')
      return {
        ...state,
        user: null,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };

    case EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
