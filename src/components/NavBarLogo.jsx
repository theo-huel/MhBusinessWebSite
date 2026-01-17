"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Assurez-vous d'avoir configuré next/image
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

// Si vous avez un composant Icon, importez-le, sinon j'utilise des SVG inline ci-dessous
// import Icon from './Icon'; 

const Navbar = () => {
  const { t } = useTranslation("common"); // Ou 'home' selon votre config
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Effet pour détecter le scroll et ajouter l'effet "Glassmorphism"
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effet pour bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  // Liste des liens (à adapter selon vos pages)
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50" onClick={closeMenu}>
           {/* Remplacez src par votre chemin de logo réel */}
           {/* J'utilise du texte stylisé temporairement si vous n'avez pas l'image sous la main */}
           <div className="flex flex-col items-center leading-none">
             <span className="text-3xl font-serif font-bold text-black">MH</span>
             <span className="text-[0.6rem] tracking-widest text-[#AD9551] uppercase">Business</span>
           </div>
        </Link>

        {/* NAVIGATION DESKTOP (Cachée sur mobile) */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide hover:text-[#AD9551] transition-colors ${
                pathname === link.href ? "text-[#AD9551]" : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Bouton Langue Desktop */}
          <button className="border border-[#AD9551] rounded-full p-2 hover:bg-[#AD9551] hover:text-white transition-colors">
            <GlobeIcon className="w-5 h-5" />
          </button>
        </nav>

        {/* CONTROLES MOBILE (Globe + Burger) */}
        <div className="flex items-center gap-4 md:hidden z-50">
          
          {/* Bouton Langue Mobile */}
          <button className="border border-[#AD9551] text-[#AD9551] rounded-full p-2">
            <GlobeIcon className="w-5 h-5" />
          </button>

          {/* Bouton Hamburger Animé */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="border border-[#AD9551] text-[#AD9551] rounded-full p-2 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* MENU MOBILE OVERLAY */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: '0', height: '100dvh' }} // 100dvh gère mieux les barres de navigateurs mobiles
        >
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={closeMenu}
                className={`text-2xl font-serif font-bold ${
                  pathname === link.href ? "text-[#AD9551]" : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Bouton d'action dans le menu mobile (optionnel) */}
            <Link href="/contact" onClick={closeMenu} className="mt-8">
               <span className="px-8 py-3 bg-[#AD9551] text-white rounded-full font-medium">
                 Discutons-en
               </span>
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
};

// Petit composant Icone Globe pour l'exemple
const GlobeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918" />
  </svg>
);

export default Navbar;

