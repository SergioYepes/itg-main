import { useEffect, useState } from "react";

import { Translate } from "../UI/molecules/Translate";
import { FormattedMessage } from "react-intl";
import formImg from "../../assets/img/formImg.png";
import Form from "../UI/molecules/Form";

import "../../styles/contact.scss";

const Contact = () => {
  const [changeBottom, setChangeBottom] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1240);

  const getContactInfoSize = () => {
    const contactInfoHeight= document.getElementById("contactInfo")?.clientHeight;
    return contactInfoHeight;
  }

  const contentDesktop = changeBottom ? "content" : "content-hidden";

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1240);
    }
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setChangeBottom(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, prevScrollPos]);

  return (
    <div className="contact-cont">
      <Translate />
      <div className="contact-imgCont">
        <div className="contact__form--and--image">
          <section className="contact__section" id="contactInfo">
            <div className={ `contact__inner ${contentDesktop}` }>
              <FormattedMessage id="contact-level">
                {(message) => <h1 className="contact-level-title">{message}</h1>}
              </FormattedMessage>
              <div className="container__image">
                <img
                  className="form--image"
                  src={formImg}
                  alt="imagen de fondo"
                />
                <div className="circulo"></div>
                <span className="contact-comunicate">
                  <FormattedMessage id="contact-comunicate">
                    {(message) => <h1>{message}</h1>}
                  </FormattedMessage>
                </span>
              </div>
            </div>
          </section>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default Contact;
