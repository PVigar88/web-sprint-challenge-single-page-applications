import React from "react";
import { Link } from "react-router-dom";
import RestaurantPanels from "./RestaurantPanels";

export default function Home() {
  return (
    <div className="homePage">
      <div className="pizzaHeader">
        <p>Your Favorite Food, Delivered While Coding</p>
        <Link className="pizzaLink" to="/pizza">
          Want Pizza? Click Here!
        </Link>
      </div>

      <h3>Food Delivery Near here</h3>
      <RestaurantPanels />
    </div>
  );
}
