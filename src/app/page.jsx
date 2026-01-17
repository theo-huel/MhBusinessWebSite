'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import MonBouton from '../components/MyButton.jsx';
import ServiceCardCarrousel from '../components/ServiceCardCarrousel.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Icon from '../components/Icon.jsx';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import FadeInOnScroll from "@/components/FadeInOnScroll.jsx";
import FadeInOnScrollBottom from "@/components/FadeInOnScrollBottom.jsx";
import MyButton from "../components/MyButton.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useRef } from 'react';

export default function Home() {
  const { t } = useTranslation("home");
  const { t: s } = useTranslation("services");
  const { t: a } = useTranslation("about");

  // --- ÉTATS SÉPARÉS POUR CHAQUE CARROUSEL ---
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Refs pour Services
  const prevRefServices = useRef(null);
  const nextRefServices = useRef(null);

  // Refs pour Témoignages
  const prevRefTestimonials = useRef(null);
  const nextRefTestimonials = useRef(null);

  const services = [
    { iconName: "Map", title: s("services.strategy.title"), description: s("services.strategy.description") },
    { iconName: "TrendingUp", title: s("services.b2b.title"), description: s("services.b2b.description") },
    { iconName: "Handshake", title: s("services.coaching.title"), description: s("services.coaching.description") },
    { iconName: "Share2", title: s("services.network.title"), description: s("services.network.description") },
    { iconName: "GraduationCap", title: s("services.training.title"), description: s("services.training.description") },
    { iconName: "Target", title: s("services.web.title"), description: s("services.web.description") }
  ];

  const temoignages = [
    {
      quote: t("testimonials.1.quote"),
      author: t("testimonials.1.author"),
      title: t("testimonials.1.title"),
      imageSrc: "/img/HasanVural.svg",
      imageWidth: "200", imageHeight: "200", imageScale: "140"
    },
    {
      quote: t("testimonials.2.quote"),
      author: t("testimonials.2.author"),
      title: t("testimonials.2.title"),
      imageSrc: "/img/NaeliaNet.svg",
      imageWidth: "200", imageHeight: "200", imageScale: "150"
    },
  ];

  return (
    // Ajout de pb-10 pour éviter que le footer colle trop
      <main>      
      <HeroSection />

      {/* --- Section À Propos --- */}
      <section className="py-12 md:py-16 bg-gray-50">
        <FadeInOnScrollBottom delay={0.2}>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <SectionTitle
              title={a("about.title")}
              subtitle1={a("about.subtitle1")}
              subtitle2={a("about.subtitle2")}
            />
            
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

      {/* --- Section Services --- */}
      <section className="py-12 md:py-20 bg-white">
        <FadeInOnScrollBottom delay={0.2}>
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={s("pageTitle")}
              subtitle={s("pageSubtitle")}
              className="transition-transform transform hover:scale-105 mb-8 md:mb-12"
            />

            {/* Conteneur Carrousel Responsive */}
            <div className="relative max-w-7xl mx-auto">
              
              {/* Boutons navigation (Cachés sur mobile "hidden", visibles sur tablette/desktop "md:block") */}
              <button
                ref={prevRefServices}
                className="hidden md:block absolute -left-4 lg:-left-12 top-1/2 z-10 -translate-y-1/2 bg-white text-[#AD9551] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#AD9551] hover:text-white transition-all"
                aria-label="Previous Service"
              >
                ◀
              </button>
              <button
                ref={nextRefServices}
                className="hidden md:block absolute -right-4 lg:-right-12 top-1/2 z-10 -translate-y-1/2 bg-white text-[#AD9551] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#AD9551] hover:text-white transition-all"
                aria-label="Next Service"
              >
                ▶
              </button>

              <Swiper
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                spaceBetween={20} // Espace un peu plus aéré
                // Configuration Responsive
                breakpoints={{
                  0: { slidesPerView: 1.1, spaceBetween: 15 }, // Mobile : on voit un peu le suivant pour inciter au swipe
                  640: { slidesPerView: 2, spaceBetween: 20 }, // Tablette
                  1024: { slidesPerView: 3, spaceBetween: 30 } // Desktop
                }}
                onSlideChange={(swiper) => setActiveServiceIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefServices.current;
                  swiper.params.navigation.nextEl = nextRefServices.current;
                }}
                className="!overflow-visible md:!overflow-hidden py-4" // overflow-visible sur mobile permet de ne pas couper les ombres
              >
                {services.map((service, index) => {
                  const isActive = index === activeServiceIndex;
                  return (
                    <SwiperSlide key={index} className="h-full">
                      <div
                        className={`transition-all duration-500 ease-out h-full ${
                          isActive ? "scale-100 opacity-100" : "scale-95 opacity-60 blur-[1px]"
                        }`}
                      >
                        <ServiceCardCarrousel
                          iconName={service.iconName}
                          title={service.title}
                          description={service.description}
                          href="/services"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <FadeInOnScrollBottom delay={0.2}>
              <div className="text-center mt-10 md:mt-16">
                <Link href="/services">
                  <MyButton variant="primary">
                    {t("about.button")}
                    <Icon name="ChevronRight" className="inline-block w-5 h-5 ml-2 mb-1" />
                  </MyButton>
                </Link>
              </div>
            </FadeInOnScrollBottom>
          </div>
        </FadeInOnScrollBottom>
      </section>

      {/* --- Section Témoignages --- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <FadeInOnScrollBottom delay={0.2}>
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t("testimonials.title")}
              subtitle={t("testimonials.subtitle")}
              className="mb-8 md:mb-12"
            />

            <div className="relative max-w-7xl mx-auto">
              
              {/* Boutons navigation spécifiques aux témoignages */}
              <button
                ref={prevRefTestimonials}
                className="hidden md:block absolute -left-4 lg:-left-12 top-1/2 z-10 -translate-y-1/2 bg-[#AD9551] text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-[#AD9551] border border-[#AD9551] transition-all"
                aria-label="Previous Testimonial"
              >
                ◀
              </button>
              <button
                ref={nextRefTestimonials}
                className="hidden md:block absolute -right-4 lg:-right-12 top-1/2 z-10 -translate-y-1/2 bg-[#AD9551] text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-[#AD9551] border border-[#AD9551] transition-all"
                aria-label="Next Testimonial"
              >
                ▶
              </button>

              <Swiper
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1.1, spaceBetween: 15 },
                  640: { slidesPerView: 1.5, spaceBetween: 20 }, // Un peu plus large pour les témoignages
                  1024: { slidesPerView: 3, spaceBetween: 30 }
                }}
                onSlideChange={(swiper) => setActiveTestimonialIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefTestimonials.current;
                  swiper.params.navigation.nextEl = nextRefTestimonials.current;
                }}
                className="!overflow-visible md:!overflow-hidden py-4"
              >
                {temoignages.map((temoignage, index) => {
                  const isActive = index === activeTestimonialIndex;
                  return (
                    <SwiperSlide key={index} className="h-full">
                      <div
                        className={`transition-all duration-500 ease-out h-full ${
                          isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
                        }`}
                      >
                        <TestimonialCard
                          quote={temoignage.quote}
                          author={temoignage.author}
                          title={temoignage.title}
                          imageSrc={temoignage.imageSrc}
                          imageWidth={temoignage.imageWidth}
                          imageHeight={temoignage.imageHeight}
                          imageScale={temoignage.imageScale}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <FadeInOnScrollBottom delay={0.2}>
              <div className="text-center mt-10 md:mt-16">
                <Link href="/about">
                  <MyButton variant="primary">
                    {t("about.button")}
                    <Icon name="ChevronRight" className="inline-block w-5 h-5 ml-2 mb-1" />
                  </MyButton>
                </Link>
              </div>
            </FadeInOnScrollBottom>
          </div>
        </FadeInOnScrollBottom>
      </section>
    </main>
  );
};