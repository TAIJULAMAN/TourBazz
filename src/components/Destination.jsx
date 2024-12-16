import { motion } from "framer-motion";
import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:mx-32 mx-5 py-12">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Most Popular Destinations
      </motion.h1>

      {/* Destination Cards */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <DestinationCard
          img="/hero3.jpg"
          title="Bandarban"
          para="Explore the mesmerizing hills and tranquil landscapes of Bandarban, a serene escape in the Chittagong Hill Tracts."
        />
        <DestinationCard
          img="/hero4.jpg"
          title="Sundarbans"
          para="Journey into the world's largest mangrove forest, home to majestic Royal Bengal Tigers and breathtaking biodiversity."
        />
        <DestinationCard
          img="/hero6.jpg"
          title="St. Martin Island"
          para="Relax on the pristine beaches of St. Martin Island, a tropical paradise nestled in the Bay of Bengal."
        />
      </motion.div>
    </div>
  );
};

export default Destination;
