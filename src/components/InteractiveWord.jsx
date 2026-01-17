"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const letters = [
  { key: "M", display: "M" },
  { key: "H", display: "H" }, // Index 1
  { key: "B", display: "B" },
  { key: "U", display: "U" },
  { key: "S1", display: "S" },
  { key: "I", display: "I" },
  { key: "N", display: "N" },
  { key: "E", display: "E" },
  { key: "S2", display: "S" },
  { key: "S3", display: "S" },
];

const InteractiveWord = () => {
  const [activeKey, setActiveKey] = useState(null);
  const { t } = useTranslation("interactiveWord");

  const handleSelect = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="flex flex-col items-center w-full mt-8 md:mt-12 px-2">
      
      {/* Conteneur des lettres */}
      <div
        className="flex flex-wrap justify-center items-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800"
        onMouseLeave={() => setActiveKey(null)}
      >
        {letters.map(({ key, display }, index) => {
            // Détermine si c'est la fin du mot "MH" (index 1 = H)
            const isEndOfFirstWord = index === 1;

            return (
              <span
                key={index}
                onMouseEnter={() => setActiveKey(key)}
                onClick={() => handleSelect(key)}
                className={`
                  cursor-pointer transition-all duration-200 select-none
                  py-2
                  ${isEndOfFirstWord ? "mr-6 md:mr-10" : "mr-0.5 md:mr-1"} // L'espace magique est ici
                  ${activeKey === key ? "text-[#AD9551] scale-125" : "hover:scale-110 hover:text-gray-600"}
                `}
              >
                {display}
              </span>
            );
        })}
      </div>

      {/* Boîte de définition */}
      <div className="relative w-full max-w-lg mt-8 px-6 py-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-300 ease-in-out min-h-[100px] flex items-center justify-center">
        
        {/* Petite flèche décorative pointant vers le haut */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />
        
        <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            {activeKey ? (
            <div className="animate-fade-in">
                <strong className="block text-[#AD9551] text-xl mb-1">{t(`${activeKey}.title`)}</strong>
                {t(`${activeKey}.description`)}
            </div>
            ) : (
            <p className="text-gray-400 italic text-sm md:text-base">{t("intro")}</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveWord;