import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
