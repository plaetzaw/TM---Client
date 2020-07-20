import {
  LOGGED_IN,
  SIGNED_UP,
  LOGGED_OUT,
  LOADING_DATA,
  GET_USER_TASKS,
  GET_ALL_TASKS,
} from "./actionTypes";
import axios from "axios";

//JWT Token Set
export const setAuthorizationHeader = (token) => {
  const JWToken = `Bearer ${token}`;
  localStorage.setItem("JWToken", JWToken);
  JWToken = axios.defaults.headers.common("Authorization");
};

//Logout/RemoveJWT
export const LogoutUser = () => (dispatch) => {
  localStorage.removeItem("JWToken");
  delete axios.defaults.headers.common("Authorization");
  dispatch({ type: LOGGED_OUT });
};

//User Login
export const LoginUser = (userData) => (dispatch) => {
  console.log("Taken user data, pulling userdata from db");
  axios.post("http:/localhost:8080/login", userData).then((results) => {
    setAuthorizationHeader(results.data.accessToken);
    console.log("Triggering LOGGED_IN dispatch");
    dispatch({ type: LOGGED_IN });
  });
};

//User Registration
export const RegisterUser = (newUserData) => (dispatch) => {
  console.log("Beginning user registration");
  axios.post("/http:/localhost:8080/register", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Registration success!");
      dispatch({ type: SIGNED_UP });
    }
  });
};

//Get User Tasks
export const GetUserTasks = () => (dispatch) => {
  console.log("Retriving single user tasks");
  dispatch({ type: LOADING_DATA });
  axios
    .get("/localhost:8080/usertaskFeed")
    .then((userTasks) => {
      console.log("found user tasks!");
      console.log(userTasks);
      dispatch({
        type: GET_USER_TASKS,
        payload: userTasks.data,
      });
    })
    .catch((err) => console.log(err));
};

//Get All Tasks
export const getAllTasks = () => (dispatch) => {
  console.log("Retriving all tasks");
  dispatch({ type: LOADING_DATA });
  axios
    .get("/http://localhost:8080/taskFeed")
    .then((allTasks) => {
      console.log("found all tasks");
      console.log(allTasks);
      dispatch({
        type: GET_ALL_TASKS,
        payload: allTasks.data,
      });
    })
    .catch((err) => console.log(err));
};
