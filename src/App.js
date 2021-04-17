import React from "react";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <div>
        Your Favorite Food, Delivered While Coding
        {/* button or link here */}
      </div>

      <h3>Food Delivery Near here</h3>

      <PizzaForm></PizzaForm>
    </>
  );
};
export default App;
