"use client";
import InteractiveWord from '../../components/InteractiveWord.jsx'
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle.jsx'
import FadeInOnScroll from '@/components/FadeInOnScroll.jsx';
import FadeInOnScrollLeft from '@/components/FadeInOnScrollLeft.jsx';
import ReactMarkdown from 'react-markdown'


// Page À Propos
export default function AboutPage() {
    const { t } = useTranslation("about");

    return (
        <main className="pt-10 bg-gray-50 mt-19">
            <section className="py-16 container mx-auto px-6">
                <FadeInOnScroll delay={0.1}>
                    <SectionTitle
                        title={t("about.title")}
                        subtitle1={t("about.subtitle1")}
                        subtitle2={t("about.subtitle2")}
                    />
                </FadeInOnScroll>

                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <div className="flex-1 text-center md:text-center mb-20">
                        <FadeInOnScroll delay={0.4}>
                            <h3 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">{t("about.valeurs.h3")}</h3>
                            <InteractiveWord />
                        </FadeInOnScroll>

                    </div>
                                                                                        <FadeInOnScrollLeft delay={0.2}>

                    <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-20 px-6 md:px-0 max-w-5xl mx-auto">
                        {/* Image éventuellement à remettre plus tard */}
                        {/* <img
    src="https://placehold.co/200x200/white/[#AD9551]?text=Votre+Photo"
    alt="Photo du consultant MH Business"
    className="w-48 h-48 rounded-full object-cover mb-8 md:mb-0 md:mr-12 border-4 border-[#AD9551]"
    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/AD9452/AD9452?text=Votre+Photo"; }}
  /> */}




                        {/* SECTION MISSION */}

                        <div className="flex-1 text-center md:text-center">
                            <SectionTitle
                        title={t("about.mission.h3")}
                        subtitle={t("about.mission.h2")}
                    />
                                {/* <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{t("about.mission.h3")}</h3>
                                <h2 className="text-xl italic text-gray-600 mb-8">{t("about.mission.h2")}</h2> */}

                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
                                    <p>{t("about.mission.p1")}</p>
                                  <p>{t("about.mission.pp")}</p>
                               
                                    <div className="text-center font-bold">
                                        <p>{t("about.mission.pp1")}</p>
                                        <p>{t("about.mission.pp2")}</p>
                                        <p>{t("about.mission.pp3")}</p>
                                    </div>
                               <p>{t("about.mission.p2")}</p>
                            
                            </div>
                        </div>
                    </div>
                                                                </FadeInOnScrollLeft>




                    {/* SECTION VISION */}
                                            <FadeInOnScrollLeft delay={0.2}>
                    <div className="flex-1 text-center md:text-center">
                            <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{t("about.vision.h3")}</h3>
                            <h2 className="text-xl italic text-gray-600 mb-8">{t("about.vision.h2")}</h2>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
                            <p>{t("about.vision.p1")}</p>
                                <p>{t("about.vision.p2")}</p>
                            
                                <div className="text-center font-bold">
                                    <p>{t("about.vision.pp1")}</p>
                                    <p>{t("about.vision.pp2")}</p>
                                    <p>{t("about.vision.pp3")}</p>
                                </div>
                                <p className="mb-10">{t("about.vision.p3")}</p>
                            
                                <p className="underline font-bold mb-2">{t("about.vision.p4")}</p>
                                <p className="mb-10">{t("about.vision.p5")}</p>
                           

                                <p>{t("about.vision.p6")}</p>
                                <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
                                    <p className="font-semibold italic mb-2" style={{ fontFamily: 'Times, serif' }}>{t("about.vision.p77")}</p>
                                    <p>Henry Ford</p>
                                </div>
                                <p className="text-gray-700 text-lg font-medium text-center mb-2">{t("about.vision.p8")}</p>
                                <div className="bg-[rgba(173,149,81,0.5)] border-l-4 border-[#AD9551] p-4 rounded-md md:text-left">
                                    <p className="font-semibold italic mb-2" style={{ fontFamily: 'Times, serif' }}>{t("about.vision.p80")}</p>
                                    <p>MH Business</p>
                                </div>

                        </div>

                    </div>
                                            </FadeInOnScrollLeft>

                                            <FadeInOnScrollLeft delay={0.2}>

                    {/* SECTION MON PARCOURS */}
                    <div className="flex-1 text-center md:text-center mt-20">
                            <h3 className="text-4xl font-extrabold text-gray-900 mb-8">{t("about.parcours.h3")}</h3>
                        
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed ">
                                <p>{t("about.parcours.p1")}</p>
                                <p>{t("about.parcours.p2")}</p>
                                <ReactMarkdown>{t("about.parcours.p3")}</ReactMarkdown>
                                <p>{t("about.parcours.p4")}</p>
                                <ReactMarkdown>{t("about.parcours.p5")}</ReactMarkdown>
                        </div>
                    </div>
                                                                </FadeInOnScrollLeft>

                </div>
            </section>
        </main>
    )
};
