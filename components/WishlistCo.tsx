import { BiHeart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateProducts } from "../store/modules/products";

const wishlistStyles = {
  backgroundColor: "#0D3A3B",
  color: "#fff",
  borderColor: "rgba(255,255,255, .2)",
};

const WishlistCo = ({ product }: any): any => {
  const dispatch = useDispatch();

  const toggleWishlist = (): any => {
    dispatch(updateProducts(product));
  };

  return (
    <>
      <div className="appCard-wishlist">
        <button
          className="appCard-wishlist-button"
          onClick={toggleWishlist}
          style={product.wishlist_checked ? wishlistStyles : {}}
        >
          <BiHeart />
        </button>
      </div>
    </>
  );
};

export default WishlistCo;
