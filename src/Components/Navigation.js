import React, { useEffect, useState } from "react";
import "../Views/Navigation.css";

function Navigation() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navigation ${show && "navigation__black"}`}>
      <img
        className="navigation__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      ></img>
    </div>
  );
}

export default Navigation;
