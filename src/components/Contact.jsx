import Button from "../layouts/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
        {/* Contact Form */}
        <motion.form
          className="w-full lg:w-2/5 space-y-6 bg-[#F9F9F9] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold text-center text-gray-800">
            Get in Touch
          </h1>
          <p className="text-center text-gray-500 text-sm mb-4">
            We'd love to hear from you. Fill out the form below, and we'll get
            back to you shortly.
          </p>
          <div className="flex flex-col">
            <label
              htmlFor="userName"
              className="text-gray-700 font-medium mb-1"
            >
              Full Name
            </label>
            <input
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cb6ce6] hover:shadow-md transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="userEmail"
              className="text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cb6ce6] hover:shadow-md transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your email address"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="userMessage"
              className="text-gray-700 font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cb6ce6] hover:shadow-md transition-all"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button
              title="Submit"
              backgroundColor="bg-[#cb6ce6]"
              textColor="text-white"
              hoverBackgroundColor="hover:bg-[#8b45c6]"
            />
          </div>
        </motion.form>

        {/* Contact Image Section */}
        <motion.div
          className="w-full lg:w-2/4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-[400px] h-[400px]">
            <img
              className="rounded-2xl shadow-lg"
              src="/Trip.png"
              alt="Contact Us"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-5 px-4">
            Have questions or need help planning your trip? Our team is ready to
            assist you. Fill in the form, and let’s start creating unforgettable
            experiences together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
