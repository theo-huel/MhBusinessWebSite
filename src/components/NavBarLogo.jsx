'use client';
import React, { useState } from "react";
import MyButton from "./MyButton.jsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";
import Icon from "../components/Icon.jsx";

const Navbarlogo = ({ logoSrc = null }) => {
  const { t } = useTranslation("navbar");

  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const navItems = [
    { name: t("home.name"), href: "/" },
    { name: t("about.name"), href: "/about" },
    { name: t("services.name"), href: "/services" },
    //{ name: t("team.name"), href: "/team" },
    { name: t("contact.name"), href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 my-0">
      <div className="container mx-auto px-6 py-1 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer ml-4">
          <Image
            src={logoSrc || "/img/MHBusiness.svg"}
            alt="Logo MH Business"
            width={150}
            height={60}
            className="rounded-md"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-[#AD9551] font-medium transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sélecteur de langue */}
        <div className="relative ml-4">
          {/* <Link href='/trip'> */}
          <MyButton
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            variant="outline"
            className="p-2 flex items-center gap-2"
          >
            {/* <Icon name="Plane" className="w-5 h-5" />
            <span className="hidden sm:inline">MH Business Trip</span> */}
            <Icon name="Globe" className="w-5 h-5" />
          </MyButton>
          {/* </Link> */} 
          {showLangDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-500 rounded shadow-lg z-50">
              {["fr", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => {
                    i18n.changeLanguage(lng);
                    setShowLangDropdown(false);
                  }}
                  className="w-full text-left text-black px-4 py-2 hover:bg-[#AD9551]"
                >
                  {lng === "fr" ? "Français" : "English"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <MyButton
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className="p-2"
          >
            {isOpen ? (
              <Icon name="X" className="h-6 w-6" />
            ) : (
              <Icon name="Menu" className="h-6 w-6" />
            )}
          </MyButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#AD9551] transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbarlogo;
