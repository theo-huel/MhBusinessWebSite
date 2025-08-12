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
    <section className="relative bg-gradient-to-r from-[#AD9551] to-[#AD9551] text-white py-24 md:py-25 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center text-center min-h-[10vh]">
        
        <FadeInOnScrollCitation delay={0.3}>
          <h2 className="text-3xl md:text-4xl leading-tight mb-6 animate-slide-in-left">
            {t("hero.title")}
          </h2>
        </FadeInOnScrollCitation>

        <FadeInOnScrollBottom delay={0.2}>
          <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
            <Link href="/services" className="w-4/4 md:w-auto">
              <MyButton
                variant="black"
                className="w-full md:w-auto text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
              >
                {t("hero.btn1")}
                <Icon name="ChevronRight" className="inline-block w-5 h-5 mb-1" />
              </MyButton>
            </Link>

            <Link href="/contact" className="w-4/4 md:w-auto">
              <MyButton
                variant="secondary"
                className="w-full md:w-auto text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
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
    </section>
  );
};

export default HeroSection;
