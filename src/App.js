import React from "react";
import PizzaForm from "./components/PizzaForm";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link>Help</Link>
        </div>
      </nav>

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
