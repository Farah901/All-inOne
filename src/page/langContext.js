import React, { createContext, useState } from "react";

export const LangContext = createContext();

const homePageText = {
  EN: {
    title: "Welcome to MyApp!",
    text: `Discover a suite of powerful tools designed to enhance your productivity, keep you informed, and entertain you.`,
    apps: [
      {
        name: "Calculator",
        description: "Perform complex calculations with our intuitive calculator app."
      },
      {
        name: "Tasks App",
        description: "Manage your tasks, set deadlines, and track your progress effortlessly."
      },
      {
        name: "Flags & Countries",
        description: "Test your knowledge of world flags and countries."
      },
      {
        name: "Profile Manager",
        description: "Manage and update your profiles quickly and securely."
      }
    ]
  },
  ES: {
    title: "¡Bienvenido a MyApp!",
    text: `Descubre una suite de herramientas poderosas diseñadas para mejorar tu productividad, mantenerte informado y entretenerte.`,
    apps: [
      {
        name: "Calculadora",
        description: "Realiza cálculos complejos fácilmente con nuestra intuitiva aplicación de calculadora."
      },
      {
        name: "Aplicación de Tareas",
        description: "Gestiona tus tareas, establece plazos y realiza un seguimiento de tu progreso sin esfuerzo."
      },
      {
        name: "Banderas y Países",
        description: "Pon a prueba tus conocimientos sobre las banderas y países del mundo."
      },
      {
        name: "Gestor de Perfiles",
        description: "Gestiona y actualiza tus perfiles de manera rápida y segura."
      }
    ]
  },
  FR: {
    title: "Bienvenue sur MyApp!",
    text: `Découvrez une suite d'outils puissants conçus pour améliorer votre productivité, vous tenir informé et vous divertir.`,
    apps: [
      {
        name: "Calculatrice",
        description: "Effectuez facilement des calculs complexes avec notre application de calculatrice intuitive."
      },
      {
        name: "Application de Tâches",
        description: "Gérez vos tâches, définissez des échéances et suivez vos progrès sans effort."
      },
      {
        name: "Drapeaux et Pays",
        description: "Testez vos connaissances des drapeaux et pays du monde."
      },
      {
        name: "Gestionnaire de Profils",
        description: "Gérez et mettez à jour vos profils de manière rapide et sécurisée."
      }
    ]
  }
};

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('EN');
  const { title, text, apps } = homePageText[lang];

  return (
    <LangContext.Provider value={{ setLang, title, text, apps }}>
      {children}
    </LangContext.Provider>
  );
}