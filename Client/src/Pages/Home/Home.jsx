import React from "react";
import Banner from "./Banner";
import MyContainer from "./../../sharedComponents/MyContainer";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";
import Brands from "./Brands";

const Home = () => {
  return (
    <MyContainer>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
    </MyContainer>
  );
};

export default Home;
