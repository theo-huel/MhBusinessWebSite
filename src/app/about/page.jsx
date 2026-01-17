"use client";

import InteractiveWord from '../../components/InteractiveWord.jsx';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle.jsx';
import FadeInOnScroll from '@/components/FadeInOnScroll.jsx';
import FadeInOnScrollLeft from '@/components/FadeInOnScrollLeft.jsx';
import ReactMarkdown from 'react-markdown';

export default function AboutPage() {
    const { t } = useTranslation("about");
    const paragraphClass = "text-gray-700 text-base md:text-lg leading-relaxed mb-6";

    return (
        // 1. On garde le main propre (sans pt-24)
        <main className="bg-gray-50 min-h-screen">
            
            {/* 2. C'EST ICI LA CORRECTION : Ajout de 'py-12 md:py-20' 
               Cela ajoute de l'espace en haut et en bas de la section */}
            <section className="py-16 md:py-16 container mx-auto px-4 md:px-6">
                
                <FadeInOnScroll delay={0.1}>
                    <SectionTitle
                        title={t("about.title")}
                        subtitle1={t("about.subtitle1")}
                        subtitle2={t("about.subtitle2")}
                        className="mb-12"
                    />
                </FadeInOnScroll>

                {/* Le reste de ton code ne change pas... */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 md:p-12">
                        
                        <div className="text-center mb-16">
                            <FadeInOnScroll delay={0.2}>
                                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                    {t("about.valeurs.h3")}
                                </h3>
                                <div className="flex justify-center items-center gap-2">
                                    <InteractiveWord />
                                </div>
                            </FadeInOnScroll>
                        </div>

                        <FadeInOnScrollLeft delay={0.2}>
                            <div className="mb-16">
                                <div className="text-center mb-8">
                                    <SectionTitle
                                        title={t("about.mission.h3")}
                                        subtitle={t("about.mission.h2")}
                                        center 
                                    />
                                </div>

                                <div className="prose prose-lg text-gray-700 mx-auto">
                                    <p className={paragraphClass}>{t("about.mission.p1")}</p>
                                    <p className={paragraphClass}>{t("about.mission.pp")}</p>

                                    <div className="my-8 bg-[#AD9551]/5 rounded-xl p-6 border border-[#AD9551]/20">
                                        <div className="text-center font-bold text-[#AD9551] space-y-2 text-lg">
                                            <p>✓ {t("about.mission.pp1")}</p>
                                            <p>✓ {t("about.mission.pp2")}</p>
                                            <p>✓ {t("about.mission.pp3")}</p>
                                        </div>
                                    </div>

                                    <p className={paragraphClass}>{t("about.mission.p2")}</p>
                                </div>
                            </div>
                        </FadeInOnScrollLeft>

                        <hr className="my-12 border-gray-100" />

                        <FadeInOnScrollLeft delay={0.2}>
                            <div className="mb-16">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{t("about.vision.h3")}</h3>
                                    <h2 className="text-lg italic text-[#AD9551]">{t("about.vision.h2")}</h2>
                                </div>

                                <div className="text-gray-700">
                                    <p className={paragraphClass}>{t("about.vision.p1")}</p>
                                    <p className={paragraphClass}>{t("about.vision.p2")}</p>

                                    <div className="text-center font-semibold text-gray-900 my-8 space-y-1">
                                        <p>{t("about.vision.pp1")}</p>
                                        <p>{t("about.vision.pp2")}</p>
                                        <p>{t("about.vision.pp3")}</p>
                                    </div>

                                    <p className={`${paragraphClass} mb-8`}>{t("about.vision.p3")}</p>

                                    <div className="mb-8">
                                        <p className="underline decoration-[#AD9551] decoration-2 font-bold mb-2 offset-4">
                                            {t("about.vision.p4")}
                                        </p>
                                        <p className={paragraphClass}>{t("about.vision.p5")}</p>
                                        <p className={paragraphClass}>{t("about.vision.p6")}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                        <blockquote className="bg-[#AD9551]/10 border-l-4 border-[#AD9551] p-6 rounded-r-lg">
                                            <p className="font-serif italic text-lg mb-4 text-gray-800">
                                                {t("about.vision.p77")}
                                            </p>
                                            <cite className="block text-sm font-bold text-[#AD9551] not-italic">
                                                — Henry Ford
                                            </cite>
                                        </blockquote>

                                        <blockquote className="bg-gray-50 border-l-4 border-gray-800 p-6 rounded-r-lg">
                                            <p className="text-gray-700 font-medium mb-4">
                                                {t("about.vision.p8")}
                                            </p>
                                            <div className="font-serif italic text-gray-600">
                                                {t("about.vision.p80")}
                                            </div>
                                            <cite className="block text-sm font-bold text-gray-900 not-italic mt-2">
                                                — MH Business
                                            </cite>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </FadeInOnScrollLeft>

                        <hr className="my-12 border-gray-100" />

                        <FadeInOnScrollLeft delay={0.2}>
                            <div>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                                    {t("about.parcours.h3")}
                                </h3>

                                <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                                    <p>{t("about.parcours.p1")}</p>
                                    <p>{t("about.parcours.p2")}</p>
                                    
                                    <div className="prose prose-stone max-w-none text-gray-700">
                                        <ReactMarkdown>{t("about.parcours.p3")}</ReactMarkdown>
                                    </div>
                                    
                                    <p>{t("about.parcours.p4")}</p>
                                    
                                    <div className="prose prose-stone max-w-none text-gray-700">
                                        <ReactMarkdown>{t("about.parcours.p5")}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </FadeInOnScrollLeft>

                    </div>
                </div>
            </section>
        </main>
    );
};