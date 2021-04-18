import RestaurantPanel from "./RestaurantPanel";
import React from "react";

export default function RestaurantPanels() {
  return (
    <div>
      <div className="restaurantPanels top">
        <RestaurantPanel />
        <RestaurantPanel />
        <RestaurantPanel />
      </div>
      <div className="restaurantPanels bottom">
        <RestaurantPanel />
        <RestaurantPanel />
        <RestaurantPanel />
      </div>
    </div>
  );
}
