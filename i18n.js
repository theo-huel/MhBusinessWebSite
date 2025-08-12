// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEn from './locales/en/home.json';
import teamEn from './locales/en/team.json';
import aboutEn from './locales/en/about.json';
import servicesEn from './locales/en/services.json';
import contactEn from './locales/en/contact.json';
import navbarEn from './locales/en/navbar.json';
import interactiveEn from './locales/en/interactiveWord.json';
import clientsEn from './locales/en/clients.json';





import homeFr from './locales/fr/home.json';
import teamFr from './locales/fr/team.json';
import aboutFr from './locales/fr/about.json';
import servicesFr from './locales/fr/services.json';
import contactFr from './locales/fr/contact.json';
import navbarFr from './locales/fr/navbar.json';
import interactiveFr from './locales/fr/interactiveWord.json';
import clientsFr from './locales/fr/clients.json';
import businessTripFr from './locales/fr/businessTrip.json';









i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { home: homeEn, 
        team:teamEn,
        about:aboutEn,
        services:servicesEn,
        contact:contactEn,
        navbar:navbarEn,
        interactiveWord:interactiveEn,
        clients:clientsEn,


      },
      fr: { home: homeFr, 
        team:teamFr, about:aboutFr, 
        services:servicesFr, 
        contact:contactFr,
        navbar:navbarFr,
        interactiveWord:interactiveFr,
        clients:clientsFr,
        businessTrip:businessTripFr


      },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
