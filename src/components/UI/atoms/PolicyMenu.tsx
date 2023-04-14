import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

export const PolicyMenu = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const [activeMobile, setActiveMobile] = useState("");
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

  const toggleOptions = (index: number) => {
    setActiveButton(index === activeButton ? null : index);
    setActiveMobile(options[index]);
    setDisplay(!display);
  };

  const handleClick = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const policyContainer = document.querySelector(
      ".policy-Big"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = policyContainer?.scrollTop;
      const optionsElements = document.querySelectorAll(".policyMenuOption");

      optionsElements.forEach((option, index) => {
        const section = document.querySelector(
          `#${options[index]}`
        ) as HTMLElement;
        const top = section?.offsetTop;
        const bottom = top + section?.offsetHeight;

        if (
          scrollPosition &&
          top &&
          bottom &&
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          setActiveButton(index);
          setActiveMobile(options[index]);
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
            className={`policyMenuOption ${
              activeButton === index ? "active" : ""
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

      <div className="policyMenuContMobile">
        <div className={`dropdown-button`} onClick={handleClick}>
          {activeMobile || "Select"}
        </div>
        {display && (
          <ul className="policyList">
            {options.map((option, index) => (
              <li
                key={index}
                className={`policyListOptions ${
                  activeButton === index ? "active" : ""
                }`}
                onClick={() => toggleOptions(index)}
              >
                <a href={`#${option}`}>
                  <FormattedMessage id={`policy-${option}-title`}>
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
