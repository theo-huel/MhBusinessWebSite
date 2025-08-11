'use client';

import TeamCard from '../../components/TeamCard.jsx'
import SectionTitle from '../../components/SectionTitle.jsx'
import { useTranslation } from 'react-i18next';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const FadeInOnScrollLeft = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};







// Page Team
const TeamPage = () => {
    const { t } = useTranslation("team");
    
const members = [
    {
      name: "Huel Matis",
      position: t("team.members.Matis.position"),
      imageSrc: "/img/imgMatis.jpg",
            imageSrcPopup: "/img/imgMatis.jpg",

      description: t("team.members.Matis.description"),
      imageStyle: {
      objectPosition: 'left 15%',
      objectFit: 'cover',
      transform: 'scale(1)',
    },
    },
    {
      name: "Vadala Pietro",
      position: t("team.members.Pietro.position"),
      imageSrc: "/img/imgPietro.jpg",
            imageSrcPopup: "/img/imgPietroGolf.jpg",
      description: t("team.members.Pietro.description"),
      imageStyle: {
      objectPosition: 'left 20%',
      objectFit: 'cover',
      transform: 'scale(1)',
    },
    },
    {
      name: "Huel Théo",
      position: t("team.members.Theo.position"),
      imageSrc: "/img/imgTheo2.jpg",
            imageSrcPopup: "/img/imgTheo.jpg",
      description: t("team.members.Theo.description"),
      imageStyle: {
      objectPosition: 'left 20%',
      objectFit: 'cover',
      transform: 'scale(1)',
    },
    },
    // Ajoutez d'autres membres ici
  ];
  

  return(
  <main className="pt-10 bg-gray-50 mt-19">
    <section className="py-16 container mx-auto px-6">
    <FadeInOnScroll delay={0.2}>
      <SectionTitle
        title= {t("team.equipe.title")}
        subtitle={t("team.equipe.subtitle")}
      />
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
      </div>
      </FadeInOnScroll>
    </section>
  </main>
)
};


export default TeamPage;