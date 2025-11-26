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
    <div className="my-20">
      <div className="bg-secondary rounded-3xl py-16 px-8 text-white space-y-6 shadow-lg">
        <MyTitle className="text-center text-white">Our Services</MyTitle>

        <p className="text-center max-w-3xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.
          <span className="hidden md:block">
            {" "}
            From personal packages to business shipments — we deliver on time,
            every time.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                  ${
                    idx === 1
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700"
                  }
                  `}
            >
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/connection-status-on--v1.png"
                alt="connection-status-on--v1"
              />
              "
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
