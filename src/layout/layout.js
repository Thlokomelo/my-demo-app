import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import CaseStudies from "../components/caseStudies/CaseStudies";
import Brands from "../components/brands/Brands";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div class="container md:mx-auto sm:py-24 px-4">
        <AboutUs />
        <CaseStudies />
        <Brands />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
