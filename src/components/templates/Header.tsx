import { Menu } from "../UI/molecules/Menu";
import itglogo from "../../assets/img/itglobersLogo.svg";
import { Link } from "react-router-dom";

import "../../styles/header.scss";
import "../../styles/language.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1240);

  const headerdeskto = showHeader ? "header" : "header-hidden";
  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1240);
    }
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos < 10);
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
    <header className={isMobile ? "header" : headerdeskto}>
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
