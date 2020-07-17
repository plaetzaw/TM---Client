import { LOGGED_IN, LOGGED_OUT, SIGNED_UP } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  signedUp: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: false,
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
