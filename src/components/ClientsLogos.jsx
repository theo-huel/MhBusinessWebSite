"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const logos = [
  { src: '/img/NaeliaNet.svg', alt: 'Logo Client 1', imageWidth: "200", imageHeight: "200", imageScale: "160" },
  { src: '/img/HasanVural.svg', alt: 'Logo Client 2', imageWidth: "200", imageHeight: "200", imageScale: "140" },
  { src: '/img/ItinéraireBis.svg', alt: 'Logo Client 3', imageWidth: "200", imageHeight: "200", imageScale: "140" },
  { src: '/img/JToit.png', alt: 'Logo Client 4', imageWidth: "200", imageHeight: "200", imageScale: "140" },
  { src: '/img/logo Degrave.jpg', alt: 'Logo Client 5', imageWidth: "150", imageHeight: "200", imageScale: "100" },
  { src: '/img/imgMegabike.jpg', alt: 'Logo Client 6', imageWidth: "100", imageHeight: "200", imageScale: "140" },
];

const ClientsLogos = () => {
  const { t } = useTranslation("clients");

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isHovered = useRef(false); // Ref pour gérer la pause

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const spacing = 60; // Ton espacement serré
    const originalLogos = Array.from(track.children);
    let currentWidth = track.offsetWidth;

    // Clone logos jusqu'à ce que la largeur dépasse 2x la fenêtre
    while (currentWidth < window.innerWidth * 2) {
      originalLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        // Important : on garde les classes d'interaction sur les clones
        track.appendChild(clone);
      });
      currentWidth = track.offsetWidth;
    }

    // Animation avec scrollLeft
    let animationFrameId;

    const animate = () => {
      // On ne bouge que si la souris n'est pas dessus
      if (!isHovered.current) {
        container.scrollLeft += 1; // Ta vitesse exacte
      }

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
    // Ajout de py-12 pour donner de l'air (plus premium que py-2)
    <div className="bg-white py-12 overflow-hidden border-t border-gray-50">
      
      <div className="container mx-auto px-4 mb-12 text-center">
        {/* Titre élégant */}
        <h1 className="text-[#AD9551] font-bold tracking-[0.2em] uppercase text-sm mb-3">
          {t("clients") || "ILS NOUS FONT CONFIANCE"}
        </h1>
        <div className="w-12 h-0.5 bg-gray-200 mx-auto rounded-full"></div>
      </div>

      <div 
        className="relative w-full"
        onMouseEnter={() => isHovered.current = true}
        onMouseLeave={() => isHovered.current = false}
      >
        {/* 1. EFFET PREMIUM : Dégradés sur les côtés (Fade in/out) */}
        {/* Cela donne l'impression que les logos sortent du vide */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          className="overflow-hidden"
          style={{ width: '100%' }}
        >
          <div
            ref={trackRef}
            className="flex items-center" // Ajout de items-center pour alignement vertical parfait
            style={{ gap: '60px', width: 'max-content' }}
          >
            {logos.map((logo, index) => (
              <div 
                key={index} 
                // 2. EFFET "SORTIR DU LOT" : Interaction au survol
                // hover:scale-110 = grossit légèrement
                // drop-shadow = ajoute une ombre portée pour le détacher du fond
                className="flex-shrink-0 w-35 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-lg cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={parseInt(logo.imageWidth)}
                  height={parseInt(logo.imageHeight)}
                  className={`object-contain`}
                  // On applique ton scale personnalisé via le style pour être précis
                  style={{ transform: `scale(${parseInt(logo.imageScale) / 100})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogos;

// const ClientsLogos = () => {
//   const { t } = useTranslation("clients");

//   // On duplique les logos pour créer l'illusion de boucle infinie (x2 suffit souvent, x3 pour être sûr sur les grands écrans)
//   const logosRepeated = [...logos, ...logos, ...logos];

//   return (
//     <>
//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); } /* On déplace de la moitié car on a doublé le contenu */
//         }
//         .animate-scroll {
//           animation: scroll 40s linear infinite;
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused; /* Pause au survol */
//         }
//       `}</style>

//       <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
//         <div className="container mx-auto px-4 mb-10 text-center">
//             {/* Petit titre élégant style "Agence" */}
//             <h3 className="text-[#AD9551] font-bold tracking-[0.2em] uppercase text-sm mb-2">
//                 {t("clients") || "ILS NOUS FONT CONFIANCE"}
//             </h3>
//             <div className="w-12 h-0.5 bg-gray-200 mx-auto rounded-full"></div>
//         </div>

//         <div className="relative w-full max-w-[1600px] mx-auto group">
          
//           {/* 1. Dégradés latéraux (Fades) pour adoucir les bords */}
//           <div className="absolute left-0 top-0 z-10 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
//           <div className="absolute right-0 top-0 z-10 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />

//           {/* 2. Piste de défilement */}
//           <div className="flex items-center w-max animate-scroll">
//             {logosRepeated.map((logo, index) => (
//               <div 
//                 key={index} 
//                 className="relative w-[150px] md:w-[200px] h-24 mx-4 md:mx-8 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110"
//               >
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   width={150}
//                   height={80}
//                   className="object-contain max-h-16 md:max-h-20 w-auto"
//                   // On utilise style pour l'échelle spécifique de chaque logo si besoin
//                   style={{ transform: `scale(${logo.scale})` }} 
//                 />
//               </div>
//             ))}
//           </div>
          
//         </div>
//       </section>
//     </>
//   );
// };

// export default ClientsLogos;





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