//===React===
import React from "react";
import ReactDOM from "react-dom";

//===Pages===
import Login from "./components/login";
import Register from "./components/registration";
import Create from "./components/createTask";
import Feed from "./components/taskFeed";

//===Layout===
import UI from "./components/Layout/UI";

//===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";

///===Redux===
import { Provider } from "react-redux";
// import { createStore } from "redux";

// ===Store===
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UI />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/createTask" component={Create} />
        <Route exact path="/taskFeed" component={Feed} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
