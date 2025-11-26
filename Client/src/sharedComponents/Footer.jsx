import React from "react";
import Logo from "./Logo";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { FaFacebook } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <MyContainer className="bg-black text-white space-y-10 py-5">
      <div className="flex items-center justify-center">
        <Logo></Logo>
        <h3 className="text-3xl -ms-3">zapShift</h3>
      </div>

      <div className="text-center">
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br />
          business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="flex justify-around md:flex-col md:space-y-10">
        <div className="flex justify-center ">
          <ul className="flex flex-col md:flex-row items-center gap-10 text-sm">
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
            <li>
              <MyLink to={"/about-us"}>Coverage</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}>About Us</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}>Pricing</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}>Blog</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}>Contact</MyLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <FaFacebook style={{ color: "#1877F2", fontSize: "24px" }} />
          <ImLinkedin style={{ color: "#1877F2", fontSize: "24px" }} />
          <IoLogoYoutube style={{ color: "red", fontSize: "24px" }} />
          <BsTwitterX style={{ fontSize: "24px" }} />
        </div>
      </div>
    </MyContainer>
  );
};

export default Footer;
