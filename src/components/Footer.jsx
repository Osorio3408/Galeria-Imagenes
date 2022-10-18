import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-cente">
      <div className="container-fluid ">
        <span className="navbar-brand mb-0 h1 ">
          {" "}
          Yuliam Andrey Osorio - &copy; - {new Date().getFullYear}{" "}
        </span>
      </div>
    </nav>
  );
};

export default Footer;
