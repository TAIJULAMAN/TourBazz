import React from "react";
import { motion } from "framer-motion";
import Button from "../layouts/Button";

const DestinationCard = (props) => {
  const backgroundColor = `bg-[#cb6ce6]`;

  return (
    <motion.div
      className="w-full lg:w-1/3 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
          src={props.img}
          alt={props.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>

      {/* Content */}
      <div className="bg-[#F9F9F9] p-6 space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{props.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{props.para}</p>
        <Button
          title="Book Tickets"
          backgroundColor={backgroundColor}
          className="px-6 py-2 text-white hover:opacity-90 transition-all"
        />
      </div>
    </motion.div>
  );
};

export default DestinationCard;
