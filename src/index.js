//===React===
import React from "react";
import ReactDOM from "react-dom";

//===Pages===
import Login from "./components/login";
import Register from "./components/registration";
import Create from "./components/createTask";
import Feed from "./components/taskFeed";
//===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/createtask" component={Create} />
      <Route exact path="/taskfeed" component={Feed} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
