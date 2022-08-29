import React from "react";
import { NavLink } from "react-router-dom";

const ShopCard = (props) => {
  return (
    <div className="shop-card">
      <h2 className="title">{props.name}</h2>
      <p className="body">{props.description}</p>
      <h2 className="location-desc">
        {props.location !== null
          ? `Town, ${props.location.town};Street, ${props.location.street};State, ${props.location.state}; ${props.location.description}`
          : "Unknown location"}
      </h2>
      <p className="tel">Tel: {props.shopContact}</p>
      <NavLink to={`shop/${props.id}`} className="btn-shop-view">
        visit us
      </NavLink>
    </div>
  );
};

export default ShopCard;
