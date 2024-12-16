import { motion } from "framer-motion";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  const backgroundColor = `bg-[#cb6ce6]`;

  return (
    <div className="min-h-screen lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-center md:mx-32 mx-5 py-12">
      {/* Text Section */}
      <motion.div
        className="flex flex-col text-center lg:text-start gap-5 lg:w-1/2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Subheading */}
        <motion.h3
          className="text-sm font-medium uppercase text-[#cb6ce6] tracking-wide"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          Your Journey Begins Here
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          className="font-bold text-4xl md:text-5xl leading-tight text-gray-800"
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          Explore Stunning <span className="text-[#cb6ce6]">Destinations</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-lg md:text-xl"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          With <span className="font-semibold text-[#cb6ce6]">Tour Bazz</span>,
          embark on a journey to uncover breathtaking landscapes, hidden gems,
          and culturally rich destinations around the globe. Let us be your
          guide as you create unforgettable memories and explore the{" "}
          <span className="italic text-[#cb6ce6]">
            most sought-after destinations
          </span>
          , all while immersing yourself in new adventures, vibrant cultures,
          and awe-inspiring scenery. Your next great story begins here!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-4 lg:pl-8"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button
              title="Explore Destinations"
              className="px-8 py-3 text-lg bg-[#cb6ce6] text-white rounded-lg hover:scale-105 hover:bg-[#ba5bd1] transition-transform duration-300 shadow-lg"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* Image with gradient overlay */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img
            src="/home.png"
            alt="Beautiful Travel Destination"
            className="rounded-lg border-4 border-[#cb6ce6] shadow-xl w-full max-h-[450px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#cb6ce6] to-transparent opacity-40 rounded-lg"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
