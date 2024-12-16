import { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-[#cb6ce6] text-white">
        <div className="flex items-center">
          <Link to="/" spy={true} smooth={true} duration={500}>
            <h1 className="font-semibold text-xl cursor-pointer">Tour Bazz</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-row items-center gap-6">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#eab0ff] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-[#eab0ff]"
          >
            Features
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-[#eab0ff]"
          >
            Destination
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-[#eab0ff]"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-[#eab0ff]"
          >
            Contact
          </Link>
        </nav>

        {/* Register and Login Buttons */}
        <div className="hidden lg:flex flex-row items-center gap-4">
          <h1 className="cursor-pointer transition-all hover:text-[#eab0ff]">
            Register
          </h1>
          <Button
            title="Login"
            backgroundColor="bg-white"
            textColor="text-[#cb6ce6]"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenu size={25} className="text-white" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-[#cb6ce6] text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-[#eab0ff]"
        >
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-[#eab0ff]"
        >
          Features
        </Link>
        <Link
          to="destination"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-[#eab0ff]"
        >
          Destination
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-[#eab0ff]"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-[#eab0ff]"
        >
          Contact
        </Link>

        {/* Mobile Register and Login Buttons */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="cursor-pointer transition-all hover:text-[#eab0ff]">
            Register
          </h1>
          <Button
            title="Login"
            backgroundColor="bg-white"
            textColor="text-[#cb6ce6]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
