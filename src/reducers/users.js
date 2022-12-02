import {
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT,
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
      };

    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
        loading: false,
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

    default:
      return state;
  }
}
