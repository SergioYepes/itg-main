import "../../../styles/countries.scss";
import { useState, useEffect, useContext } from "react";

import countriesImg from "../../../assets/img/Mapa.svg";
import countriesImgEurope from "../../../assets/img/MapaEuropa.svg";

import estadosUnidosFlag from "../../../assets/img/estadosUnidosBandera.svg";
import estadosUnidosConector from "../../../assets/img/estadosUnidosConector.svg";
import estadosUnidosConector2 from "../../../assets/img/estadosUnidosConector2.svg";
import UsaFlagMobile from "../../../assets/img/Countries/CountriesMobile/UsaMobile.svg";
import englishFlagUsa from "../../../assets/img/englishFlagUsa.svg";
import UsaConectorMobile from "../../../assets/img/Countries/CountriesMobile/UsaConectorMobile.svg";

import countriesData from "../../../assets/img/Countries/data";

import { FormattedMessage } from "react-intl";
import LanguageContext from "../../../context/language";

export const Countries = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="container_country">
      <div className="container__countries--text">
        <FormattedMessage id="countries-title">
          {(message) => <h2 className="title__country">{message}</h2>}
        </FormattedMessage>
        <FormattedMessage id="counstries-paragraph">
          {(message) => <p className="paragraph__country">{message}</p>}
        </FormattedMessage>
      </div>
      <div className="bigImage__countryContainer">
        <div className="container__image--country">
          <img
            src={countriesImg}
            alt="image_countries"
            loading="lazy"
            className="image__countries"
          />
          <div className="container__country container__country--mobile">
            {countriesData.map((country) => {
              return (
                <div key={country.name}>
                  {!isMobile ? (
                    language === "es" ? (
                      <img
                        src={country.FlagSpanish}
                        alt={`${country.name} flag`}
                        className={`${country.name}Flag`}
                      />
                    ) : (
                      <img
                        src={country.FlagEnglish}
                        alt={`${country.name} flag`}
                        className={`${country.name}Flag`}
                      />
                    )
                  ) : (
                    <img
                      src={country.FlagMobile}
                      alt={`${country.name} flag`}
                      className={`${country.name}FlagMobile`}
                    />
                  )}
                  {!isMobile ? (
                    <img
                      src={country.Conector}
                      alt={`${country.name} connector`}
                      className={`${country.name}Conector`}
                    />
                  ) : (
                    <img
                      src={country.ConectorMobile}
                      alt={`${country.name} connector`}
                      className={`${country.name}ConectorMobile`}
                    />
                  )}
                </div>
              );
            })}
            {!isMobile ? (
              <img
                src={estadosUnidosConector}
                alt="estadosU connector"
                className="estadosConector"
              />
            ) : (
              <img
                src={UsaConectorMobile}
                alt="estadosUnidos Conector"
                className="estadosUnidosConectorMobile"
              />
            )}
            {!isMobile ? (
              language === "es" ? (
                <img
                  src={estadosUnidosFlag}
                  alt="estadosU Flag"
                  className="estadosFlag"
                />
              ) : (
                <img
                  src={englishFlagUsa}
                  alt="estadosU Flag"
                  className="usaFlag"
                />
              )
            ) : (
              <img
                src={UsaFlagMobile}
                alt="estadosUnidos Flag"
                className="estadosUnidosFlagMobile"
              />
            )}
            <img
              src={estadosUnidosConector2}
              alt="estadosU connector"
              className="estadosConector2"
            />
          </div>
        </div>
        <div className="container__image--countryEurope">
          <img
            src={countriesImgEurope}
            alt="image_countries"
            className="image__countriesEurope"
          />
        </div>
      </div>
    </div>
  );
};
