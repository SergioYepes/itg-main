import { useContext, useEffect } from "react";

import { Home } from "../pages/Home";
import { IntlProvider } from "react-intl";
import LanguageContext from "../../context/language";
import { allmessages } from "../../Messages/Messages";
import { Header } from "../templates/Header";
import { Footer } from "../UI/organisms/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/ContactUs";
import { PolicyData } from "../pages/PolicyData";
import WorkWithUS from "../pages/WorkWithUS";

export const Translation = () => {
  const { language } = useContext(LanguageContext);
  const message: any = allmessages;

  useEffect(() => {}, [language]);

  return (
    <IntlProvider locale={language} messages={message[language]}>
      <Header />
      <Routes>
        <Route path="/policy" element={<PolicyData />} />
        <Route path="/work" element={<WorkWithUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </IntlProvider>
  );
};
