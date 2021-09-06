import CartItem from "../components/cartItem";
import AppCard from "../components/AppCard";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const Cart = (): any => {
  const router = useRouter();
  const {
    cart,
    details: { total, count },
  } = useSelector((state: any): any => state.cart);
  const { products } = useSelector((state: any): any => state.products);
  const goToSucces = (): any => {
    router.push("/success");
  };

  return (
    <>
      <div className="cart-collections pt-xl pb-xl">
        <div className="container">
          <h3 className="fs-xl mb-md text-primary">Cart :</h3>
          <div className="row">
            {cart.length == 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}

            {cart.length > 0 && (
              <>
                {cart.map((item: any, index: any): any => (
                  <div className="col-12" key={index}>
                    <CartItem cart={item} />
                  </div>
                ))}
                <div className="col-12 mt-sm mb-sm">
                  <div className="cart-total">
                    <h3 className="fs-sm mr-md">Total: {total}$</h3>
                    <h3 className="fs-sm">No: {count}</h3>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" onClick={goToSucces}>
                    Processed To Checkout
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="row mt-xl">
            <div className="col-12">
              <h3 className="fs-xl mb-md text-primary">Best Products :</h3>
            </div>
            {products.map((item: any): any => (
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
export default Cart;
