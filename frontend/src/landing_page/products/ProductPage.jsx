import React from "react";
import {Link} from "react-router-dom";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  return (
    <>
      <Hero />


      <LeftSection
        imageURL="media/images/Produc.png"
        productName="Fincrub Trade"
        productDescription="A fast and intuitive trading platform with live data, advanced charts, and a smooth UI. Designed to make trading simple and transparent for everyone."
        tryDemo=""
        learnMore=""
      />


      <LeftSection
        imageURL="media/images/Coi.png"
        productName="Fincrub Invest"
        productDescription="Invest in direct mutual funds, commission-free, with seamless integration to your Demat account. Manage your portfolio easily from both web and mobile devices."
        tryDemo="/invest-demo"
        learnMore="/about-invest"
      />


      <RightSection
        imageURL="media/images/Lear.png"
        productName="Fincrub Learn"
        productDescription="A simple and engaging way to learn stock market basics, trading, and investing. Interactive lessons with charts and visuals to help you grow your financial knowledge."
        tryDemo="/learn/demo"
        learnMore="/learn"
      />


      <p className="text-center fs-5 text-muted mt-5 mb-5 px-3">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" className="text-decoration-none">
          Fincrub.tech
        </a>{" "}
        blog.
      </p>


      <div className="text-center">
          <Link className="btn btn-primary fs-5 px-4 py-2 mt-3 mb-5 w-md-50 w-lg-25" to="/signup" >Signup for Free</Link>
      </div>
    </>
  );
}

export default ProductPage;
