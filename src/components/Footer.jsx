import React from "react";

const Footer = ({ itemCount }) => {
  const date = new Date();

  return (
    <div>
      Copyright &copy; {date.getFullYear()} | All Rights Reserved | Total Items:{" "}
      {itemCount}
    </div>
  );
};

export default Footer;
