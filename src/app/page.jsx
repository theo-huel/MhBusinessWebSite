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


  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const services = [
    {
      iconName: "Map",
      title: s("services.strategy.title"),
      description: s("services.strategy.description"),
    },
    {
      iconName: "TrendingUp",
      title: s("services.b2b.title"),
      description: s("services.b2b.description"),
    },
    {
      iconName: "Handshake",
      title: s("services.coaching.title"),
      description: s("services.coaching.description"),
    },
    {
      iconName: "Share2",
      title: s("services.network.title"),
      description: s("services.network.description"),
    },
    {
      iconName: "GraduationCap",
      title: s("services.training.title"),
      description: s("services.training.description"),
    },
    {
      iconName: "Target",
      title: s("services.web.title"),
      description: s("services.web.description"),
    }
  ];

  const temoignages = [
    {
      quote: t("testimonials.1.quote"),
      author: t("testimonials.1.author"),
      title: t("testimonials.1.title"),
      imageSrc: "/img/HasanVural.svg",
      imageWidth: "200",
      imageHeight: "200",
      imageScale: "140"
    },
    {
      quote: t("testimonials.2.quote"),
      author: t("testimonials.2.author"),
      title: t("testimonials.2.title"),
      imageSrc: "/img/NaeliaNet.svg",
      imageWidth: "200",
      imageHeight: "200",
      imageScale: "150"
    },
  ];
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

            <div className="relative ml-50 mr-50">
              {/* Boutons navigation */}
              <button
                ref={prevRef}
                className="absolute -left-6 top-1/2 z-10 bg-white text-[#AD9551] text-center p-2 rounded-full shadow hover:scale-110 hover:text-[#AD9551]"
              >
                ◀
              </button>
              <button
                ref={nextRef}
                className="absolute -right-6 top-1/2 z-10 bg-white text-[#AD9551] text-center p-2 rounded-full shadow hover:scale-110 hover:text-[#AD9551]"
              >
                ▶
              </button>

              <Swiper
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                spaceBetween={2}
                slidesPerView={1.2}
                breakpoints={{
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3 } // 3 slides visibles = gauche / centre / droite
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="!overflow-hidden"

              >
                {services.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <SwiperSlide key={index} >
                      <div
                        className={`transition-all duration-300 ease-in-out ${isActive
                          ? "scale-105 opacity-100"
                          : "scale-90 opacity-50"
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
              <div className="text-center mt-12">
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

      {/* Section Témoignages */}
      <section className="py-16 bg-white">
        <FadeInOnScrollBottom delay={0.2}>
          <div className="container mx-auto px-6">
            <SectionTitle
              title={t("testimonials.title")}
              subtitle={t("testimonials.subtitle")}
            />

            <div className="relative ml-50 mr-50">
              <button
                ref={prevRef}
                className="absolute -left-6 top-1/2 z-10 bg-[#AD9551] text-white text-center p-2 rounded-full shadow hover:bg-white hover:text-[#AD9551]"
              >
                ◀
              </button>
              <button
                ref={nextRef}
                className="absolute -right-6 top-1/2 z-10 bg-[#AD9551] text-white text-center p-2 rounded-full shadow hover:bg-white hover:text-[#AD9551]"
              >
                ▶
              </button>

              <Swiper
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                spaceBetween={2}
                slidesPerView={1.2}
                breakpoints={{
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3 } // 3 slides visibles = gauche / centre / droite
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="!overflow-hidden"

              >
                {temoignages.map((temoignage, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <SwiperSlide key={index} >
                      <div
                        className={`transition-all duration-300 ease-in-out ${isActive
                          ? "scale-105 opacity-100"
                          : "scale-90 opacity-50"
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
              <div className="text-center mt-12">
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


      {/* Témoignages */}
      {/* <section className="py-16 bg-white">
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
              </div>

            </div>
          </div>
        </FadeInOnScroll>
      </section> */}
    </main>
  );
};
