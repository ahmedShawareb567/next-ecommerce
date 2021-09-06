import AppCard from "../components/AppCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Empty } from "antd";

const Wishlist = (): any => {
  const { products } = useSelector((state: any): any => state.products);
  const wishlists = products.filter(
    (item: any): any => item.wishlist_checked === true
  );

  return (
    <>
      <div className="wishlists pt-xl pb-xl">
        <div className="container">
          <h3 className="fs-xl mb-md">Wishlist:</h3>
          <div className="row">
            {wishlists.length == 0 && (
              <div className="pt-xl pb-xl">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
            {wishlists.map((item: any): any => (
              <div className="col-md-4 col-12 mb-md" key={item.id}>
                <AppCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
