'use client';

import SectionTitle from '../../components/SectionTitle.jsx';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Briefcase, Calendar, Plane, Target } from "lucide-react"; // Icônes Lucide

// Animations réutilisées
const FadeInOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const features = [
  {
    icon: Plane,
    titleKey: "trip.features.travel.title",
    descKey: "trip.features.travel.desc",
  },
  {
    icon: Users,
    titleKey: "trip.features.network.title",
    descKey: "trip.features.network.desc",
  },
  {
    icon: Briefcase,
    titleKey: "trip.features.business.title",
    descKey: "trip.features.business.desc",
  },
  {
    icon: Calendar,
    titleKey: "trip.features.events.title",
    descKey: "trip.features.events.desc",
  },
  {
    icon: Globe,
    titleKey: "trip.features.international.title",
    descKey: "trip.features.international.desc",
  },
  {
    icon: Target,
    titleKey: "trip.features.strategy.title",
    descKey: "trip.features.strategy.desc",
  },
];

const BusinessTripPage = () => {
  const { t } = useTranslation("businessTrip");

  return (
    <main className="pt-10 bg-gray-50 mt-19">
      <section className="py-16 container mx-auto px-6">
        <FadeInOnScroll delay={0.2}>
          <SectionTitle
            title={t("trip.title")}
            subtitle={t("trip.subtitle")}
          />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <Icon className="w-10 h-10 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {t(feat.titleKey)}
                  </h3>
                  <p className="text-gray-600">{t(feat.descKey)}</p>
                </div>
              );
            })}
          </div>
        </FadeInOnScroll>
      </section>
    </main>
  );
};

export default BusinessTripPage;
