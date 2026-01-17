'use client';

import Link from "next/link";
import MyButton from "./MyButton.jsx";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import FadeInOnScrollCitation from "@/components/FadeInOnScrollCitation.jsx";
import FadeInOnScrollBottom from "@/components/FadeInOnScrollBottom.jsx";

const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    // 1. FOND : Légère variation du dégradé (br/tl) pour créer un reflet de lumière luxueux
    <section className="relative bg-gradient-to-br from-[#AD9551] to-[#C4AA5E] text-white py-24 md:py-32 overflow-hidden min-h-[60vh] flex items-center">
      
      {/* 2. TEXTURE : Ajout d'un motif subtil pour éviter l'effet "aplat plat" */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Forme décorative floue pour la profondeur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center items-center text-center">
        
        <FadeInOnScrollCitation delay={0.3}>
          {/* Typographie améliorée : ombrage léger pour la lisibilité sur fond coloré */}
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-8 tracking-tight drop-shadow-sm">
            {t("hero.title")}
          </h1>
        </FadeInOnScrollCitation>

        <FadeInOnScrollBottom delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center w-full max-w-2xl">
            
            <Link href="/services" className="w-full sm:w-auto">
              {/* Bouton Noir : Contraste maximal sur le doré = Très Chic */}
              <MyButton
                variant="black"
                className="w-full sm:w-auto text-base px-8 py-4 shadow-xl border border-black hover:bg-gray-900"
              >
                {t("hero.btn1")}
                <Icon name="ChevronRight" className="inline-block w-5 h-5 ml-2 mb-1" />
              </MyButton>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              {/* Bouton Blanc (Secondary) : Doux et lumineux sur le doré */}
              <MyButton
                variant="secondary"
                className="w-full sm:w-auto text-base px-8 py-4 shadow-xl text-[#AD9551] hover:text-[#8A7641]"
              >
                {t("hero.btn2")}
                <Icon
                  name="Coffee"
                  className="inline-block w-5 h-5 ml-2 mb-1"
                />
              </MyButton>
            </Link>

          </div>
        </FadeInOnScrollBottom>

      </div>
      
      {/* Indicateur de scroll blanc discret */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50">
        <Icon name="ArrowDown" className="w-6 h-6 text-white" />
      </div>

    </section>
  );
};

export default HeroSection;