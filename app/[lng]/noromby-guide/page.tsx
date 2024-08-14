'use client';

import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import { useTranslation } from '../../i18n/client';
import NorombyImage from '@/public/assets/images/juno_noromby.jpg';
import Download_Icon_White from '@/public/assets/svgs/download-icon.svg';


// Define the props type for the page component
type NorombyGuidePageProps = {
  params: {
    lng: string;
  };
};


export default function NorombyGuidePage({ params: { lng } }: NorombyGuidePageProps) {

  // Language
  // const { t } = useTranslation(lng, 'about-page');

  return (
    <main className='guide'>
      <div className="guide__information page-margins-big">
        <div className="guide__information_content">
          <h2 className="guide__information_content-header">Information for <span className="bold">Health Care Professionals</span> on <span className="bold">Noromby®</span></h2>
          <p className="guide__information_content-description">Download this helpful step-by-step guide for administration of Noromby®</p>
          <div className="guide__information_content-button">
            <div className="btn-download">
              <div className="btn-download__iconcircle">
                <Image src={Download_Icon_White} alt="Contacts Icon" unoptimized={true} className="btn-download__iconcircle_icon" />
              </div>
              <p className="btn-download__text">Download</p>
              <div className="btn-download__langs">
                <Link className="btn-download__langs_langbox" href={`/assets/files/Aid_Noromby_ENG_DIGITAL.pdf`} target="_blank">
                  <div className="btn-download__langs_langbox-inner">
                    <p className="btn-download__langs_langbox-inner--text">EN</p>
                  </div>
                </Link>
                <Link className="btn-download__langs_langbox" href={`/assets/files/Aid_Noromby_FRN_DIGITAL.pdf`} target="_blank">
                  <div className="btn-download__langs_langbox-inner">
                    <p className="btn-download__langs_langbox-inner--text">FR</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image src={NorombyImage} alt="Image of Noromby" unoptimized={true} className="guide__information_img" />
      </div>
    </main>
  )
}