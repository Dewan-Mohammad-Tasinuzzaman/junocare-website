'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useTranslation } from '../../i18n/client';
import NorombyImage from '@/public/assets/images/juno_noromby.jpg';
import Download_Icon_White from '@/public/assets/svgs/download-icon.svg';
import ReactPlayer from 'react-player';

// Define the props type for the page component
type NorombyGuidePageProps = {
  params: {
    lng: string;
  };
};

export default function NorombyGuidePage({ params: { lng } }: NorombyGuidePageProps) {

  // Language
  const { t } = useTranslation(lng, 'noromby-guide-page');

  // State to manage the selected video language and play status
  const [videoUrl, setVideoUrl] = useState('/assets/videos/Noromby_Video_Guide-EN.mp4');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLang, setActiveLang] = useState('EN'); // New state to track active language

  const toggleVideo = (url: string, lang: string) => {
    setVideoUrl(url);
    setIsPlaying(true);
    setActiveLang(lang); // Update the active language
  };

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

      <div id='noromby-section-video' className="guide__instructions page-margins-big">
        <div className="guide__instructions_content">
          <h2 className="guide__instructions_content-header">Patient Instructional Video</h2>
          <p className="guide__instructions_content-description">View our patient instructional video to get clear directions for the self-administration of Noromby®.</p>
        </div>
        <div className="guide__instructions_video-container">
          <div className="guide__instructions_video-container__videobox">
            <ReactPlayer
              url={videoUrl}
              className='guide__instructions_video-container__videobox_source'
              playing={isPlaying}
              width='100%'
              height='100%'
              loop={false}
              muted={false}
              controls={true}
            />
          </div>
          <div className="guide__instructions_video-container__langs">
            <div id='noromby-en-video' className="guide__instructions_video-container__langs_langbox" onClick={() => toggleVideo('/assets/videos/Noromby_Video_Guide-EN.mp4', 'EN')}>
              <div id='noromby-en-video-button' className={`guide__instructions_video-container__langs_langbox-inner ${activeLang === 'EN' ? 'active-video-lang-btn' : ''}`}>
                <p className={`guide__instructions_video-container__langs_langbox-inner--text ${activeLang === 'EN' ? 'active-video-lang-text' : ''}`}>EN</p>
              </div>
            </div>
            <div id='noromby-fr-video' className="guide__instructions_video-container__langs_langbox" onClick={() => toggleVideo('/assets/videos/Noromby_Video_Guide-FR.mp4', 'FR')}>
              <div id='noromby-fr-video-button' className={`guide__instructions_video-container__langs_langbox-inner ${activeLang === 'FR' ? 'active-video-lang-btn' : ''}`}>
                <p className={`guide__instructions_video-container__langs_langbox-inner--text ${activeLang === 'FR' ? 'active-video-lang-text' : ''}`}>FR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
