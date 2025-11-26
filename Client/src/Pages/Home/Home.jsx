import React from "react";
import Banner from "./Banner";
import MyContainer from "./../../sharedComponents/MyContainer";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <MyContainer>
      <Banner />
      <HowItWorks />
    </MyContainer>
  );
};

export default Home;
