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
    // S'assure que le conteneur principal est bien blanc
    <main className='bg-white w-full'>
      
      {/* Changements de style :
         1. bg-white : Le fond de la carte devient blanc.
         2. border border-[#AD9551] : On ajoute une bordure dorée fine.
         3. text-[#AD9551] : Le texte devient doré.
      */}
      <section className="bg-white text-[#AD9551] border border-[#AD9551] rounded-xl shadow-lg 
                          max-w-6xl mx-4 md:mx-auto 
                          my-10 md:my-20 
                          py-12 md:py-20">
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          
          <h2 className="font-extrabold mb-6 md:mb-8 text-2xl md:text-4xl leading-tight">
            {t("calltoaction.h2")}
          </h2>

          <div className="flex justify-center">
            <Link href="/services">
              {/* Note: Ici, il faudra peut-être changer 'variant' si votre bouton secondaire
                 est blanc sur blanc. On veut probablement un bouton plein (doré) ici.
              */}
              <MyButton variant="primary"> 
                {t("hero.btn2")}
              </MyButton>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default CallToAction;
