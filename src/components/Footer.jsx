import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative text-white bg-[#C4ACB4AA] py-12 bg-cover bg-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Sign-Up Section */}
        <div className="bg-[#633947aa] bg-opacity-80 p-6 rounded-md text-center md:text-left w-full md:w-2/3 lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Sign up for our Newsletter
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <Button
              type="submit"
              className="w-full bg-[#3e1422aa] hover:bg-[#3c3422] text-white font-semibold py-2 rounded-md transition"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Social Links & Contact Section */}
        <div className="w-full md:w-1/3 lg:w-1/2 flex flex-col md:flex-row justify-between text-center md:text-right gap-6">
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-3xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-lg">
              {[
                { name: "Birthday Event", link: "#" },
                { name: "Marriage Event", link: "#" },
                { name: "Baby Shower", link: "#" },
                { name: "Office get together", link: "#" },
              ].map(({ name, link }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 hover:underline cursor-pointer text-[#3e1422aa] transition duration-300 hover:text-[#3c3422]"
                >
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-3xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-lg">
              {[
                {
                  name: "Email",
                  icon: <FaEnvelope />,
                  value: "info@example.com",
                },
                { name: "Phone", icon: <FaPhone />, value: "072515138900" },
                {
                  name: "Address",
                  icon: <FaMapMarkerAlt />,
                  value: "Dantantata Dajuruma",
                },
              ].map(({ name, icon, value }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 hover:underline text-[#3e1422aa] cursor-pointer transition duration-300 hover:text-[#3c3422]"
                >
                  {icon} <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-[#3e1422aa] text-center mt-10 px-6">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} All rights reserved. Catering
          Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
