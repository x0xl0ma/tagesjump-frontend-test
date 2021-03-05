import React from "react";

import "./navbar.scss";

const Navbar = () => {
  return (
    <header>
      <ul className="crumbs">
        <li>
          <span> Главная / </span>
        </li>
        <li>
          <span>Системы хранения / </span>
        </li>
        <li>
          <span>Комплекты стеллажных систем</span>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
