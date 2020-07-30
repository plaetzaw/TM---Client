import {
  LOGGED_IN,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  SIGNED_UP,
  LOADING_USER,
  GET_USER_TASKS,
} from "../actions/actionTypes";

const initialState = {
  signedUp: false,
  loggedIn: false,
  authenticated: false,
  credentials: {},
  usertasks: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        credentials: action.payload,
      };
    case SIGNED_UP:
      return {
        ...state,
        signedUp: true,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_TASKS:
      return {
        ...state,
        usertasks: action.payload,
      };
    default:
      return state;
  }
}
