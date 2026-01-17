"use client";

import Link from "next/link";
import Icon from "./Icon.jsx";

const ServiceCard = ({ iconName, title, shortDescription, details, isOpen, onToggle, onClick, href }) => {
  
  // Contenu interne de la carte
  const content = (
    <div className="flex flex-col h-full relative z-10">
      {/* En-tête : Icône dans une bulle dorée légère */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-[#AD9551]/10 flex items-center justify-center text-[#AD9551] group-hover:bg-[#AD9551] group-hover:text-white transition-all duration-300 ease-in-out">
            <Icon name={iconName} className="w-10 h-10" />
        </div>
      </div>

      {/* Titre */}
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#AD9551] transition-colors duration-300">
            {title}
        </h3>
      </div>

      {/* Description Courte (Toujours visible) */}
      <div className="text-center mb-4 flex-grow">
        <p className="text-gray-600 font-medium leading-relaxed">
            {shortDescription}
        </p>
      </div>

      {/* Description Détaillée (Accordéon au clic) */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-4 border-t border-gray-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm md:text-base whitespace-pre-line leading-relaxed text-left pl-4 border-l-2 border-[#AD9551]/30">
          {details}
        </p>
      </div>

      {/* Indicateur visuel (Flèche) */}
      <div className="mt-6 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
         <div className={`p-2 rounded-full border border-gray-200 transition-transform duration-300 ${isOpen ? "rotate-180 bg-gray-50 text-[#AD9551]" : "rotate-0 group-hover:border-[#AD9551] group-hover:text-[#AD9551]"}`}>
            <Icon name="ChevronDown" className="w-5 h-5" />
         </div>
      </div>
    </div>
  );

  // Classes de base pour le conteneur
  const baseClasses = `
    group relative bg-white rounded-2xl p-8 
    border border-gray-100 shadow-sm hover:shadow-xl 
    transition-all duration-300 ease-out 
    cursor-pointer overflow-hidden h-full flex flex-col
    hover:-translate-y-1 hover:border-[#AD9551]/30
  `;

  if (href) {
    return (
      <Link href={href} aria-label={title} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick || onToggle} className={baseClasses} role="button" tabIndex={0}>
      {content}
    </div>
  );
};

export default ServiceCard;