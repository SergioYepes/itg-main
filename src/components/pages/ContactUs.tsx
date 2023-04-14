import { Translate } from "../UI/molecules/Translate";
import { FormattedMessage } from "react-intl";
import formImg from "../../assets/img/formImg.png";
import Form from "../UI/molecules/Form";

import "../../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact-cont">
      <Translate />
      <div className="contact-imgCont">
        <FormattedMessage id="contact-level">
          {(message) => <h1 className="contact-level-title">{message}</h1>}
        </FormattedMessage>
        <div className="contact__form--and--image">
          <section>
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
          </section>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default Contact;
