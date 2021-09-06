import Image from "next/image";
import CartButton from "./CartButton";
import WishlistCo from "./WishlistCo";

const AppCard = ({ product }: any): any => {
  return (
    <>
      <div className="appCard">
        <div className="appCard-header">
          <Image
            src="/images/appCard.png"
            width="500"
            height="400"
            alt=""
            layout="responsive"
          />
          <WishlistCo product={product} />
        </div>
        <div className="appCard-body">
          <div className="appCard-body-sttart">
            <h2 className="appCard-body-title">{product?.name}</h2>
            <p className="appCard-body-content">{product?.description}</p>
            <div className="appCard-body-details">
              <ul className="points">
                <li className="colors">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li className="price">{product?.price} $</li>
                <li className="category">
                  <h3>
                    Category:<span>T-Shirt</span>
                  </h3>
                </li>
                <li className="category">
                  <h3>
                    Brand :<span>Pollo</span>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <CartButton product={product} />
        </div>
      </div>
    </>
  );
};

export default AppCard;
