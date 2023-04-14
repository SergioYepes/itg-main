import "../../../styles/value.scss";

import { ValueTitle } from "../atoms/ValueTitle";
import { Button } from "../atoms/Button";
import { FormattedMessage } from "react-intl";

import ecommerce from "../../../assets/img/Home_image_n.png";
import ReactMarkdown from "react-markdown";

import LanguageContext from "../../../context/language";
import { useContext } from "react";

export const Value = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="who-we-are" className="value-proposal">
      <div className="container value-proposal__container">
        <div className="value-proposal__copy">
          <ValueTitle />
          <FormattedMessage id="value-partner">
            {(message) => (
              <ReactMarkdown className="value-proposal__paragraph">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <div className="value-proposal__button-group">
            <FormattedMessage id="value-button-know">
              {(message: any) => (
                <Button
                  text={message}
                  href={`${
                    language === "en" ? "company.pdf" : "comercial.pdf"
                  }`}
                  light={false}
                ></Button>
              )}
            </FormattedMessage>

            <FormattedMessage id="value-button-talk">
              {(message: any) => (
                <Button
                  text={message}
                  href="/contact"
                  light={true}
                ></Button>
              )}
            </FormattedMessage>
          </div>
        </div>
      </div>
      <div className="value-proposal__picture">
        <img
          className="value-proposal__picture--img"
          src={ecommerce}
          alt="Ilustración que muestra los servicios de ITGlobers como B2C, B2B, marketplaces, integraciones, evolutivos y capacitaciones"
          width="960"
          height="690"
          loading="lazy"
        />
      </div>
    </div>
  );
};
