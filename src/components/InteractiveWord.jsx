"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const letters = [
  { key: "M", display: "M" },
  { key: "H", display: "H" },
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
    setActiveKey((prevKey) => (prevKey === key ? null : key)); // toggle on mobile
  };

  return (
    <div className="flex flex-col items-center space-y-6 mt-12 px-4">
      <div
        className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 whitespace-nowrap"
        onMouseLeave={() => setActiveKey(null)}
      >


        {letters.map(({ key, display }, index) => (
          <span
  key={index}
  onMouseEnter={() => setActiveKey(key)}
  onClick={() => handleSelect(key)}
  className={`mx-1 px-1 py-1 sm:px-2 transition duration-200 cursor-pointer ${
    activeKey === key
      ? "text-[#AD9551] scale-125"
      : "hover:scale-110"
  }`}
>
  {display}
</span>


        ))}
      </div>

      <div className="relative max-w-lg px-6 py-4 bg-white rounded-xl shadow-md text-gray-700 text-center text-lg animate-fade-in transition-opacity duration-300 ease-in-out">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md" />
        {activeKey ? (
          <p>
            <strong>{t(`${activeKey}.title`)}</strong> : {t(`${activeKey}.description`)}
          </p>
        ) : (
          <p>{t("intro")}</p>
        )}
      </div>
    </div>
  );
};

export default InteractiveWord;
