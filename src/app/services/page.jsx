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
        {
            iconName: "Globe",
            title: t("services.strategy.title"),
            description: t("services.strategy.description"),
        },
        {
            iconName: "Users",
            title: t("services.b2b.title"),
            description: t("services.b2b.description"),
        },
        {
            iconName: "Handshake",
            title: t("services.coaching.title"),
            description: t("services.coaching.description"),
        },
        {
            iconName: "Network",
            title: t("services.network.title"),
            description: t("services.network.description"),
        },
        {
            iconName: "Laptop",
            title: t("services.training.title"),
            description: t("services.training.description"),
        }
    ];

    return (
        <main className="pt-10 bg-gray-50 mt-19">
            <section className="py-16 container mx-auto px-6">
                <FadeInOnScroll delay={0.2}>
                    <SectionTitle
                        title={t("pageTitle")}
                        subtitle={t("pageSubtitle")}
                    />
                </FadeInOnScroll>
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {services.slice(0, 3).map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                isOpen={openIndex === index}
                                onToggle={() => toggleCard(index)}
                            />

                        ))}
                    </div>
                    {services.length > 3 && (
                        <div className="flex flex-wrap gap-8 justify-center">
                            {services.slice(3).map((service, index) => (
                                <div className="w-full md:w-1/2 lg:w-1/3" key={index + 3}>
                                    <ServiceCard
                                        {...service}
                                        isOpen={openIndex === index + 3}
                                        onToggle={() => toggleCard(index + 3)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <FadeInOnScrollBottom delay={0.2}>
                        <div className="text-center mt-12 text-gray-700 text-lg">
                            <p>{t("footerNote")}</p>
                        </div>
                    </FadeInOnScrollBottom>
                </div>

                <FadeInOnScrollBottom delay={1}>
                    <ContactPage />
                </FadeInOnScrollBottom>


            </section>
        </main>
    );
};

export default ServicesPage;
