import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProductsService } from "../../services/productService";
import Product from "./Product";
import LoadingIndicator from "../utils/LoadingIndicator";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    setLoading(true);
    return async () => {
      try {
        const prods = await getProductsService();
        setProducts(prods);
        setLoading(false);
      } catch (ex) {
        toast.error("Network error! Check your connection.");
      }
    };
  };

  useEffect(getProducts, []);

  return (
    <main>
      <section className="products">
        <div className="search-products">
          <input
            type="search"
            placeholder="Search products..."
            disabled={loading || products.length === 0 ? "disable" : ""}
          />
        </div>
        <LoadingIndicator loading={loading}>
          <div className="products-list">
            {products.length !== 0 ? (
              products.map((product) => {
                return (
                  <Product
                    key={product.productId}
                    name={product.name}
                    description={product.description}
                    brand={product.brand.name}
                    productImage={product.imageUrl}
                  />
                );
              })
            ) : (
              <p>No products available! will be added soon.</p>
            )}
          </div>
        </LoadingIndicator>
      </section>
    </main>
  );
};

export default Products;
