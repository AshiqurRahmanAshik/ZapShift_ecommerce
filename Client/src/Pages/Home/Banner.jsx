import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import MyContainer from "../../sharedComponents/MyContainer";

const Banner = () => {
  const banners = [
    { src: banner1, alt: "Parcel tracking banner" },
    { src: banner2, alt: "Rider recruitment banner" },
    { src: banner3, alt: "Delivery service banner" },
  ];
  return (
    <div>
      <Carousel infiniteLoop={true} autoPlay={true}>
        {banners.map((banner, idx) => (
          <div key={idx} className="relative">
            <img src={banner.src} alt={banner.alt} />
            <div className="absolute bottom-20 left-20 space-x-5 hidden lg:block">
              <button className="btn bg-primary rounded">
                Track Your Parcel
              </button>
              <button className="btn bg-primary rounded">Be a Rider</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
