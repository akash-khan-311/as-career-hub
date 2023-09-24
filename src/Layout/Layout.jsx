import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `AS Career HUb - Home`;
    } else {
      document.title = `AS Jobs ${location.pathname.replace("/", "-")}`;
    }

    if (location.state) {
      document.title = `${location.state}`;
    }
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
