"use client";

import InteractiveWord from '../../components/InteractiveWord.jsx';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle.jsx';
import FadeInOnScroll from '@/components/FadeInOnScroll.jsx';
import FadeInOnScrollLeft from '@/components/FadeInOnScrollLeft.jsx';
import FadeInOnScrollBottom from '@/components/FadeInOnScrollBottom.jsx';
import ReactMarkdown from 'react-markdown';
import Icon from '../../components/Icon.jsx'; // Assure-toi d'avoir ce composant ou remplace par une icône SVG directe

export default function AboutPage() {
    const { t } = useTranslation("about");
    
    // Style de paragraphe unifié pour la consistance
    const paragraphClass = "text-gray-600 text-lg leading-relaxed mb-6 font-light";

    return (
        <main className="bg-gray-50 min-h-screen">
            
            {/* --- EN-TÊTE DE PAGE --- */}
            <section className="pt-20 pb-12 md:pt-32 md:pb-20 container mx-auto px-4 md:px-6">
                <FadeInOnScroll delay={0.1}>
                    <SectionTitle
                        title={t("about.title")}
                        subtitle1={t("about.subtitle1")}
                        subtitle2={t("about.subtitle2")}
                        className="mb-12"
                    />
                </FadeInOnScroll>
            </section>

            {/* --- CONTENU PRINCIPAL DANS UNE CARTE FLOTTANTE --- */}
            {/* On utilise max-w-5xl pour un peu plus de largeur de lecture confortable */}
            <div className="container mx-auto px-4 md:px-6 pb-24">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    
                    {/* Le padding est augmenté pour donner un aspect luxueux */}
                    <div className="p-8 md:p-16 space-y-24">
                        
                        {/* 1. SECTION VALEURS (Interactive) */}
                        <section className="text-center">
                            <FadeInOnScroll delay={0.2}>
                                <div className="inline-block p-3 rounded-full bg-[#AD9551]/10 text-[#AD9551] mb-6">
                                     {/* Petite icône décorative (étoile ou coeur) */}
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                    {t("about.valeurs.h3")}
                                </h3>
                                <div className="flex justify-center items-center">
                                    <InteractiveWord />
                                </div>
                            </FadeInOnScroll>
                        </section>

                        {/* Séparateur élégant */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                        {/* 2. SECTION MISSION */}
                        <section>
                            <FadeInOnScrollLeft delay={0.2}>
                                <div className="text-center mb-10">
                                    <span className="text-[#AD9551] font-bold tracking-widest uppercase text-sm mb-2 block">Notre Mission</span>
                                    <h3 className="text-3xl font-extrabold text-gray-900">{t("about.mission.h3")}</h3>
                                    <p className="text-xl text-gray-500 italic mt-2 font-serif">{t("about.mission.h2")}</p>
                                </div>

                                <div className="prose prose-lg text-gray-600 mx-auto max-w-3xl text-center md:text-left">
                                    <p className={paragraphClass}>{t("about.mission.p1")}</p>
                                    <p className={paragraphClass}>{t("about.mission.pp")}</p>

                                    {/* Checklist modernisée en grille */}
                                    <div className="my-10 bg-gradient-to-br from-[#AD9551]/5 to-white rounded-2xl p-8 border border-[#AD9551]/10 shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                            {[t("about.mission.pp1"), t("about.mission.pp2"), t("about.mission.pp3")].map((item, idx) => (
                                                <div key={idx} className="flex flex-col items-center">
                                                    <div className="w-10 h-10 rounded-full bg-[#AD9551] text-white flex items-center justify-center mb-3 text-lg font-bold">✓</div>
                                                    <span className="font-semibold text-gray-800">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <p className={paragraphClass}>{t("about.mission.p2")}</p>
                                </div>
                            </FadeInOnScrollLeft>
                        </section>

                        {/* Séparateur élégant */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                        {/* 3. SECTION VISION */}
                        <section>
                            <FadeInOnScrollLeft delay={0.2}>
                                <div className="text-center mb-10">
                                    <span className="text-[#AD9551] font-bold tracking-widest uppercase text-sm mb-2 block">Notre Vision</span>
                                    <h3 className="text-3xl font-extrabold text-gray-900">{t("about.vision.h3")}</h3>
                                    <p className="text-xl text-gray-500 italic mt-2 font-serif">{t("about.vision.h2")}</p>
                                </div>

                                <div className="text-gray-600 max-w-3xl mx-auto">
                                    <p className={paragraphClass}>{t("about.vision.p1")}</p>
                                    <p className={paragraphClass}>{t("about.vision.p2")}</p>

                                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 font-semibold text-gray-800 my-10 text-center">
                                        <p>✨ {t("about.vision.pp1")}</p>
                                        <p>🚀 {t("about.vision.pp2")}</p>
                                        <p>🤝 {t("about.vision.pp3")}</p>
                                    </div>

                                    <p className={paragraphClass}>{t("about.vision.p3")}</p>

                                    <div className="bg-gray-50 p-6 rounded-xl mb-10 border-l-4 border-[#AD9551]">
                                        <p className="text-[#AD9551] font-bold text-lg mb-2">
                                            {t("about.vision.p4")}
                                        </p>
                                        <p className="text-gray-600">{t("about.vision.p5")}</p>
                                        <p className="text-gray-600 mt-2">{t("about.vision.p6")}</p>
                                    </div>

                                    {/* Citations Design Premium */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                        {/* Citation 1 */}
                                        <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                            <div className="absolute top-4 left-4 text-6xl text-[#AD9551]/20 font-serif">"</div>
                                            <p className="font-serif italic text-lg mb-6 text-gray-800 relative z-10 pt-4">
                                                {t("about.vision.p77")}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">HF</div>
                                                <cite className="text-sm font-bold text-[#AD9551] not-italic uppercase tracking-wide">
                                                    Henry Ford
                                                </cite>
                                            </div>
                                        </div>

                                        {/* Citation 2 */}
                                        <div className="relative bg-[#2C2C2C] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
                                            <div className="absolute top-4 left-4 text-6xl text-white/10 font-serif">"</div>
                                            <p className="font-medium mb-2 relative z-10 pt-4 text-white/90">
                                                {t("about.vision.p8")}
                                            </p>
                                            <p className="font-serif italic text-white/70 mb-6 text-sm">
                                                {t("about.vision.p80")}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#AD9551] flex items-center justify-center text-white font-bold">MH</div>
                                                <cite className="text-sm font-bold text-[#AD9551] not-italic uppercase tracking-wide">
                                                    MH Business
                                                </cite>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInOnScrollLeft>
                        </section>

                        {/* Séparateur élégant */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                        {/* 4. SECTION PARCOURS */}
                        <section>
                            <FadeInOnScrollBottom delay={0.2}>
                                <div className="text-center mb-10">
                                    <span className="text-[#AD9551] font-bold tracking-widest uppercase text-sm mb-2 block">L'Histoire</span>
                                    <h3 className="text-3xl font-extrabold text-gray-900">
                                        {t("about.parcours.h3")}
                                    </h3>
                                </div>

                                <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed text-justify md:text-left">
                                    <p>{t("about.parcours.p1")}</p>
                                    <p>{t("about.parcours.p2")}</p>
                                    
                                    <div className="prose prose-lg prose-stone max-w-none text-gray-600">
                                        <ReactMarkdown>{t("about.parcours.p3")}</ReactMarkdown>
                                    </div>
                                    
                                    <p>{t("about.parcours.p4")}</p>
                                    
                                    <div className="prose prose-lg prose-stone max-w-none text-gray-600 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <ReactMarkdown>{t("about.parcours.p5")}</ReactMarkdown>
                                    </div>
                                </div>
                            </FadeInOnScrollBottom>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
};