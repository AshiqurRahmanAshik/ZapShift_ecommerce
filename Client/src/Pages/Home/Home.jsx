import React from "react";
import Banner from "./Banner";
import MyContainer from "./../../sharedComponents/MyContainer";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <MyContainer>
      <Banner />
      <HowItWorks />
      <OurServices />
    </MyContainer>
  );
};

export default Home;
