import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAIL,
} from "../actions/profiles";

const initialState = {
  loading: false,
  profile: {},
};

export default function profiles(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
      };

    case FOLLOW_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FOLLOW_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case FOLLOW_FAIL:
      return {
        ...state,
        loading: false,
      };

    case UNFOLLOW_REQUEST:
      return {
        ...state,
        loading: true
      };

    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case UNFOLLOW_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
