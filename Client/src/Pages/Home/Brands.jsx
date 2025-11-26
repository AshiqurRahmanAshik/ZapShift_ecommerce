import React from "react";
import Marquee from "react-fast-marquee";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
import MyTitle from "./../../sharedComponents/MyTitle";

const brandLogos = [
  { src: casio, alt: "Casio logo" },
  { src: moonstar, alt: "Moonstar logo" },
  { src: randstad, alt: "Randstad logo" },
  { src: star, alt: "Star logo" },
  { src: amazon_vector, alt: "amazon vector logo" },
  { src: start_people, alt: "start_people logo" },
];

const Brands = () => {
  return (
    <div className="my-30 space-y-5 border-b border-dashed border-secondary">
      <MyTitle className="text-center">
        We've helped thousands of sales teams
      </MyTitle>
      <Marquee gradient={false} speed={40} className="py-10">
        <div className="flex items-center gap-8 md:gap-20">
          {brandLogos.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-20 md:w-28 lg:w-32 h-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
