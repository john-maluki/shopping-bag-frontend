import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import ShoppingBagLink from "./ShoppingBagLink";
import { getMyShoppingBagsService } from "../../services/MyBagService";
import LoadingIndicator from "../utils/LoadingIndicator";

const MyShoppingBags = () => {
  const [loading, setLoading] = useState(false);
  const [myBags, setMyBags] = useState([]);

  const getMyBags = () => {
    setLoading(true);
    return async () => {
      const bags = await getMyShoppingBagsService();
      setMyBags(bags);
      setLoading(false);
    };
  };

  useEffect(getMyBags, []);
  return (
    <main>
      <div className="create_bag_link">
        <p>Create new shoppingBag</p>
        <div className="icon">
          <LoadingIndicator
            loading={loading}
            width="20"
            color="red"
            duration="2"
          >
            <FontAwesomeIcon icon={solid("plus")} size="2x" beat />
          </LoadingIndicator>
        </div>
      </div>
      <div className="all-shopping-bags">
        <p>All shopping bags</p>
        <div className="shopping_bag_list">
          <LoadingIndicator loading={loading}>
            {myBags.length !== 0 ? (
              myBags.map((bag) => (
                <ShoppingBagLink
                  key={bag?.id}
                  dateCreated={bag?.dateCreated}
                  description={bag?.description}
                  bagId={bag?.id}
                />
              ))
            ) : (
              <p>You have no bags! Create one.</p>
            )}
          </LoadingIndicator>
        </div>
      </div>
    </main>
  );
};

export default MyShoppingBags;
