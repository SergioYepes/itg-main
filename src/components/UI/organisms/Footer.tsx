import "../../../styles/footer.scss";
import itglogo from "../../../assets/img/itglobersLogo.svg";
import { FormattedMessage } from "react-intl";
import logoLinkedin from "../../../assets/img/logoLinkedin.svg";
import logoInstagram from "../../../assets/img/logoInstgramFooter.svg";

import { Link } from "react-router-dom";

export const Footer = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  return (
    <div className="container__footer">
      <div className="container__footer--data">
        <div className="container__footer__logo">
          <img src={itglogo} alt="logo-ItGlobers" className="header__picture" />
          <div className="links__of--interest">
            <FormattedMessage id="footer-links-of-interest">
              {(message) => <h3>{message}</h3>}
            </FormattedMessage>
            <Link to="/policy">
              <FormattedMessage id="footer-data-policy">
                {(message) => <h5>{message}</h5>}
              </FormattedMessage>
            </Link>
          </div>
          <div className="about-us">
            <FormattedMessage id="footer-about-us">
              {(message) => <h3>{message}</h3>}
            </FormattedMessage>
            <FormattedMessage id="footer-email">
              {(message) => <h5>{message}</h5>}
            </FormattedMessage>
            <h5>Bogotá, Colombia</h5>
          </div>
        </div>
        <div className="container__footer__social">
          <FormattedMessage id="footer-follow">
            {(message) => <h3>{message}</h3>}
          </FormattedMessage>
          <section className="container__footer__social--media">
            <a
              href="https://www.linkedin.com/company/itglobers/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logosFooter"
                src={logoLinkedin}
                alt="logoLinkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/explore/tags/itglobers/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logosFooter"
                src={logoInstagram}
                alt="logoLinkedin"
              />
            </a>
          </section>
        </div>
      </div>
      <FormattedMessage id="footer-rights-reserved">
        {(message) => (
          <p className="container__footer--derechos">
            {message} {añoActual}
          </p>
        )}
      </FormattedMessage>
    </div>
  );
};
