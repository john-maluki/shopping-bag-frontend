import React, { useEffect, useState } from "react";
import { getMyTrashedShoppingBagService } from "../../services/MyBagService";
import { obtainDate } from "../../utils/DateUtil";
import LoadingIndicator from "../utils/LoadingIndicator";
import TrashActions from "./TrashActions";

const TrashedShoppingBags = () => {
  const [loading, setLoading] = useState(false);
  const [myTrashedBags, setMyTrashedBags] = useState([]);

  const getTrahedBags = () => {
    setLoading(true);
    return async () => {
      const trashedBags = await getMyTrashedShoppingBagService();
      setMyTrashedBags(trashedBags);
      setLoading(false);
    };
  };

  useEffect(getTrahedBags, []);
  return (
    <div className="trashed-shopping-bag-list">
      <p>Trashed shopping-bags</p>
      <LoadingIndicator loading={loading}>
        {myTrashedBags.length !== 0 ? (
          <table>
            <tbody>
              {myTrashedBags.map((trashedBag) => (
                <tr key={trashedBag?.id}>
                  <td>{obtainDate(trashedBag?.dateCreated).toDateString()}</td>
                  <td>{trashedBag?.description}</td>
                  <td>
                    <TrashActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No trashed bags!</p>
        )}
      </LoadingIndicator>
    </div>
  );
};

export default TrashedShoppingBags;
