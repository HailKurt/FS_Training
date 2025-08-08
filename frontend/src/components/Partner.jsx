import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "https://via.placeholder.com/120x60?text=KISKO",
  "https://via.placeholder.com/120x60?text=KISKO",
  "https://via.placeholder.com/120x60?text=KISKO",
  "https://via.placeholder.com/120x60?text=KISKO",
  "https://via.placeholder.com/120x60?text=KISKO",
];

const Partner = () => {
  return (
    <section className="bg-blue-900 py-6 px-4">
      <h2 className="text-white text-lg font-semibold mb-4">Our Partner</h2>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md shadow-md mx-4 px-6 py-4 flex items-center justify-center"
          >
            <img src={logo} alt="Partner Logo" className="h-12 object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partner;
