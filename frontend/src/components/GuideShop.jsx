import React from "react";
import { FaListUl, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineHourglassEmpty } from "react-icons/md";

const GuideShop = () => {
  const steps = [
    { icon: <FaListUl size={40} />, label: "BROWSE" },
    { icon: <FaShoppingCart size={40} />, label: "ADD TO CART" },
    { icon: <AiOutlineShoppingCart size={40} />, label: "CHECKOUT" },
    { icon: <MdOutlinePayment size={40} />, label: "PAYMENT" },
    { icon: <MdOutlineHourglassEmpty size={40} />, label: "THEN WAIT" },
  ];

  return (
    <div className="bg-[#0a1d3a] text-white py-10 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">ONE STOP ONE SHOP</h2>
      <p className="text-sm md:text-base max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white text-[#0a1d3a] rounded-lg shadow-md w-32 h-32 flex flex-col items-center justify-center gap-2 hover:scale-105 transition"
          >
            {step.icon}
            <p className="text-xs font-semibold">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideShop;
