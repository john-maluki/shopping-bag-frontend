import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopRoutes from "../../../routes/ShopRoutes";
import { getShopDetailService } from "../../../services/ShopService";
import LoadingIndicator from "../../utils/LoadingIndicator";
import ShopDetailLink from "./ShopDetailLink";

const Shop = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [shop, setShop] = useState(null);
  const { shopId } = useParams();

  const getShop = () => {
    setLoading(true);
    return async () => {
      const currentShop = await getShopDetailService(shopId);
      setShop(currentShop);
      setLoading(false);
    };
  };

  useEffect(getShop, [shopId]);
  return (
    <main>
      <LoadingIndicator loading={loading}>
        <>
          <div className="shop-name-and-contact">
            <p>{shop?.name}</p>
            <p>{shop?.shopContact.contact}</p>
          </div>
          <div className="shop-details-links">
            <ShopDetailLink btnName={"Shop products"} to={""} />
            <ShopDetailLink btnName={"About the Shop"} to={"about"} />
            <ShopDetailLink btnName={"Location"} to={"location"} />
          </div>
          <ShopRoutes user={user} shopId={shopId} shop={shop} />
        </>
      </LoadingIndicator>
    </main>
  );
};

export default Shop;
