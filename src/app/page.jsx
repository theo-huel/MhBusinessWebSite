'use client';

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Composants
import HeroSection from '../components/HeroSection.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCardCarrousel from '../components/ServiceCardCarrousel.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import MyButton from "../components/MyButton.jsx";
import Icon from '../components/Icon.jsx';
import FadeInOnScroll from "@/components/FadeInOnScroll.jsx";
import FadeInOnScrollBottom from "@/components/FadeInOnScrollBottom.jsx";

export default function Home() {
  const { t } = useTranslation("home");
  const { t: s } = useTranslation("services");
  const { t: a } = useTranslation("about");

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const prevRefServices = useRef(null);
  const nextRefServices = useRef(null);
  const prevRefTestimonials = useRef(null);
  const nextRefTestimonials = useRef(null);

  // --- NOUVELLE LISTE DES SERVICES (4 Piliers) ---
  // On utilise .short pour la description du carrousel
  const servicesBase = [
    { 
      iconName: "Map", 
      title: s("services.strategy.title"), 
      description: s("services.strategy.short") 
    },
    { 
      iconName: "TrendingUp", 
      title: s("services.commercial.title"), 
      description: s("services.commercial.short") 
    },
    { 
      iconName: "Share2", 
      title: s("services.network.title"), 
      description: s("services.network.short") 
    },
    { 
      iconName: "Target", 
      title: s("services.marketing.title"), 
      description: s("services.marketing.short") 
    }
  ];

  // Duplication pour assurer un loop fluide sur le carrousel (4 items c'est limite pour 3 slides visibles)
  const services = [...servicesBase, ...servicesBase];

  const temoignagesBase = [
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
  const temoignages = [...temoignagesBase, ...temoignagesBase, ...temoignagesBase];

  const navBtnClass = "hidden md:flex absolute top-1/2 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 text-gray-400 hover:text-[#AD9551] hover:border-[#AD9551] transition-all duration-300 cursor-pointer hover:scale-110";

  return (
    <main className="pb-10 overflow-hidden bg-white w-full"> 
      
      <HeroSection />

      {/* --- Section À Propos --- */}
      <section className="py-16 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#AD9551]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <FadeInOnScrollBottom delay={0.2}>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <SectionTitle
              title={a("about.title")}
              subtitle1={a("about.subtitle1")}
              subtitle2={a("about.subtitle2")}
            />
            
            <FadeInOnScroll delay={0.4}>
              <Link href="/about">
                <MyButton variant="primary" className="mt-8 shadow-xl shadow-[#AD9551]/20">
                  {t("about.button")} <Icon name="ChevronRight" className="inline-block w-5 h-5 mb-1" />
                </MyButton>
              </Link>
            </FadeInOnScroll>
          </div>
        </FadeInOnScrollBottom>
      </section>

      {/* --- Section Services --- */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
            <FadeInOnScroll delay={0.1}>
                <SectionTitle
                    title={s("pageTitle")}
                    subtitle={s("pageSubtitle")}
                    className="mb-16"
                />
            </FadeInOnScroll>

            <div className="relative max-w-[1400px] mx-auto">
              
              <button ref={prevRefServices} className={`${navBtnClass} -left-4 lg:-left-10`} aria-label="Précédent">
                <Icon name="ChevronLeft" className="w-6 h-6" />
              </button>
              <button ref={nextRefServices} className={`${navBtnClass} -right-4 lg:-right-10`} aria-label="Suivant">
                <Icon name="ChevronRight" className="w-6 h-6" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1.1, spaceBetween: 15 },
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                  1280: { slidesPerView: 3.5, spaceBetween: 30 }
                }}
                onSlideChange={(swiper) => setActiveServiceIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefServices.current;
                  swiper.params.navigation.nextEl = nextRefServices.current;
                }}
                className="!overflow-hidden py-10 px-4 -mx-4" 
              >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className="h-auto">
                      <div className="h-full py-2 px-1">
                        <ServiceCardCarrousel
                          iconName={service.iconName}
                          title={service.title}
                          description={service.description}
                          href="/services"
                        />
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="text-center mt-8">
                <Link href="/services">
                  <span className="inline-flex items-center text-gray-500 hover:text-[#AD9551] transition-colors font-medium border-b border-transparent hover:border-[#AD9551] pb-1 cursor-pointer">
                    Voir tous nos services <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                  </span>
                </Link>
            </div>
        </div>
      </section>

      {/* --- Section Témoignages --- */}
      <section className="py-16 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
            <FadeInOnScroll delay={0.1}>
                <SectionTitle
                    title={t("testimonials.title")}
                    subtitle={t("testimonials.subtitle")}
                    className="mb-16"
                />
            </FadeInOnScroll>

            <div className="relative max-w-6xl mx-auto">
              
              <button ref={prevRefTestimonials} className={`${navBtnClass} -left-4 lg:-left-16 bg-[#AD9551] text-white border-none hover:bg-black hover:text-white`} aria-label="Précédent">
                <Icon name="ChevronLeft" className="w-6 h-6" />
              </button>
              <button ref={nextRefTestimonials} className={`${navBtnClass} -right-4 lg:-right-16 bg-[#AD9551] text-white border-none hover:bg-black hover:text-white`} aria-label="Suivant">
                <Icon name="ChevronRight" className="w-6 h-6" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                spaceBetween={30}
                centeredSlides={true}
                breakpoints={{
                  0: { slidesPerView: 1.1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 40 }
                }}
                onSlideChange={(swiper) => setActiveTestimonialIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefTestimonials.current;
                  swiper.params.navigation.nextEl = nextRefTestimonials.current;
                }}
                className="!overflow-hidden py-10 px-4 -mx-4"
              >
                {temoignages.map((temoignage, index) => {
                  const isActive = index % temoignagesBase.length === activeTestimonialIndex % temoignagesBase.length;
                  return (
                    <SwiperSlide key={index} className="h-auto">
                      <div className={`transition-all duration-500 h-full ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}>
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
        </div>
      </section>
    </main>
  );
};