import { FormattedMessage } from "react-intl";
import { useState, useEffect, useContext } from "react";
import LanguageContext from "../../../context/language";


export const PolicyMenu = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { language } = useContext(LanguageContext);
  const [activeMobile, setActiveMobile] = useState("");
  const [finalPosition, setFinalPosition] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 767);
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth < 1240);
  const [isMobileHeight, setIsMobileHeight] = useState<boolean>(window.innerHeight < 868);
  const [isTabletHeight, setIsTabletHeight] = useState<boolean>(window.innerHeight < 1200);

  const [display, setDisplay] = useState(false);
  const options = [
    "Introduction",
    "Definition",
    "Values",
    "Treatment",
    "Duties",
    "Rights",
    "ResponsableArea",
    "TitularProcedure",
    "Update",
  ];
  const optionsEnMob = [
    "Introduction",
    "Definition",
    "Values",
    "Processing to which personal data will be subject",
    "Duties of IT GLOBERS regarding the processing of personal data",
    "Rights of data subjects",
    "Area responsible for handling requests, inquiries, and complaints",
    "Procedure for the exercise of data subjects' rights",
    "Validity, modifications and updates",
  ];
  const optionsEsMob = [
    "Introduccion",
    "Definicion",
    "Principios",
    "Tratamiento al cual serán sometidos los datos personales",
    "Deberes de IT Globers frente altratamiento de datos personales",
    "Derechos de los títulares",
    "Área responsable de la atención de peticiones, consultas y reclamos",
    "Procedimiento para el ejercicio de los derechos de los titulares",
    "Vigencia, modificaciones y actualizaciones",
  ];


  const toggleOptions = (index: number) => {
    setActiveButton(index === activeButton ? null : index);
    setActiveMobile(language === "en" ? optionsEnMob[index] : optionsEsMob[index]);
    setDisplay(!display);
  };

  const handleClick = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 767);
      setIsTablet(window.innerHeight < 1240);
      setIsMobileHeight(window.innerHeight < 868);
      setIsTabletHeight(window.innerHeight < 1200);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  useEffect(() => {
    const policyContainer = document.querySelector(
      ".policy-Big"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = policyContainer?.scrollTop + 90;
      const optionsElements = document.querySelectorAll(".policyMenuOption");


      optionsElements.forEach((option, index) => {
        const section = document.querySelector(
          `#${options[index]}`
        ) as HTMLElement;
        const top = section?.offsetTop;
        const bottom = top + section?.offsetHeight;
        const scrollable = policyContainer.scrollHeight - window.innerHeight


        if (isTablet && isTabletHeight && scrollPosition >= scrollable - 400) {
          setActiveButton(options.length - 1);
          setActiveMobile(language === "en" ? optionsEnMob[options.length - 1] : optionsEsMob[options.length - 1]);
          setFinalPosition(true)

        }
        else if (isMobile && isMobileHeight && scrollPosition >= scrollable - 250) {
          setActiveButton(options.length - 1);
          setActiveMobile(language === "en" ? optionsEnMob[options.length - 1] : optionsEsMob[options.length - 1]);
          setFinalPosition(true)
        }
        else if (isMobile && scrollPosition >= scrollable - 200) {
          setActiveButton(options.length - 1);
          setActiveMobile(language === "en" ? optionsEnMob[options.length - 1] : optionsEsMob[options.length - 1]);
          setFinalPosition(true)
        }

        else if (scrollPosition >= scrollable - 150) {
          setActiveButton(options.length - 1);
          setActiveMobile(language === "en" ? optionsEnMob[options.length - 1] : optionsEsMob[options.length - 1]);
          setFinalPosition(true)
        }
        else if (
          scrollPosition &&
          top &&
          bottom &&
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          setActiveButton(index);
          setActiveMobile(language === "en" ? optionsEnMob[index] : optionsEsMob[index]);
          setFinalPosition(true)
        }

      });

    };

    if (policyContainer) {
      policyContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (policyContainer) {
        policyContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeButton]);
  return (
    <div className="policyCont">
      <div className="policyMenuContDesktop">
        {options.map((option, index) => (
          <a
            href={`#${option}`}
            className={`policyMenuOption ${activeButton === index ? "active" : ""
              }`}
            onClick={() => toggleOptions(index)}
            key={index}
          >
            <FormattedMessage id={`policy-${option}-title`}>
              {(message) => <h2 className="policyMenu-Title">{message}</h2>}
            </FormattedMessage>
          </a>
        ))}
      </div>

      <div className={finalPosition ? "policyMenuMobileFinal" : "policyMenuContMobile"}>
        <div className="dropdown-button" onClick={handleClick}>
          {activeMobile || "Select"}
        </div>
        {display && (
          <ul className="policyList">
            {options.map((option, index) => (
              <li
                key={index}
                className={`policyListOptions ${activeButton === index ? "active" : ""
                  }`}
                onClick={() => toggleOptions(index)}
              >
                <a href={`#${option}`}>
                  <FormattedMessage id={`policy-${option}-mobile`}>
                    {(message) => (
                      <h2 className="policyMenu-Title">{`${message}`}</h2>
                    )}
                  </FormattedMessage>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
