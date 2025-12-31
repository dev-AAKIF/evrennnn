import React, { useState } from "react";
import { CompanyDropdownItems, ServicesDropdownItems } from "../lib/utils";
import { NavLink } from "react-router-dom";
import Dropdowns from "./ui/dropdown";
import { MenuIcon, X } from "lucide-react";
import logo from "../assets/logo.png"; // For large screens
import logo2 from "../assets/logo2.png"; // For small and medium screens

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    // <header className="top-0 fixed pt-5 px-2 w-full z-[900]">
    <header className="fixed top-0 left-0 w-full z-[900] px-2 py-2 sm:py-0 bg-transparent">

      <div className="py-1.5 px-3 flex shadow-sm mt-2 justify-between mx-auto w-full max-w-[984px] bg-white/40 backdrop-blur-xl items-center rounded-full border-zinc-200 border">
        {/* Logo and Menu for Small Screens */}
        <div className="icon flex items-center">
          <span className="sm:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </span>

          {/* Logo for Small/Medium Screens */}
          <NavLink to="/">
            <img
              src={logo2}
              alt="Evren Logo Small"
              className="block sm:block lg:hidden mx-3 h-7 w-auto"
            />
          </NavLink>

          {/* Logo + Text for Large Screens */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavLink to="/" className="font-[Poppins] flex items-center space-x-2">
              <img
                src={logo2}
                alt="Evren Logo"
                className="h-7 w-auto"
              />
              {/* Text only visible on lg+ screens */}
              <h4 className="text-lg font-semibold text-black tracking-wide">
                Evren Research
              </h4>
            </NavLink>
          </div>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="space-x-4 hidden sm:flex items-center">
          <Dropdowns items={ServicesDropdownItems} title="Services" />
          <Dropdowns items={CompanyDropdownItems} title="Company" />
          <span>
            <NavLink
              to="/about"
              className="cursor-pointer text-black hover:text-black hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm"
            >
              About
            </NavLink>
          </span>
        </div>

        {/* Button */}
        <NavLink to="/contact">
          <button className="text-sm px-3 py-1.5 hover:bg-fuchsia-900 rounded-full bg-fuchsia-700 text-white">
            Get in Touch
          </button>
        </NavLink>
      </div>

      {/* ---------- Mobile Menu (Dropdown Replacement) ---------- */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-3 bg-white/90 backdrop-blur-lg rounded-2xl mx-3 shadow-lg border border-zinc-200">
          <div className="flex flex-col px-5 py-4 space-y-3">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-black mb-1">Services</h4>
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/kpo-services"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  KPO Services
                </NavLink>
                <NavLink
                  to="/rpo-services"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  RPO Services
                </NavLink>
                <NavLink
                  to="/bpo-services"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  BPO Services
                </NavLink>
                <NavLink
                  to="/crm-services"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  CRM Services
                </NavLink>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-black mb-1">Company</h4>
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/why-us"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  Why Us
                </NavLink>
                <NavLink
                  to="/company-overview"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  Company Overview
                </NavLink>
              </div>
            </div>

            {/* About */}
            <div>
              <div className="font-semibold text-black mb-1">
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className="text-sm text-black hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  About
                </NavLink>
              </div>
            </div>

            {/* Reach Out Button */}
            <NavLink to="/contact" onClick={closeMobileMenu}>
              <button className="w-full text-sm px-4 py-2 bg-fuchsia-700 text-white rounded-full hover:bg-fuchsia-900">
                Get in Touch
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
