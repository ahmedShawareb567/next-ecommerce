import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

const Socials = ({ facebook, instagram, twitter }: any): any => {
  return (
    <>
      <ul className="social-icons">
        <li>
          <Link href={facebook}>
            <a title="Facebook">
              <FaFacebookF />
            </a>
          </Link>
        </li>
        <li>
          <Link href={instagram}>
            <a title="Instagram">
              <SiInstagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href={twitter}>
            <a title="Twitter">
              <SiTwitter />
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

Socials.defaultProps = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
};

export default Socials;
