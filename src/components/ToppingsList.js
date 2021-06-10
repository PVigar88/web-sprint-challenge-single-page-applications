import React from "react";

export default function ToppingsList(props) {
  const { toppings } = props;
  if (!toppings) {
    return <p>Toppings: None Selected</p>;
  }
  return (
    <div className="toppingsList">
      <p>Toppings:</p>
      <ul>
        {toppings.map((topping) => {
          return <li>{topping}</li>;
        })}
      </ul>
    </div>
  );
}
