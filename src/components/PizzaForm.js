import React from "react";

export default function PizzaForm(props) {
  // declare states

  //onChange

  //onSubmit

  //return Form

  return (
    <form>
      <h2>Build your own Pizza</h2>

      <label>
        Choose your Size:
        <select name="size">
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">X-tra Large</option>
        </select>
      </label>

      <label>
        Choose your sauce:
        <input type="radio" value="none" name="sauce" />
        None
        <input type="radio" value="classic" name="sauce" />
        Classic Tomato
        <input type="radio" value="bbq" name="sauce" />
        Tangy Barbecue
        <input type="radio" value="alfredo" name="sauce" />
        Alfredo
      </label>

      <label>
        Choose your Toppings:
        <input type="checkbox" name="cheese" />
        Cheese
        <input type="checkbox" name="pepperoni" />
        Pepperoni
        <input type="checkbox" name="sausage" />
        Sausage
        <input type="checkbox" name="greenPeppers" />
        Green Peppers
        <input type="checkbox" name="onion" />
        Onion
        <input type="checkbox" name="blackOlives" />
        Black Olives
        <input type="checkbox" name="greenOlives" />
        Green Olives
        <input type="checkbox" name="mushroom" />
        Mushroom
        <input type="checkbox" name="bananaPeppers" />
        Banana Peppers
      </label>

      <label>
        Special Instructions:
        <input type="text" placeholder="(pepperonis in a smiley face)" />
      </label>
      <button>Place Order</button>
    </form>
  );
}
