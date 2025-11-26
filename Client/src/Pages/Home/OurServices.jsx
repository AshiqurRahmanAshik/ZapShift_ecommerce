import React from "react";
import MyContainer from "../../sharedComponents/MyContainer";
import MyTitle from "../../sharedComponents/MyTitle";

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      info: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Same Day Express Delivery",
      info: "Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off, ensuring urgent parcels reach on time.",
    },
    {
      title: "Standard 24–72 Hour Delivery",
      info: "Reliable parcel delivery across Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi within 24–72 hours.",
    },
    {
      title: "City-to-City Delivery",
      info: "Fast and secure parcel movement between major cities including Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.",
    },
    {
      title: "Doorstep Pick & Drop",
      info: "From pickup to doorstep delivery, we ensure your parcels move smoothly with express and standard options.",
    },
    {
      title: "Business & E-commerce Delivery",
      info: "Perfect for businesses needing standard or express delivery options with consistent timing across major cities.",
    },
  ];

  return (
    <div>
      <MyContainer className="my-20 space-y-5 bg-secondary">
        <MyTitle className="text-white text-center mt-5">Our Services</MyTitle>
        <p className="text-center text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.{" "}
          <span className="hidden md:block">
            From personal packages to business shipments — we deliver on time,
            every time.
          </span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/connection-status-on--v1.png"
                alt="connection-status-on--v1"
              />

              <h3 className="text-lg font-bold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.info}</p>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default OurServices;
