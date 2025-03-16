import  { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Harsh Raj.</div>
      <div>
        <Link to={"https://www.facebook.com/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/harsh-raj-a24666259/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://x.com/?lang=en&mx=2"} target="_blank">
        <BsTwitterX />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
