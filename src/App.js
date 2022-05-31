import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import UpdateTicket from "./pages/Ticket_update";
import CreateTicket from "./pages/Ticket_create";

import history from "./history";

import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <Router history={history} basename="/">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/tickets/new" exact component={CreateTicket}></Route>
          <Route path="/tickets/update/:id" exact component={UpdateTicket}></Route>
        </Switch>
      </Router>
    </div>
  );
}
