import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/modules/cart";

const CartButton = ({ product }: any): any => {
  const dispatch: any = useDispatch();
  const addTo = (): any => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  return (
    <>
      <div className="appCard-body-cart">
        <button className="appCard-body-button" onClick={addTo}>
          <FaCartPlus />
        </button>
      </div>
    </>
  );
};

CartButton.defaultProps = {
  product: {
    name: "",
    description: "",
    price: "",
    quantity: 1,
  },
};

export default CartButton;
