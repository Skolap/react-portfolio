import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  // State and function for display and hide navbar on mobile device
  // setNav(!nav) for change state depending upon current value
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "80px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        {/* display above medium screen */}

        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-[#FF7452]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-[#FF7452]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-[#FF7452]"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-[#FF7452]"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-[#FF7452]"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {/* display below medium screen */}
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* LinkedIn */}
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/skolap/"
            >
              LinkedIn <FaLinkedinIn size={30} />{" "}
            </a>
          </li>
          {/* Github */}
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Skolap"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#CC3C2F]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="mailto:contact@shailesh.org"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          {/* Resume */}
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
