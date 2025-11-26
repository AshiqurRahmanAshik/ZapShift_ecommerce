import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-semibold bg-primary rounded-sm" : `${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
