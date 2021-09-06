import Logo from "./logo";
import Link from "next/link";
import Socials from "./socials";
import { HiPhone } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = (): any => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-sm">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
              </div>
              <div className="footer-socials mb-md">
                <Socials />
              </div>
              <div className="d-flex justify-content-between flex-wrap align-items-end">
                <div className="footer-address">
                  <p>
                    <span>
                      <HiPhone />
                    </span>
                    <span className="mx-2">+2001030730761</span>
                  </p>
                  <p>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span className="mx-2">
                      +software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </span>
                  </p>
                </div>
                <p className="fs-xs">
                  All Rights preserved By{" "}
                  <Link href="#">
                    <a className="text-info">Baianat</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
