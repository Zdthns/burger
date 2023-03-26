import React, { FC } from "react";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
