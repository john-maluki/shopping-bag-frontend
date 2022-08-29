import React, { useEffect, useState } from "react";
import { getMyShoppingBagProductsService } from "../../services/MyBagService";
import LoadingIndicator from "../utils/LoadingIndicator";

const MyShoppingBagProducts = ({ shoppingBagId }) => {
  const [loading, setLoading] = useState(false);
  const [shoppingBagProducts, setShoppingBagProducts] = useState([]);

  const getShoppingBagProducts = () => {
    setLoading(true);
    return async () => {
      const bagProducts = await getMyShoppingBagProductsService(shoppingBagId);
      setShoppingBagProducts(bagProducts);
      setLoading(false);
    };
  };

  useEffect(getShoppingBagProducts, [shoppingBagId]);

  return (
    <div className="shopping-bag-table">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Shop</th>
            <th>QTY</th>
            <th>Total</th>
          </tr>
        </thead>
        {shoppingBagProducts.length === 0 ? (
          <tbody>
            <tr>
              <td>
                <LoadingIndicator loading={loading}>
                  No products
                </LoadingIndicator>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {shoppingBagProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.shopProduct.product.name}</td>
                <td>Ksh {product.shopProduct.price}</td>
                <td>{product.shopProduct.shop.name}</td>
                <td>{product.quantity}</td>
                <td>{product.quantity * product.shopProduct.price}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default MyShoppingBagProducts;
