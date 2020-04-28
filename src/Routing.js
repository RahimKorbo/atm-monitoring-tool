import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/common/Login";
import Dashboard from "./components/admin/Dashboard";
import BankList from "./components/bank/BankList";
import AtmList from "./components/atm/AtmList";
import AtmDetailsPage from "./components/atm/AtmDetailsPage";
import addAtm from "./components/atm/addAtm";
import BankDashboard from "./components/bank/BankDashboard";

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/bankList" component={BankList} />
        <Route exact path="/atmList" component={AtmList} />
        <Route exact path="/atmDetailsPage" component={AtmDetailsPage} />
        
        <Route exact path="/addAtm" component={addAtm} />
        
        <Route exact path="/bankDashboard" component={BankDashboard} />
      </Switch>
    </main>
  );
}
