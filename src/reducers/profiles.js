import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
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

    default:
      return state;
  }
}
