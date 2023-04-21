import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import menuBtn from '../../../assets/img/menu-btn.svg';

import '../../../styles/menu.scss';
import Dropdown from '../atoms/CustomSelectMenu';
import { Language } from '../atoms/Language';

const options = [
  {
    value: 'Quienes somos',
    id: 'who-we-are',
    link: '#who-we-are'
  },
  {
    value: 'Casos de éxito',
    id: 'success-histories',
    link: '#success-histories',
  },
  {
    value: 'Nuestros clientes',
    id: 'Our-clients',
    link: '#Our-clients'
  },
];

export const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const toggleMenu = () => {
    if (menuRef.current) {
      const classList = menuRef.current.classList;
      classList.toggle('menu__navigation--active');
    }
  };

  return (
    <>
      <button className='menu__button' onClick={toggleMenu}>
        <img src={menuBtn} alt='active__navbar--mobile' />
      </button>
      <nav className='menu__navigation' ref={menuRef}>
        <Dropdown options={options} />
        <div className='container__menu__list--pages'>
          <ul className='menu__list'>
            <FormattedMessage id='header-about'>
              {message => (
                <Link
                  to='/'
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  <li className='menu__item'>{message}</li>
                </Link>
              )}
            </FormattedMessage>
            {/* Secciones del Navbar Eliminadas */}
            {/* <FormattedMessage id="header-solutions">
              {(message) => <li className="menu__item">{message}</li>}
            </FormattedMessage>
            <FormattedMessage id="header-ourWork">
              {(message) => <li className="menu__item">{message}</li>}
            </FormattedMessage> */}
            <FormattedMessage id='header-contactUs'>
              {message => (
                <Link
                  to='/contact'
                  onClick={toggleMenu}
                  className={
                    location.pathname === '/contact' ||
                      location.pathname === '/policy'
                      ? 'active'
                      : ''
                  }
                >
                  <li className='menu__item'>{message}</li>
                </Link>
              )}
            </FormattedMessage>
          </ul>
        </div>
        <ul className='menu__list--work-with-us'>
          <FormattedMessage id='button-workwithus'>
            {message => (
              <Link to={'/work'} onClick={toggleMenu}>
                <li className='menu__item menu__item--work-with-us'>
                  {message}
                </li>
              </Link>
            )}
          </FormattedMessage>
        </ul>
        <ul className='container_mobile_translate'>
          <Language />
        </ul>
      </nav>
    </>
  );
};
