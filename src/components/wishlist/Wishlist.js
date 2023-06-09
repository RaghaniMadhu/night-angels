import React, { useContext } from "react";
// import WishlistProductCard from "./WishlistProductCard";
import { WishlistContext } from "../../contexts/WishlistContext";
import "../wishlist/Wishlist.css";
import ProductCard from "../products/ProductCard";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-cart-page-div">
      <div>
        <h2>
          {wishlist.length > 0
            ? `My Wishlist(${wishlist.length})`
            : "No Items in Wishlist"}
        </h2>
      </div>
      {wishlist.length > 0 && (
        <div className="all-products-div">
          {wishlist.map((eachProduct) => (
            <ProductCard product={eachProduct} key={eachProduct._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
