import React from "react";
import ToppingsList from "./ToppingsList";
export default function Confirmation(props) {
  const { options } = props;
  if (!options) {
    return <h3>Working fetching your Order details...</h3>;
  }
  return (
    <div className="confirmationPage">
      <h2>Congrats! Pizza is on its way!</h2>
      <div className="orderDetails">
        <p>
          Name: &nbsp; {options.first_name}&nbsp;{options.last_name}
        </p>
        <p>Size: &nbsp; {options.size}</p>
        <p>Sauce: &nbsp; {options.sauce}</p>
        <ToppingsList toppings={options.toppings} />
        <p>Special Instructions: &nbsp; {options.specialInstructions}</p>
      </div>
      <div className="pizzaDog">
        <h3>While you wait, how about a dog with a pizza</h3>
        <img
          src="https://www.rover.com/blog/wp-content/uploads/2017/03/800_9397.jpg"
          alt="
          dog
          Pizza"
        />
      </div>
    </div>
  );
}
