'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import MonBouton from '../components/MyButton.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Icon from '../components/Icon.jsx';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import FadeInOnScroll from "@/components/FadeInOnScroll.jsx";
import FadeInOnScrollBottom from "@/components/FadeInOnScrollBottom.jsx";
import MyButton from "../components/MyButton.jsx";

export default function Home() {
  const { t } = useTranslation("home");
  const { t: s } = useTranslation("services");
  const { t: a } = useTranslation("about");


  return (
    <main className="pt-20 mt-19">
      {/* <FadeInOnScroll delay={0.1}> */}
        <HeroSection />
      {/* </FadeInOnScroll> */}


      {/* Section À Propos */}
      <section className="py-16 bg-gray-50">
        <FadeInOnScrollBottom delay={0.2}>

        <div className="container mx-auto px-6 text-center">
            <SectionTitle
              title={a("about.title")}
              subtitle1={a("about.subtitle1")}
              subtitle2={a("about.subtitle2")}
            />
             {/* <div className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              <ReactMarkdown>{t("about.text")}</ReactMarkdown>
            </div> */}

           

          <FadeInOnScroll delay={0.2}>
            <Link href="/about">
              <MyButton variant="primary">
                {t("about.button")} <Icon name="ChevronRight" className="inline-block w-5 h-5 mb-1" />
              </MyButton>
            </Link>
          </FadeInOnScroll>
        </div>
                  </FadeInOnScrollBottom>


      </section>

      {/* Section Services */}
      <section className="py-16 bg-white">
        <FadeInOnScrollBottom delay={0.2}>

          <div className="container mx-auto px-6">
              <SectionTitle
                title={s("pageTitle")}
                subtitle={s("pageSubtitle")}
                className="transition-transform transform hover:scale-105"
              />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <ServiceCard
                iconName="Globe"
                title={s("services.strategy.title")}
                description={s("services.strategy.description")}
                href="/services"
              />
              <ServiceCard
                iconName="Users"
                title={s("services.b2b.title")}
                description={s("services.b2b.description")}
                href="/services"
              />
              <ServiceCard
                iconName="Handshake"
                title={s("services.coaching.title")}
                description={s("services.admin.description")}
                href="/services"
              />
            </div>

            <FadeInOnScrollBottom delay={0.2}>
              <div className="text-center mt-12">
                <Link href="/about">
                  <MyButton variant="primary">
                    {t("about.button")} <Icon name="ChevronRight" className="inline-block w-5 h-5 ml-2 mb-1" />
                  </MyButton>
                </Link>
              </div>
            </FadeInOnScrollBottom>
          </div>
        </FadeInOnScrollBottom>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <FadeInOnScroll delay={0.2}>
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t("testimonials.title")}
              subtitle={t("testimonials.subtitle")}
            />
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 items-start">
                <FadeInOnScroll delay={0.2}>
                  <TestimonialCard
                    quote={t("testimonials.1.quote")}
                    author={t("testimonials.1.author")}
                    title={t("testimonials.1.title")}
                    imageSrc="/img/HasanVural.svg"
                    imageWidth="200"
                    imageHeight="200"
                    imageScale="140"
                    
                    />               
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <TestimonialCard
                    quote={t("testimonials.2.quote")}
                    author={t("testimonials.2.author")}
                    title={t("testimonials.2.title")}
                    imageSrc="/img/NaeliaNet.svg"
                    imageWidth="100"
                    imageHeight="100"
                    imageScale="150"
                    
                    />               
                </FadeInOnScroll>
                {/* <TestimonialCard
              quote={t("testimonials.2.quote")}
              author={t("testimonials.2.author")}
              title={t("testimonials.2.title")}
              imageSrc="https://placehold.co/96x96/FFFFFF/AD9551?text=ML"
            />
            <TestimonialCard
              quote={t("testimonials.3.quote")}
              author={t("testimonials.3.author")}
              title={t("testimonials.3.title")}
              imageSrc="https://placehold.co/96x96/AD9551/00000?text=CV"
            /> */}
              </div>

            </div>
          </div>
        </FadeInOnScroll>
      </section>
    </main>
  );
};
