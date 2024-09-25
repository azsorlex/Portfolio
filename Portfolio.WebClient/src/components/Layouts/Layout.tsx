import { Fragment, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { scrollToTop } from "../../App";
import { RoutesProps, useLocation } from "react-router-dom";
import { animatedMainVariants } from "../../data/constants/FramerVariants";

export default function Layout({ children }: RoutesProps) {
  const location = useLocation();

  useEffect(() => {
    scrollToTop(true);
  }, []);

  useEffect(() => {
    if (location!.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else if (location.pathname === "/") {
      scrollToTop(false);
    } else {
      setTimeout(() => {
        scrollToTop(false);
      }, animatedMainVariants.exit.transition.duration * 1050);
    }
    console.log(children);
  }, [location]);

  return (
    <Fragment>
      <Header />
      <Box className="spacer" />
      {children}
      <Footer />
    </Fragment>
  );
}