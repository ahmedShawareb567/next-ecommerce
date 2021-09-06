import { VscClose } from "react-icons/vsc";
import Image from "next/image";
import Counter from "../components/counter";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/modules/cart";
import products from "../store/modules/products";
const CartItem = ({ cart }: any): any => {
  const dispatch = useDispatch();
  const removeFrom = (): any => {
    dispatch(removeFromCart(cart));
  };
  return (
    <>
      <div className="cart-item">
        <div className="cart-head">
          <div className="cart-head-image">
            <Image
              src="/images/cartItem.png"
              alt=""
              width="90"
              height="90"
              layout="intrinsic"
            />
          </div>
          <div className="cart-head-details m-2">
            <h3 className="fs-sm mb-1">{cart.name}</h3>
            <ul className="colors">
              <li></li>
              <li></li>
            </ul>
            <p className="fs-xxs mt-1">
              <span className="fw-b">Size: </span>2X
            </p>
          </div>
        </div>
        <div className="cart-counter">
          <Counter product={cart} />
        </div>
        <div className="cart-quantity">
          <h3 className="fs-sm mb-0">No: {cart?.quantity}</h3>
        </div>
        <div className="cart-price">
          <h3 className="fs-sm mb-0">Price: {cart?.total}$</h3>
        </div>
        <div className="cart-close">
          <button onClick={removeFrom}>
            <VscClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
