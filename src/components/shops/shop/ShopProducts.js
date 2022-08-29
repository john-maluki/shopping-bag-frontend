import React, { useEffect, useState } from "react";
import { getShopProductsService } from "../../../services/ShopService";
import LoadingIndicator from "../../utils/LoadingIndicator";
import ShopProduct from "./ShopProduct";

const ShopProducts = ({ user, shopId }) => {
  const [loading, setLoading] = useState(false);
  const [shopPros, setShopPros] = useState([]);

  const getShopProducts = () => {
    setLoading(true);
    return async () => {
      const loadedShopProducts = await getShopProductsService(shopId);
      setShopPros(loadedShopProducts);
      setLoading(false);
    };
  };

  useEffect(getShopProducts, [shopId]);
  return (
    <React.Fragment>
      <div className="shop-product-search">
        <input
          type="search"
          placeholder="Search shop products..."
          disabled={loading ? "disable" : ""}
        />
      </div>
      <LoadingIndicator loading={loading}>
        {shopPros.length !== 0 ? (
          shopPros.map((sp) => (
            <div key={sp.id} className="shop-products">
              <ShopProduct user={user} product={sp.product} price={sp.price} />
            </div>
          ))
        ) : (
          <div className="shop-products no-products">
            <p>no products</p>
          </div>
        )}
      </LoadingIndicator>
    </React.Fragment>
  );
};

export default ShopProducts;
