import React, { useEffect, useState } from "react";
import { getShopsService } from "../../services/ShopService";
import LoadingIndicator from "../utils/LoadingIndicator";
import ShopCard from "./ShopCard";

const Shops = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [shops, setShops] = useState([]);

  const getShops = () => {
    setLoading(true);
    return async () => {
      const shopsResp = await getShopsService();
      setShops(shopsResp);
      setLoading(false);
    };
  };

  useEffect(getShops, []);
  return (
    <main>
      <section className="shops">
        {user && (
          <div className="shop-ownership">
            <div className="all-shops">
              <label htmlFor="all-shops">All shops</label>
              <input
                type="checkbox"
                name="all-shops"
                disabled={loading || shops.length === 0 ? "disabled" : ""}
              />
            </div>
            <div className="my-shops">
              <label htmlFor="my-shops">My shops</label>
              <input
                type="checkbox"
                name="my-shops"
                disabled={loading || shops.length === 0 ? "disabled" : ""}
              />
            </div>
          </div>
        )}

        <div className="shop-search">
          <input
            type="search"
            placeholder="Search shops..."
            disabled={loading || shops.length === 0 ? "disabled" : ""}
          />
          <div
            className={loading ? "town-filter element-hidden" : "town-filter"}
          >
            <p>Town</p>
            <select>
              <option>All</option>
              <option>Nairobi</option>
              <option>Meru</option>
            </select>
          </div>
        </div>

        <LoadingIndicator loading={loading}>
          <div className="shop-list">
            {shops.length !== 0 ? (
              shops.map((shop) => (
                <ShopCard
                  key={shop.id}
                  id={shop.id}
                  user={user}
                  name={shop.name}
                  description={shop.description}
                  location={shop.location}
                  shopContact={shop.shopContact.contact}
                />
              ))
            ) : (
              <p>
                No shops available! We apologise at the moment. To be added
                soon.
              </p>
            )}
          </div>
        </LoadingIndicator>
      </section>
    </main>
  );
};

export default Shops;
