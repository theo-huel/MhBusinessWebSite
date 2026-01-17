"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const logos = [
  { src: '/img/NaeliaNet.svg', alt: 'Logo Client 1', imageWidth: "200", imageHeight: "200", imageScale: "160" },
  { src: '/img/HasanVural.svg', alt: 'Logo Client 2', imageWidth: "200", imageHeight: "200", imageScale: "140" },
    { src: '/img/ItinéraireBis.svg', alt: 'Logo Client 3',imageWidth: "200", imageHeight: "200", imageScale: "140" },
    { src: '/img/Jtoit.jpg', alt: 'Logo Client 4' , imageWidth: "200", imageHeight: "200", imageScale: "140" },
  { src: '/img/logo Degrave.jpg', alt: 'Logo Client 5',imageWidth: "150", imageHeight: "200", imageScale: "100" },
  { src: '/img/imgMegabike.jpg', alt: 'Logo Client 6' ,imageWidth: "100", imageHeight: "200", imageScale: "140" },

];

const ClientsLogos = () => {
        const { t } = useTranslation("clients");

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const spacing = 60;
    const originalLogos = Array.from(track.children);
    let currentWidth = track.offsetWidth;

    // Clone logos jusqu'à ce que la largeur dépasse 2x la fenêtre
    while (currentWidth < window.innerWidth * 2) {
      originalLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
      });
      currentWidth = track.offsetWidth;
    }

    // Animation avec scrollLeft
    let animationFrameId;

    const animate = () => {
      container.scrollLeft += 1;

      // Si un logo est entièrement passé, on le replace à la fin
      const firstLogo = track.firstChild;
      if (
        firstLogo &&
        container.scrollLeft >= firstLogo.offsetWidth + spacing
      ) {
        track.appendChild(firstLogo);
        container.scrollLeft -= firstLogo.offsetWidth + spacing;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-white  py-2 overflow-hidden">
      <h1 className="text-2xl font-bold text-center my-4 ">{t("clients")}</h1>    
      <div
        ref={containerRef}
        className="overflow-hidden"
        style={{ width: '100%' }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: '60px', width: 'max-content' }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-35 flex items-center justify-center overflow-hidden mb-2">

              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.imageWidth}
                height={logo.imageHeight}
                className={`object-contain scale-${logo.imageScale}`}

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsLogos;


/*"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const logos = [
  { src: '/img/nealiaNet.png', alt: 'Logo Client 1' },
  { src: '/img/HVLOGO.jpg', alt: 'Logo Client 2' },
  { src: '/img/logo Degrave.jpg', alt: 'Logo Client 3' },
];

const ClientsLogos = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const spacing = 60;
    const originalLogos = Array.from(track.children);
    let currentWidth = track.offsetWidth;

    // Clone logos jusqu'à ce que la largeur dépasse 2x la fenêtre
    while (currentWidth < window.innerWidth * 2) {
      originalLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
      });
      currentWidth = track.offsetWidth;
    }

    // Animation avec scrollLeft
    let animationFrameId;

    const animate = () => {
      container.scrollLeft += 1;

      // Si un logo est entièrement passé, on le replace à la fin
      const firstLogo = track.firstChild;
      if (
        firstLogo &&
        container.scrollLeft >= firstLogo.offsetWidth + spacing
      ) {
        track.appendChild(firstLogo);
        container.scrollLeft -= firstLogo.offsetWidth + spacing;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-white py-4 overflow-hidden fixed bottom-0 w-full">
      <div
        ref={containerRef}
        className="overflow-hidden"
        style={{ width: '100%' }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: '60px', width: 'max-content' }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-24">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={48}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsLogos;
*/