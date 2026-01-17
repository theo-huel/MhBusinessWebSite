"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/ServiceCard.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';
import ContactPage from '../contact/page.jsx';
import FadeInOnScroll from '@/components/FadeInOnScroll.jsx';
import FadeInOnScrollBottom from '@/components/FadeInOnScrollBottom.jsx';

const ServicesPage = () => {
    const { t } = useTranslation("services");
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCard = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const services = [
        { iconName: "Map", title: t("services.strategy.title"), description: t("services.strategy.description") },
        { iconName: "TrendingUp", title: t("services.b2b.title"), description: t("services.b2b.description") },
        { iconName: "Handshake", title: t("services.coaching.title"), description: t("services.coaching.description") },
        { iconName: "Share2", title: t("services.network.title"), description: t("services.network.description") },
        { iconName: "GraduationCap", title: t("services.training.title"), description: t("services.training.description") },
        { iconName: "Target", title: t("services.web.title"), description: t("services.web.description") }
    ];

    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Section Services avec fond gris très léger */}
            <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
                
                {/* Titre */}
                <FadeInOnScroll delay={0.1}>
                    <SectionTitle
                        title={t("pageTitle")}
                        subtitle={t("pageSubtitle")}
                    />
                </FadeInOnScroll>

                {/* Grille de cartes */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
                        {services.slice(0, 6).map((service, index) => (
                            // ASTUCE PRO : On met le FadeIn SUR la carte avec un délai calculé (index * 0.1)
                            // Cela crée un effet de cascade (les cartes apparaissent une par une)
                            <FadeInOnScrollBottom key={index} delay={index * 0.1}>
                                <div className="h-full"> {/* h-full assure que toutes les cartes ont la même hauteur */}
                                    <ServiceCard
                                        {...service}
                                        isOpen={openIndex === index}
                                        onToggle={() => toggleCard(index)}
                                    />
                                </div>
                            </FadeInOnScrollBottom>
                        ))}
                    </div>

                    <FadeInOnScroll delay={0.6}>
                        <div className="text-center mt-16 max-w-2xl mx-auto">
                            <p className="text-gray-500 italic text-lg border-l-4 border-[#AD9551] pl-4 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-4">
                                {t("footerNote")}
                            </p>
                        </div>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Section Contact Visuellement Séparée */}
            {/* J'utilise un fond blanc pour casser la monotonie du gris et mettre le contact en valeur */}
            <section className="bg-white border-t border-gray-100">
                 <ContactPage />
            </section>
        </main>
    );
};

export default ServicesPage;