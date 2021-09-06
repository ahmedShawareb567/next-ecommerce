import { useDispatch } from "react-redux";
import { productDecrement, productIncrement } from "../store/modules/cart";
const Counter = ({ product }: any): any => {
  const dispatch = useDispatch();

  const quantityIncrement = (): void => {
    dispatch(productIncrement(product));
  };
  const quantityDecrement = (): void => {
    dispatch(productDecrement(product));
  };

  return (
    <>
      <div className="counter">
        <button onClick={quantityDecrement}>-</button>
        <p>|</p>
        <button onClick={quantityIncrement}>+</button>
      </div>
    </>
  );
};

export default Counter;
