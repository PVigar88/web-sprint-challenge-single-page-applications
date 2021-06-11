import React, { useState, useEffect } from "react";
import PizzaForm from "./components/PizzaForm";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Home from "./components/Home";
import * as yup from "yup";
import schema from "./validation/formSchema";
import axios from "axios";
import Confirmation from "./components/confirmation";

const initialFormData = {
  first_name: "",
  last_name: "",
  size: "",
  sauce: "",
  cheese: false,
  pepperoni: false,
  sausage: false,
  greenPeppers: false,
  onion: false,
  blackOlives: false,
  greenOlives: false,
  mushroom: false,
  bananaPeppers: false,
  pineapple: false,
  specialInstructions: "",
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  size: "",
  sauce: "",
  specialInstructions: "",
};
const initialDisabled = true;

const App = () => {
  const [pizzaOptions, setPizzaOptions] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const hist = useHistory();

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/pizza", newOrder)
      .then((res) => {
        console.log(res.data);
        setPizzaOptions(res.data);

        setFormData(initialFormData);
      })
      .catch((err) => {
        setFormData(initialFormData);
        console.log("There was an error making the pizza");
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      size: formData.size,
      sauce: formData.sauce,
      toppings: [
        "cheese",
        "pepperoni",
        "sausage",
        "greenPeppers",
        "onion",
        "blackOlives",
        "greenOlives",
        "mushroom",
        "bananaPeppers",
        "pineapple",
      ].filter((topping) => formData[topping]),
      specialInstructions: formData.specialInstructions,
    };
    postNewOrder(newOrder);
    hist.push(`/confirmation`);
  };
  useEffect(() => {
    schema.isValid(formData).then((valid) => {
      setDisabled(!valid);
    });
  }, [formData]);
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/pizza">
          <PizzaForm
            options={formData}
            change={inputChange}
            submit={submitForm}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation options={pizzaOptions} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
