import {
  LOGGED_IN,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  SIGNED_UP,
} from "../actions/actionTypes";

const initialState = {
  signedUp: false,
  loggedIn: false,
  authenticated: false,
  credentials: {},
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
      };
    case SIGNED_UP:
      return {
        ...state,
        signedUp: true,
      };
    default:
      return state;
  }
}
