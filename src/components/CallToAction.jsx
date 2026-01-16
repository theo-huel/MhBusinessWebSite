"use client";

import MyButton from './MyButton.jsx';
import { useTranslation } from 'react-i18next';
import { usePathname } from "next/navigation";
import Link from "next/link";

// Composant CallToAction
const CallToAction = ({}) => {
  const { t } = useTranslation("home");
  const pathname = usePathname();

  if (pathname === "/contact" || pathname === "/services") return null;

  return (
    <main className='bg-white w-full'>
      {/* Changements pour le mobile :
         1. mx-4 : Ajoute une petite marge sur les côtés sur mobile pour que le bloc ne touche pas les bords.
         2. md:mx-auto : Sur desktop, on revient au centrage automatique.
         3. my-10 md:my-20 : Marge verticale réduite de moitié sur mobile.
         4. py-12 md:py-20 : Padding interne réduit sur mobile.
      */}
      <section className="bg-[#AD9551] text-white rounded-xl shadow-xl max-w-6xl 
                          mx-4 md:mx-auto 
                          my-10 md:my-20 
                          py-12 md:py-20">
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          {/* Changements pour le texte :
             1. text-2xl : Taille de police plus petite par défaut (mobile).
             2. md:text-4xl : Taille originale sur les écrans moyens et plus.
          */}
          <h2 className="font-extrabold mb-6 md:mb-8 text-2xl md:text-4xl leading-tight">
            {t("calltoaction.h2")}
          </h2>

          {/* Note: Si vous décommentez le paragraphe un jour, pensez aussi à ajuster sa taille */}
          {/* <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8 max-w-3xl mx-auto">
            {t("calltoaction.p")}
          </p> */}

          <div className="flex justify-center">
            <Link href="/services">
              <MyButton variant="secondary">
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

