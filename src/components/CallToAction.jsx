"use client";

import MyButton from './MyButton.jsx';
import { useTranslation } from 'react-i18next';
import { usePathname } from "next/navigation";
import Link from "next/link";

const CallToAction = ({}) => {
  const { t } = useTranslation("home");
  const pathname = usePathname();

  if (pathname === "/contact" || pathname === "/services") return null;

  return (
    // CORRECTION :
    // 1. bg-white : Fond blanc forcé sur toute la largeur.
    // 2. py-10 md:py-20 : On utilise du PADDING (remplissage) au lieu de margin. 
    //    Le blanc va donc remplir l'espace en haut et en bas.
    <div className='bg-white w-full py-10 md:py-20'>
      
      <section className="bg-[#AD9551] text-white border border-[#AD9551] rounded-xl shadow-lg 
                          max-w-6xl mx-4 md:mx-auto 
                          py-8 md:py-16"> 
                          {/* J'ai aussi légèrement ajusté le padding interne de la carte */}
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          
          <h2 className="font-extrabold mb-6 md:mb-8 text-2xl md:text-4xl leading-tight">
            {t("calltoaction.h2")}
          </h2>

          <div className="flex justify-center">
            <Link href="/services">
              <MyButton variant="secondary" className="text-base px-8 py-4 shadow-xl text-[#AD9551] hover:text-[#8A7641]"> 
                {t("hero.btn2")}
              </MyButton>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CallToAction;
