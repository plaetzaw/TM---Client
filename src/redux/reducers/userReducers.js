import { LOGGED_IN, LOGGED_OUT, SIGNED_UP } from "../actions/actionTypes";

const initialState = (state, action) => {
  if (state === undefined) {
    state = {
      loading: false,
    };
  }
};

const userReducers = (state = initialState, action) => {
  if (action.type === LOGGED_IN) {
    return {
      ...state,
      loggedIn: true,
    };
  }
  if (action.type === LOGGED_OUT) {
    return {
      ...state,
      loggedIn: false,
    };
  }
  if (action.type === SIGNED_UP) {
    return {
      ...state,
      signedUp: true,
    };
  }
};

export default userReducers;
