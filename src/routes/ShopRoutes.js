import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutShop from "../components/shops/shop/AboutShop";
import ShopLocation from "../components/shops/shop/location/ShopLocation";
import ShopProducts from "../components/shops/shop/ShopProducts";

const ShopRoutes = ({ user, shopId, shop }) => {
  return (
    <Routes>
      <Route index element={<ShopProducts user={user} shopId={shopId} />} />
      <Route
        exact
        path="/about"
        element={<AboutShop description={shop?.description} />}
      />
      <Route
        exact
        path="/location"
        element={<ShopLocation location={shop?.location} />}
      />
    </Routes>
  );
};

export default ShopRoutes;
