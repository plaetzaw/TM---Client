import { LOGGED_IN, SIGNED_UP, LOGGED_OUT } from "./actionTypes";

//JWT Token Set
export const setAuthorizationHeader = (token) => {
  const JWToken = `Bearer ${token}`;
  localStorage.setItem("JWToken", JWToken);
  axios.defaults.headers.common("Authorization") = JWToken;
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
  axios.post("/localhost:3000/login", userData).then((results) => {
    setAuthorizationHeader(results.data.accessToken);
    console.log("Triggering LOGGED_IN dispatch");
    dispatch({ type: LOGGED_IN });
  });
};

//User Registration
export const RegisterUser = (newUserData) => (dispatch) => {
  console.log("Beginning user registration");
  axios.post("/localhost:3000/register", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Registration success!");
      dispatch({ type: SIGNED_UP });
    }
  });
};

//Get User Tasks
export const GetUserTasks = (userTAsks) => (dispatch) => {
  console.log("Retriving single user tasks");
};

//Get All Tasks
