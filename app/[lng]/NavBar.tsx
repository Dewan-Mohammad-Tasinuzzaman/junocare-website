'use client'

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import { useTranslation } from '../i18n/client';
import { languages } from '../i18n/settings';
import Logo from '@/public/svgs/juno_care_logo.svg';
import Medical_Icon_Dark from '@/public/svgs/medical-icon-dark.svg';
import Contacts_Icon_White from '@/public/svgs/contact-icon-white.svg';


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


  return (
    <>
      {/* Desktop Nav */}
      <nav className='navbar'>

        {/* Logo Box */}
        <Link href={`/${lng}`}>
          <div className="navbar__logobox">
            <Image src={Logo} alt="Logo" unoptimized={true} className="navbar__logobox_logo" />
          </div>
        </Link>

        {/* Options */}
        <div className="navbar__options">
          <Link href={`/noromby-guide`} className='navbar__options-option'>
            <div className="navbar__options_link">
              <Image src={Medical_Icon_Dark} alt="Medical Icon" unoptimized={true} className="navbar__options_link-icon" />
              <div className={`${`/${lng}/noromby-guide` === currentPath ? 'active-page-nav' : ''} navbar__options_link-text`}>Noromby Guide</div>
            </div>
          </Link>
          <div className="navbar__options-option">
            <Link className="btn-contacts" href={`#contacts`}>
              <div className="btn-contacts__iconcircle">
                <Image src={Contacts_Icon_White} alt="Contacts Icon" unoptimized={true} className="btn-contacts__iconcircle_icon" />
              </div>
              <p className="btn-contacts__text">Contact Us</p>
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
                    <Link className='langswitch__btn_link' href={`/${l}`}>{l}</Link>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  );
}