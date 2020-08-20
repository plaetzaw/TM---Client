import {
  GET_ALL_TASKS,
  GET_USER_TASKS,
  POST_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_ALL_USERS,
} from "../actions/actionTypes";

const initialState = {
  loadingData: true,
  tasks: [],
  uploads: [],
  users: [],
};

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        loadingData: false,
        tasks: action.payload,
      };
    case GET_USER_TASKS:
      return {
        ...state,
        loadingData: false,
        tasks: action.payload,
      };
    case POST_TASK:
      return {
        ...state,
        uploads: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
      };
    case UPDATE_TASK:
      return {
        ...state,
        uploads: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducers;
