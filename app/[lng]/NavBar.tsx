'use client'

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import { useTranslation } from '../i18n/client';
import { languages } from '../i18n/settings';
import Logo from '@/public/assets/svgs/juno_care_logo.svg';
import Medical_Icon_Dark from '@/public/assets/svgs/medical-icon-dark.svg';
import Contacts_Icon_White from '@/public/assets/svgs/contact-icon-white.svg';


// Define the props type for the NavBar component
type NavBarProps = {
  params: {
    lng: string;
  };
};


export default function NavBar({ params: { lng } }: NavBarProps) {


  // Language
  const { t } = useTranslation(lng, 'navbar');


  // To use this, we must convert this component to a Client Componenet
  const currentPath = usePathname();

  // NavBar Collapse/Expand Capability
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State to control mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };


  // Sticky-Effect
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const isScrolledDown = currentScrollTop > lastScrollTop;

      setLastScrollTop(currentScrollTop);

      // If scrolled down or at the top of the page, show the navbar
      setIsNavBarVisible(!isScrolledDown || currentScrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const navbarClass = isNavBarVisible ? 'navbar' : 'navbar navbar-hidden';


  return (
    <>
      {/* Desktop Nav */}
      <nav ref={navBarRef} className={navbarClass}>

        {/* Logo Box */}
        <Link href={`/${lng}`} onClick={closeMobileMenu}>
          <div className="navbar__logobox">
            <Image src={Logo} alt="Logo" unoptimized={true} className="navbar__logobox_logo" />
          </div>
        </Link>

        {/* Options */}
        <div className={`navbar__interaction-overlay ${showMobileMenu ? '' : 'display-none'}`} onClick={closeMobileMenu}></div>
        <div className={`navbar__options ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
          <Link href={`/${lng}`} onClick={closeMobileMenu} className='navbar__options-option marg-right-small'>
            <div className="navbar__options_link">
              <div className={`${`/${lng}` === currentPath ? 'active-page-nav' : ''} navbar__options_link-text`}>{t('nav-link01')}</div>
            </div>
          </Link>
          <Link href={`/noromby-guide`} onClick={closeMobileMenu} className='navbar__options-option marg-right-small'>
            <div className="navbar__options_link">
              <div className={`${`/${lng}/noromby-guide` === currentPath ? 'active-page-nav' : ''} navbar__options_link-text`}>{t('nav-link02')}</div>
            </div>
          </Link>
          <div className="navbar__options-option">
            <Link className="btn-contacts" href={`/${lng}#section-contacts`} onClick={closeMobileMenu}>
              <div className="btn-contacts__iconcircle">
                <Image src={Contacts_Icon_White} alt="Contacts Icon" unoptimized={true} className="btn-contacts__iconcircle_icon" />
              </div>
              <p className="btn-contacts__text">{t('contact-us')}</p>
            </Link>
          </div>
          <div className="navbar__options-option">
            {languages.filter((l) => lng !== l).map((l, index) => {
              return (
                <div key={l} className='langswitch'>
                  <p className="langswitch__text">{t('translate')}</p>
                  <span className='langswitch__btn'>
                    {index > 0 && (' or ')}
                    <p className="langswitch__btn_current">{lng}</p>
                    <Link className='langswitch__btn_link' href={`/${l}`} onClick={closeMobileMenu}>{l}</Link>
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="navbar__expand-btn" onClick={toggleMobileMenu}>
          <div className="navbar__expand-btn_iconbox">
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--1"></div>
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--2"></div>
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--1"></div>
          </div>
        </div>

      </nav>
    </>
  );
}