import { motion } from "framer-motion";

const Features = () => {
  // Animation Variants
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between md:mx-32 mx-5 gap-14 py-12">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-2/4 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl font-bold text-center lg:text-start leading-tight text-gray-800"
          variants={fadeIn("up", 0)}
        >
          Get Ready to Explore, Get Ready to Experience!
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg text-center lg:text-start"
          variants={fadeIn("up", 0.2)}
        >
          Discover the best holiday experiences with{" "}
          <span className="font-semibold text-[#cb6ce6]">Tour Bazz</span>! From
          iconic landmarks to hidden gems, we handpick destinations to give you
          extraordinary adventures and lasting memories.
        </motion.p>

        <motion.div
          className="w-full lg:w-4/5 mt-8 lg:ml-10"
          variants={fadeIn("up", 0.4)}
        >
          <img
            className="rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            src="/hero2.jpg"
            alt="Explore"
          />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-2/4 space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Feature 1 */}
        <motion.div
          className="flex items-start gap-6"
          variants={fadeIn("up", 0.6)}
        >
          <div className="w-20">
            <img src='/service.png' alt="Service" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Friendly Service
            </h2>
            <p className="text-gray-600">
              Our dedicated team ensures a seamless and friendly experience
              every step of your journey.
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="flex items-start gap-6"
          variants={fadeIn("up", 0.8)}
        >
          <div className="w-20">
            <img src="/user.png" alt="Experience" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Unforgettable Experiences
            </h2>
            <p className="text-gray-600">
              Immerse yourself in remarkable adventures tailored to create
              memories you'll cherish forever.
            </p>
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="flex items-start gap-6"
          variants={fadeIn("up", 1)}
        >
          <div className="w-20">
            <img src="/wallet.png" alt="Pricing" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Affordable Prices
            </h2>
            <p className="text-gray-600">
              Enjoy world-class experiences at prices that won't break the bank.
              Quality and affordability guaranteed!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
