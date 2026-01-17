"use client";

import Link from "next/link";
import Icon from "./Icon.jsx";

const ServiceCardCarrousel = ({ iconName, title, description, href }) => {
  return (
    <Link 
      href={href || "#"} 
      className="group relative block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out h-full flex flex-col"
    >
      {/* En-tête : Icône dans une bulle */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[#AD9551]/10 flex items-center justify-center text-[#AD9551] group-hover:bg-[#AD9551] group-hover:text-white transition-all duration-300">
            <Icon name={iconName} className="w-8 h-8" />
        </div>
      </div>

      {/* Titre */}
      <div className="text-center mb-4 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#AD9551] transition-colors duration-300">
            {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      {/* Bouton "En savoir plus" simulé */}
      <div className="mt-auto flex justify-center">
         <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#AD9551] flex items-center gap-2 transition-colors">
            Découvrir <Icon name="ArrowRight" className="w-4 h-4" />
         </span>
      </div>
    </Link>
  );
};

export default ServiceCardCarrousel;