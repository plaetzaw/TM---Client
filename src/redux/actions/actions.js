import {
  LOGGED_IN,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SIGNED_UP,
  LOADING_DATA,
  GET_USER_TASKS,
  GET_ALL_TASKS,
  POST_TASK,
  GET_ALL_USERS,
  DELETE_TASK,
  UPDATE_TASK,
} from "./actionTypes";

import axios from "axios";
import jwtDecode from "jwt-decode";

//JWT Token Set
export const setAuthorizationHeader = (token) => {
  const JWToken = `Bearer ${token}`;
  localStorage.setItem("JWToken", JWToken);
  axios.defaults.headers.common["Authorization"] = JWToken;
};

//Logout/RemoveJWT
export const LogoutUser = () => (dispatch) => {
  localStorage.removeItem("JWToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

//User Login
export const LoginUser = (userData) => (dispatch) => {
  console.log("Taken user data, pulling userdata from db");
  axios.post("http://localhost:8080/login", userData).then((results) => {
    setAuthorizationHeader(results.data.accessToken);
    dispatch({ type: SET_AUTHENTICATED });
    let decodedToken = jwtDecode(results.data.token);
    console.log(decodedToken);
    dispatch({ type: LOGGED_IN, payload: decodedToken });
  });
};

//User Registration
export const RegisterUser = (newUserData) => (dispatch) => {
  console.log("Beginning user registration");
  axios.post("http://localhost:8080/register", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Registration success!");
      dispatch({ type: SIGNED_UP });
    }
  });
};

//Get User Tasks
export const getUserTasks = (userID) => (dispatch) => {
  console.log("Retriving single user tasks");
  console.log(typeof userID);
  console.log(userID);
  dispatch({ type: LOADING_DATA });
  axios
    .post("http://localhost:8080/userTaskFeed", userID)
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
    .get("http://localhost:8080/taskFeed")
    .then((allTasks) => {
      console.log("found all tasks");
      console.log(allTasks);
      console.log(allTasks.data);
      dispatch({
        type: GET_ALL_TASKS,
        payload: allTasks.data,
      });
    })
    .catch((err) => console.log(err));
};

//Create Task
export const newTask = (newTask) => (dispatch) => {
  console.log("Creating new task");
  axios
    .post("http://localhost:8080/createTask", newTask)
    .then((newTask) => {
      console.log(newTask);
      dispatch({ type: POST_TASK, payload: newTask.data });
    })
    .catch((err) => console.log(err));
};

//Delete Task
export const deleteTask = (data) => (dispatch) => {
  console.log("Deleting task");
  console.log(data);
  axios
    .post("http://localhost:8080/deleteTask", data)
    .then(() => {
      dispatch({ type: DELETE_TASK });
    })
    .catch((err) => console.log(err));
};

//Update Task
export const updateTask = (data) => (dispatch) => {
  console.log("Updating task");
  axios
    .post("http://localhost:8080/updateTask", data)
    .then((updatedTask) => {
      dispatch({ type: UPDATE_TASK, payload: updatedTask.data });
    })
    .catch((err) => console.log(err));
};

//Get All Users
export const getAllUsers = () => (dispatch) => {
  console.log("Gathering users");
  axios
    .post("http://localhost:8080/allUsers")
    .then((allUsers) => {
      console.log("Gathered users");
      dispatch({ type: GET_ALL_USERS, payload: allUsers.data });
      console.log(allUsers.data);
    })
    .catch((err) => console.log(err));
};
