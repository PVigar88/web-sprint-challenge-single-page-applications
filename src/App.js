import React from "react";
import PizzaForm from "./components/PizzaForm";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/pizza">
          <PizzaForm></PizzaForm>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
