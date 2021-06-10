import React from "react";

export default function PizzaForm(props) {
  // declare states
  const { options, submit, change, disabled, errors } = props;
  //onChange
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  //onSubmit
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  //return Form

  return (
    <form className="pizzaBuilder" onSubmit={onSubmit}>
      <label>
        Customer Details: <br />
        <label>
          Name: &nbsp;
          <input
            type="text"
            placeholder="first"
            name="first_name"
            onChange={onChange}
            value={options.first_name}
          />
          <input
            type="text"
            placeholder="last"
            name="last_name"
            onChange={onChange}
            value={options.last_name}
          />
        </label>
        <label></label>
      </label>

      <h2>Build your own Pizza</h2>

      <label className="size pane">
        Choose your Size: &nbsp;
        <select name="size" onChange={onChange} value={options.size}>
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">X-tra Large</option>
        </select>
      </label>

      <label className="sauce pane">
        Choose your sauce:
        <input
          type="radio"
          value="none"
          name="sauce"
          checked={options.sauce === "none"}
          onChange={onChange}
        />
        None
        <input
          type="radio"
          value="classic"
          name="sauce"
          checked={options.sauce === "classic"}
          onChange={onChange}
        />
        Classic Tomato
        <input
          type="radio"
          value="bbq"
          name="sauce"
          checked={options.sauce === "bbq"}
          onChange={onChange}
        />
        Tangy Barbecue
        <input
          type="radio"
          value="alfredo"
          name="sauce"
          checked={options.sauce === "alfredo"}
          onChange={onChange}
        />
        Alfredo
      </label>

      <label className="toppings pane">
        Choose your Toppings:
        <label>
          <input
            type="checkbox"
            name="cheese"
            checked={options.cheese}
            onChange={onChange}
          />
          Cheese
        </label>
        <label>
          <input
            type="checkbox"
            name="pepperoni"
            checked={options.pepperoni}
            onChange={onChange}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            name="sausage"
            checked={options.sausage}
            onChange={onChange}
          />
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            name="greenPeppers"
            checked={options.greenPeppers}
            onChange={onChange}
          />
          Green Peppers
        </label>
        <label>
          <input
            type="checkbox"
            name="onion"
            checked={options.onion}
            onChange={onChange}
          />
          Onion
        </label>
        <label>
          <input
            type="checkbox"
            name="blackOlives"
            checked={options.blackOlives}
            onChange={onChange}
          />
          Black Olives
        </label>
        <label>
          <input
            type="checkbox"
            name="greenOlives"
            checked={options.greenOlives}
            onChange={onChange}
          />
          Green Olives
        </label>
        <label>
          <input
            type="checkbox"
            name="mushroom"
            checked={options.mushroom}
            onChange={onChange}
          />
          Mushroom
        </label>
        <label>
          <input
            type="checkbox"
            name="bananaPeppers"
            checked={options.bananaPeppers}
            onChange={onChange}
          />
          Banana Peppers
        </label>
        <label>
          <input
            type="checkbox"
            name="pineapple"
            checked={options.pineapple}
            onChange={onChange}
          />
          Pineapple
        </label>
      </label>

      <label className="instructions pane">
        {/* COULD ALSO HAVE BEEN A TEXT AREA */}
        Special Instructions: &nbsp;
        <input
          type="text"
          placeholder="(pepperonis in a smiley face)"
          name="specialInstructions"
          onChange={onChange}
          value={options.specialInstructions}
        />
      </label>
      <div className="errors">
        <div>{errors.last_name}</div>
        <div>{errors.first_name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
      </div>
      <button disabled={disabled} className="orderButton">
        Place Order
      </button>
    </form>
  );
}
