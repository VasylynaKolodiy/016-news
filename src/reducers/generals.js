import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
} from "../actions/generals";

const initialState = {
  loading: false,
  tags: {},
};

export default function generals(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        loading: false,
      };

    case GET_TAGS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
