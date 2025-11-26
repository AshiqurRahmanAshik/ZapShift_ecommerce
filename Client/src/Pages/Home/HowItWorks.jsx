import React from "react";
import MyContainer from "./../../sharedComponents/MyContainer";
import MyTitle from "../../sharedComponents/MyTitle";

const HowItWorks = () => {
  const works = [
    {
      title: "Booking Pick & Drop",
      info: "Easily book doorstep pickup and delivery for your parcels — fast, simple, and hassle-free.",
      src: "https://img.icons8.com/color/48/deliver-food.png",
      alt: "deliver-food",
    },
    {
      title: "Cash On Delivery",
      info: "Accept payments only after delivery. A safe, convenient, and reliable COD service for your business.",
      src: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-cash-on-delivery-cyber-monday-flaticons-flat-flat-icons.png",
      alt: "Cash on delivery",
    },
    {
      title: "Delivery Hub",
      info: "Access our nationwide delivery hubs to sort, store, and dispatch parcels with maximum efficiency.",
      src: "https://img.icons8.com/ios-filled/50/successful-delivery.png",
      alt: "successful-delivery",
    },
    {
      title: "Booking SME & Corporate",
      info: "Customized logistics solutions designed for SMEs and corporates to streamline bulk shipping operations.",
      src: "https://img.icons8.com/fluency/48/delivery-scooter.png",
      alt: "delivery-scooter",
    },
  ];

  return (
    <div className="my-10 space-y-5">
      <MyTitle className="text-center">How it Works</MyTitle>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <img
              className="w-12 h-10 border rounded border-gray-300"
              src={work.src}
              alt={work.alt}
            />
            <h3 className="text-lg font-bold text-secondary mb-2">
              {work.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{work.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
