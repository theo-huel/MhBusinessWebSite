'use client';

import React, { useState, useEffect } from "react";
import MyButton from "./MyButton.jsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";
import Icon from "../components/Icon.jsx";
import { usePathname } from "next/navigation";

const Navbarlogo = ({ logoSrc = null }) => {
  const { t } = useTranslation("navbar");
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: t("home.name"), href: "/" },
    { name: t("about.name"), href: "/about" },
    { name: t("services.name"), href: "/services" },
    { name: t("contact.name"), href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* --- BARRE DE NAVIGATION --- */}
      <nav 
        className={`fixed w-full z-50 top-0 transition-all duration-300 
        /* ICI : La bordure dorée en haut qui ajoute la couleur */
        border-t-[6px] border-t-[#AD9551] border-b
        ${
          scrolled || isOpen 
            ? "bg-white/95 backdrop-blur-md shadow-md border-b-gray-100" 
            : "bg-white/90 backdrop-blur-sm border-b-transparent"
        }`}
      >
        {/* Hauteur réduite à 70px/80px pour remonter le contenu */}
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-center justify-between h-[70px] md:h-[80px]">
          
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center cursor-pointer z-50 relative shrink-0">
            <Image
              src={logoSrc || "/img/MHBusiness.svg"}
              alt="Logo MH Business"
              width={140}
              height={55}
              className="w-24 md:w-32 h-auto object-contain"
              priority
            />
          </Link>

          {/* 2. DESKTOP NAVIGATION */}
          <div className="hidden md:flex flex-grow justify-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 relative group py-6 ${
                  isActive(item.href) ? "text-[#AD9551] font-bold" : "text-gray-700 hover:text-[#AD9551]"
                }`}
              >
                {item.name}
                {/* Soulignement animé */}
                <span className={`absolute bottom-0 left-0 h-[3px] bg-[#AD9551] transition-all duration-300 group-hover:w-full ${isActive(item.href) ? "w-full" : "w-0"}`}></span>
              </Link>
            ))}
          </div>

          {/* 3. ACTIONS */}
          <div className="flex items-center gap-3 z-50 relative shrink-0">
            <div className="relative">
              <MyButton
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                variant="outline"
                className="p-1.5 md:p-2 flex items-center gap-2 border-gray-200 hover:border-[#AD9551] transition-colors rounded-full h-10"
              >
                <Icon name="Globe" className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                <span className="text-xs font-semibold text-gray-700 uppercase hidden sm:inline">{i18n.language}</span>
              </MyButton>
              {/* Dropdown Langue */}
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {["fr", "en"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => { i18n.changeLanguage(lng); setShowLangDropdown(false); }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${i18n.language === lng ? "text-[#AD9551] font-bold" : "text-gray-600"}`}
                    >
                      {lng === "fr" ? "Français" : "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Burger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-800 hover:text-[#AD9551] transition-colors">
                 <Icon name={isOpen ? "X" : "Menu"} className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CALE INVISIBLE AJUSTÉE À LA NOUVELLE HAUTEUR */}
      <div className="h-[74px] md:h-[84px] w-full bg-transparent"></div>

      {/* MENU MOBILE */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <div className="flex flex-col space-y-8 text-center w-full px-8">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`text-3xl font-bold ${isActive(item.href) ? "text-[#AD9551]" : "text-gray-800"}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbarlogo;