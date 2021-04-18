import RestaurantPanel from "./RestaurantPanel";
import React from "react";

export default function RestaurantPanels() {
  return (
    <div>
      <div className="resaurantPanelsTop">
        <RestaurantPanel />
        <RestaurantPanel />
        <RestaurantPanel />
      </div>
      <div className="restauranPanelsBottom">
        <RestaurantPanel />
        <RestaurantPanel />
        <RestaurantPanel />
      </div>
    </div>
  );
}
