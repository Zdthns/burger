import React from "react";
import Navigation from "../Navigation/Navigation";
import style from "./appHeader.module.css";

function AppHeader() {
  return (
    <header className={`${style.header} pt-4 pb-4`}>
      <Navigation />
    </header>
  );
}

export default AppHeader;
