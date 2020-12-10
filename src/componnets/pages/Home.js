import React from "react";
import "../../App.css";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../footer/Footer";
import ContactPage from "./ContactPage";

// Home Page is the Landing Page aka route to "/"
function Home() {
  return (
    <>
      <LandingPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default Home;
