import Button from "../layouts/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center md:px-32 px-5 bg-white gap-12"
    >
      {/* Left Section with Text */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold text-4xl md:text-5xl text-black leading-tight">
          Explore the World with <br />{" "}
          <span className="text-[#cb6ce6]">Tour Bazz</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Embark on a journey of discovery, relaxation, and adventure with
          us. At <span className="font-semibold text-black">Tour Bazz</span>,
          we promise an unforgettable experience where every detail is tailored
          to your perfect trip.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mt-5">
          {/* CTA Buttons */}
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button
              title="Contact Now"
              backgroundColor="bg-[#cb6ce6]"
              textColor="text-white"
              hoverBackgroundColor="hover:bg-[#8b45c6]"
            />
          </Link>
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button
              title="View Destinations"
              backgroundColor="bg-transparent border border-[#cb6ce6]"
              textColor="text-[#cb6ce6]"
              hoverBackgroundColor="hover:bg-[#cb6ce6] hover:text-white"
            />
          </Link>
        </div>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full max-w-lg">
          <img
            className="rounded-2xl shadow-lg"
            src="/hero.jpg"
            alt="About Us"
          />
          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
