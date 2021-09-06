import Logo from "./logo";
import Link from "next/link";
import Headroom from "react-headroom";
import { RiSearchLine } from "react-icons/ri";
import { BsMicFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { ImUser } from "react-icons/im";
import { GrLanguage } from "react-icons/gr";
import { useSelector } from "react-redux";

const Header = (): any => {
  const { cart } = useSelector((state: any): any => state.cart);
  return (
    <>
      <Headroom>
        <div className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="header-logo">
                  <Link href="/">
                    <a>
                      <Logo />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-4 d-md-block d-none">
                <div className="header-search">
                  <input
                    type="search"
                    placeholder="Search.."
                    className="form-control"
                  />
                  <div className="icon-left">
                    <RiSearchLine />
                  </div>
                  <div className="icon-right">
                    <BsMicFill />
                  </div>
                </div>
              </div>

              <div className="col-md-5 col-9">
                <div className="header-details">
                  <ul>
                    <li>
                      <Link href="/cart">
                        <a>
                          <MdShoppingCart />
                          <span>{cart?.length}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wishlist">
                        <a>
                          <TiHeartFullOutline />
                        </a>
                      </Link>
                    </li>
                    <li className="overlay">
                      <Link href="/login">
                        <a>
                          <ImUser />
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link href="/">
                        <a className="d-flex justify-content-center align-items-center">
                          <GrLanguage />
                          <h3 className="fs-xs mb-0">En</h3>
                        </a>
                      </Link>
                    </li>
                    {/* <li className="overlay">
                      <Link href="/">
                        <a>
                          <HiOutlineSun />
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Header;
