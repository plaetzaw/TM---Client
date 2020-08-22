//===React===
import React from "react";
import ReactDOM from "react-dom";

//===Pages===
import Login from "./components/login";
import Register from "./components/registration";
import Create from "./components/createTask";
import Feed from "./components/taskFeed";
import UserFeed from "./components/userTaskFeed";
import ExampleTaskFeedThing from "./components/ExampleTaskFeedThing";

//===Layout===
import UI from "./components/Layout/UI";

//===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";

///===Redux===
import { Provider } from "react-redux";
// import { createStore } from "redux";

// ===Store===
import store from "./redux/store";

///===Authentication===
import AuthRoute from "./utility/AuthRoute";
import Protected from "./utility/ProtectedRoute";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UI />
      <Switch>
        <AuthRoute exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Protected exact path="/createTask" component={Create} />
        <Protected exact path="/taskFeed" component={Feed} />
        <Protected exact path="/userTaskFeed" component={UserFeed} />
        {/* <Protected
          exact
          path="/userTaskFeed"
          component={ExampleTaskFeedThing}
        /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
