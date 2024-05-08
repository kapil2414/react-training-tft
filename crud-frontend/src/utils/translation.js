import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        contactUs: 'Contact Us',
        login: 'Login',
        logout: 'Log Out',
        profile: 'Profile',
        changeLanguage: 'Change Language',
        logIntoSeeProfile: "Login to see profile",
        about: "About",
        employeeSection: "Employee Section",
      },
    },
    he: {
      translation: {
        home: "होम",
        contactUs: `संपर्क करें`,
        login: `लॉग इन करें`,
        logout: `लॉग आउट`,
        profile: `प्रोफ़ाइल`,
        changeLanguage: `भाषा बदलें`,
        logIntoSeeProfile: `प्रोफ़ाइल देखने के लिए लॉगिन करें`,
        employeeSection: "कर्मचारी खंड",
        about: "के बारे में",
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;