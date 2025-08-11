'use client';
import Link from "next/link";
import MyButton from "./MyButton.jsx";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import FadeInOnScroll from "@/components/FadeInOnScroll.jsx";

const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className="relative bg-gradient-to-r from-[#AD9551] to-[#AD9551] text-white py-24 md:py-32 overflow-hidden">

      {/* Contenu centré */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center text-center min-h-[10vh]">
        <FadeInOnScroll delay={0.3}>
          <h2 className="text-2xl md:text-4xl leading-tight mb-6 animate-slide-in-left">
            {t("hero.title")}
          </h2>
        </FadeInOnScroll>


        <FadeInOnScroll delay={0.3}>
          <div className="flex gap-4 mt-4">
            <Link href="/services">
              <MyButton variant="black">
                {t("hero.btn1")}
                <Icon name="ChevronRight" className="inline-block w-5 h-5 mb-1" />
              </MyButton>
            </Link>

            <Link href="/contact">
              <MyButton variant="secondary">
                {t("hero.btn2")}
                <Icon
                  name="Coffee"
                  className="inline-block w-5 h-5 ml-2 mb-1"
                />
              </MyButton>
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default HeroSection;
