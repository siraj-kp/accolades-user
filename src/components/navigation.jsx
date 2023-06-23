import React from "react";
import Logo from "../assets/images/logo.png";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand" href="/">
            <img src={Logo} width={"128px"} height={"32px"} />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/about-us" className="">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="">
                Services
              </a>
            </li>
            <li>
              <a href="/gallery" className="">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact-us" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
