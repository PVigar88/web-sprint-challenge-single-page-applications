import RestaurantPanel from "./RestaurantPanel";

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
