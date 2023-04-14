import { useContext } from "react";
import { useRef } from "react";
import { allmessages } from "../../../Messages/Messages";
import LanguageContext from "../../../context/language";
//import '../../../styles/languaje.scss'

export const Languaje = () => {
  const { handleLanguage, language } = useContext(LanguageContext);

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
  };

  return (
    <div className="container__translate">
      <div className="select" onClick={toggleOptions}>
        <div className="selected-box">
          <div className="options-container" ref={menuRef}>
            <form onChange={handleLanguageOptions}>
              <div className="option">
                <input
                  type="radio"
                  name="language"
                  className="radio"
                  id="es"
                  value="es"
                />
                <label htmlFor="es" className="spanish_value">
                  {messages[0]}
                </label>
              </div>

              <div className="option">
                <input
                  type="radio"
                  name="language"
                  className="radio"
                  id="en"
                  value="en"
                />
                <label htmlFor="en" className="english_value">
                  {messages[1]}
                </label>
              </div>
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
