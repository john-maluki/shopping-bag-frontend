import React from "react";
import Product from "../../products/Product";

const ShopProduct = ({ user, product, price }) => {
  return (
    <div className="shop-product-card">
      <Product
        description={product.description}
        brand={product.brand.name}
        productImage={product?.imageUrl}
      />
      <h2 className="price">KSH {price}</h2>
      {user && <p className="btn">save</p>}
    </div>
  );
};

export default ShopProduct;
