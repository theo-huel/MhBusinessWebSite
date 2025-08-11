"use client"

import { useTranslation } from 'react-i18next';
import { useState } from "react";

const TeamCard = ({ name, position, imageSrc, imageSrcPopup,description, imageStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation("team");


  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        onClick={togglePopup}
        className="cursor-pointer bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
      >
        <img
          src={imageSrc}
          alt={name}
          className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#AD9551]"
        />
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-[#AD9551] text-sm mb-2">{position}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePopup();
          }}
          className="text-sm text-[#AD9551] underline mt-2 hover:text-[#8C7436]"
        >
          {t("team.ensavoirplus")}
        </button>
      </div>

      {isOpen && (
        <div
    className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border rounded-xl p-6 max-w-md w-full relative"
          >
            <button
              onClick={togglePopup}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            {/* Flex row pour séparer image et infos */}
            <div className="flex gap-4 items-start">
              {/* Image à gauche */}
              <img
                src={imageSrcPopup}
                alt={`${name} - image`}
                className="w-40 h-40 rounded-md"
                 style={{
                  ...imageStyle,
                }}
              />

              {/* Infos à droite */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-1">{name}</h3>
                <p className="text-[#AD9551] font-medium">{position}</p>
              </div>
            </div>

            {/* Description en bas, séparée */}
            <p className="text-gray-700 mt-4">{description}</p>
          </div>
             {/* <img 
        src={imageSrc} 
        alt={`${name} - image`} 
          className="w-full h-50 object-contain flex  rounded-md mb-4"
            style={{
          objectPosition: 'center 20%'
            }}      />

            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-[#AD9551] mb-4 font-medium">{position}</p>
            <p className="text-gray-700">{description}</p>
          </div> */}
        </div>
      )}
    </>
  );
};

export default TeamCard;
