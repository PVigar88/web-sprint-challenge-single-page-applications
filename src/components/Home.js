import React from "react";
import { Link } from "react-router-dom";
import RestaurantPanels from "./RestaurantPanels";

export default function Home() {
  return (
    <div>
      <div>
        Your Favorite Food, Delivered While Coding
        <Link to="/pizza">Pizza?</Link>
      </div>

      <h3>Food Delivery Near here</h3>
      <RestaurantPanels />
    </div>
  );
}
