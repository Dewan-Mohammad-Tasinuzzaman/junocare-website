'use client'

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import { useTranslation } from '../i18n/client';
import { languages } from '../i18n/settings'


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
      <nav>
        ITS WORKING
      </nav>
    </>
  );
}