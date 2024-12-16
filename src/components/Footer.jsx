import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 pt-[40px] md:pt-[80px]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:px-32 px-6 py-10">
        {/* About Section */}
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4">Tour Bazz</h1>
          <p className="text-sm leading-relaxed text-gray-600">
            Explore the world's top travel destinations with Tour Bazz and enjoy 
            unforgettable experiences crafted for every adventurer.
          </p>
        </div>

        {/* Destination Section */}
        <div>
          <h2 className="font-medium text-xl pb-4">Destinations</h2>
          <nav className="flex flex-col gap-3">
            <a
              className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              href="/"
            >
              Bandarban
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              href="/"
            >
              Sundarbans
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              href="/"
            >
              St. Martin Island
            </a>
          </nav>
        </div>

        {/* About Section */}
        <div>
          <h2 className="font-medium text-xl pb-4">About</h2>
          <nav className="flex flex-col gap-3">
            <a
              className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              href="/"
            >
              Contact Us
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              href="/"
            >
              Testimonials
            </a>
            <a
              className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              href="/"
            >
              Ratings
            </a>
          </nav>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="font-medium text-xl pb-4">Follow Us</h2>
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <BsFacebook
                size={28}
                className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <RiTwitterXFill
                size={28}
                className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <BsInstagram
                size={28}
                className="hover:text-[#cb6ce6] transition-all duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <p className="text-center text-gray-600 text-sm py-4">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="text-[#cb6ce6] font-medium">Md Shah Aman Patwary</span> | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
