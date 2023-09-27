import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./dashboard/AllProduct";
import CategoryProducts from "./dashboard/CategoryProducts";
import Home from "./dashboard/Home";
import SingleProduct from "./dashboard/SingleProduct";
import Cart from "./dashboard/Cart";
import Wishlist from "./dashboard/Wishlist";
import Register from "./dashboard/Register";
import Login from "./dashboard/Login";
import PrivateRoutes from "../utils/PrivateRoutes";
import PlaceOrder from "./dashboard/PlaceOrder";
import MyOrders from "./dashboard/MyOrders";
import SearchProducts from "./dashboard/SearchProducts";
import NotFoundPage from "./dashboard/NotFoundPage";
function Dashboard() {
  return (
    <div className="col min-h-450px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
        <Route path="/products/search" element={<SearchProducts />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<PlaceOrder />} path="/cart/placeorder" />
          <Route element={<MyOrders />} path="/myorders" />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
