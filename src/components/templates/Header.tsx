import { Menu } from "../UI/molecules/Menu";
import itglogo from "../../assets/img/itglobersLogo.svg";
import { Link } from "react-router-dom";

import "../../styles/header.scss";
import "../../styles/language.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
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
  return (
    <header className={showHeader ? "header" : "header-hidden"}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__picture"
              src={itglogo}
              alt="logo-ItGlobers"
            />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};
