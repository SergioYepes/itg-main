import { useContext } from "react";
import { useRef, useEffect, useState } from "react";
import { allmessages } from "../../../Messages/Messages";
import LanguageContext from "../../../context/language";

export const Language = () => {
  const { handleLanguage, language } = useContext(LanguageContext);
  const [changeHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const messages = Object.keys(allmessages);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    if (menuRef.current) {
      const classList = menuRef.current.classList;
      classList.toggle("active");
    }
  };

  const handleLanguageOptions = (e: any) => {
    handleLanguage(e);
    if (menuRef.current) {
      const classList = menuRef.current.classList;
      classList.toggle("active");
    }
    const deactivateNavBar = document.querySelector('.menu__navigation--active');
    deactivateNavBar?.classList.remove("menu__navigation--active")
  };

  return (
    <div
      className={
        changeHeader ? "container__translate" : "container__translate--modified"
      }
    >
      <div className="select" onClick={toggleOptions}>
        <div className="selected-box">
          <div className="options-container" ref={menuRef}>
            <form onChange={handleLanguageOptions}>
              {
                language === "en" ?
                  <div className="option">
                    <input
                      type="radio"
                      name="language"
                      className="radio"
                      id="es"
                      value="es"
                      onClick={handleLanguageOptions}
                    />
                    <label htmlFor="es" className="spanish_value">
                      {messages[0]}
                    </label>
                  </div> :
                  <div className="option">
                    <input
                      type="radio"
                      name="language"
                      className="radio"
                      id="en"
                      value="en"
                      onClick={handleLanguageOptions}
                    />
                    <label htmlFor="en" className="english_value">
                      {messages[1]}
                    </label>
                  </div>
              }
            </form>
          </div>
          <div className="selected">
            {language === "es" ? (
              <p className="spanish_value">{messages[0]}</p>
            ) : (
              <p className="english_value">{messages[1]}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
