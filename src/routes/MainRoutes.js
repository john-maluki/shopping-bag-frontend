import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home";
import Products from "../components/products/Products";
import Shops from "../components/shops/Shops";
import Shop from "../components/shops/shop/Shop";
import MyShoppingBags from "../components/my_bags/MyShoppingBags";
import Trash from "../components/trash_buckects/Trash";
import MyShoppingBag from "../components/my_bags/MyShoppingBag";
import Logout from "../components/logout/Logout";
import PrivateRoute from "./PrivateRoute";
import FinalRegistrationForm from "../components/registration/FinalRegistrationForm";

export const MainRoutes = ({ user }) => {
  return (
    <Routes>
      <Route exact path="/" element={user ? <Products /> : <Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/shops" element={<Shops user={user} />} />
      <Route path="shops/shop/:shopId/*" element={<Shop user={user} />} />
      <Route
        exact
        path="/my-bags"
        element={
          <PrivateRoute user={user}>
            <MyShoppingBags />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/my-bags/:shoppingBagId"
        element={
          <PrivateRoute user={user}>
            <MyShoppingBag />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/trash"
        element={
          <PrivateRoute user={user}>
            <Trash />
          </PrivateRoute>
        }
      />
      <Route exact path="/login" element={<Home />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route
        exact
        path="/final/registration"
        element={<FinalRegistrationForm />}
      />
    </Routes>
  );
};
