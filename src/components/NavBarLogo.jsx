
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
  const pathname = usePathname(); // Pour savoir sur quelle page on est

  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détection du scroll pour ajouter une ombre seulement quand on descend
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
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

  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => pathname === path;

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          
          {/* --- 1. LOGO --- */}
          <Link href="/" className="flex items-center cursor-pointer z-50 relative">
            <Image
              src={logoSrc || "/img/MHBusiness.svg"}
              alt="Logo MH Business"
              width={140} // Un peu plus petit pour mobile par défaut
              height={55}
              className="w-32 md:w-[150px] h-auto object-contain" // Responsive width
              priority
            />
          </Link>

          {/* --- 2. DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex flex-grow justify-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 relative group ${
                  isActive(item.href) ? "text-[#AD9551]" : "text-gray-700 hover:text-[#AD9551]"
                }`}
              >
                {item.name}
                {/* Petit soulignement animé au survol */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AD9551] transition-all duration-300 group-hover:w-full ${isActive(item.href) ? "w-full" : ""}`}></span>
              </Link>
            ))}
          </div>

          {/* --- 3. ACTIONS (LANGUE + HAMBURGER) --- */}
          <div className="flex items-center gap-3 z-50 relative">
            
            {/* Sélecteur de langue */}
            <div className="relative">
              <MyButton
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                variant="outline"
                className="p-2 flex items-center gap-2 border-gray-200 hover:border-[#AD9551] transition-colors"
                aria-label="Changer de langue"
              >
                <Icon name="Globe" className="w-5 h-5 text-gray-700" />
                <span className="text-xs font-semibold text-gray-700 uppercase">{i18n.language}</span>
              </MyButton>

              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {["fr", "en"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => {
                        i18n.changeLanguage(lng);
                        setShowLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${i18n.language === lng ? "text-[#AD9551] font-bold" : "text-gray-600"}`}
                    >
                      {lng === "fr" ? "Français" : "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MyButton
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost" // 'ghost' ou 'outline' selon votre composant, ici j'enlève la bordure pour le style
                className="p-2 text-gray-800 focus:outline-none"
                aria-label="Menu"
              >
                 {/* Animation simple de l'icône */}
                 <div className="transition-transform duration-300">
                    {isOpen ? (
                      <Icon name="X" className="h-7 w-7 text-[#AD9551]" />
                    ) : (
                      <Icon name="Menu" className="h-7 w-7" />
                    )}
                 </div>
              </MyButton>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 4. MOBILE MENU FULLSCREEN OVERLAY --- */}
      {/* On sort le menu de la balise nav pour qu'il prenne tout l'écran.
         On utilise une translation Y pour le faire descendre du haut.
      */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: '0', paddingTop: '80px' }} // Laisse la place pour le header fixe
      >
        <div className="flex flex-col space-y-8 text-center w-full px-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold transition-all duration-300 ${
                isActive(item.href) ? "text-[#AD9551]" : "text-gray-800 hover:text-[#AD9551]"
              }`}
              // Petit délai pour une animation en cascade sympa
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="w-16 h-1 bg-[#AD9551] mx-auto rounded-full mt-8 opacity-50"></div>
          
          <p className="text-gray-400 text-sm mt-4">
             MH Business <br/> Excellence & Stratégie
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbarlogo;
