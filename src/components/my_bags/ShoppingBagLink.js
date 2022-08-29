import React from "react";
import { Link } from "react-router-dom";
import { obtainDate } from "../../utils/DateUtil";

const ShoppingBagLink = ({ dateCreated, description, bagId }) => {
  return (
    <div
      className="shopping_bag"
      data-title={`Created on ${obtainDate(
        dateCreated
      ).toLocaleDateString()}. Find more details...`}
    >
      <Link className="date" to={`${bagId}`}>
        {obtainDate(dateCreated).toDateString()} - {description}
      </Link>
    </div>
  );
};

export default ShoppingBagLink;
