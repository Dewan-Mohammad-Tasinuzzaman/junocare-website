'use client'

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n/client';
import Juno_Logo_White from '@/public/assets/svgs/juno-logo.svg';


type FooterProps = {
    params: {
        lng: string;
    };
};


export default function Footer({ params: { lng } }: FooterProps) {

    // Language
    const { t } = useTranslation(lng, 'footer')

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
    <footer id='footer' className="footer">
        <div className="footer__sec01">
            <div className="footer__sec01_container page-margins-big">
                <Image src={Juno_Logo_White} alt="Contacts Icon" unoptimized={true} className="footer__sec01_container-logo" />
                <div className="footer__sec01_container-separator"></div>
                <p className="footer__sec01_container-linker">
                    {t('footer-website')}
                    <Link href="https://www.junopharm.ca/" target="_blank" className="footer__sec01_container-linker--link bold">{t('footer-website-link')}</Link>
                </p>
            </div>
        </div>
        <div className="footer__sec02">
            <div className="footer__sec02_container page-margins-big">
                <Link href="/assets/files/DroitsHumainJunoFR.pdf" target="_blank" className="footer__sec02_container-link">{t('footer-link01')}</Link>
                <div className="footer__sec02_container-separator"></div>
                <Link href={`/noromby-guide`} className="footer__sec02_container-link">{t('footer-link02')}</Link>
                <div className="footer__sec02_container-separator"></div>
                <Link href={`/${lng}#section-contacts`} className="footer__sec02_container-link">{t('footer-link03')}</Link>
            </div>
        </div>
        <div className="footer__sec03">
            <p className="footer__sec03_text page-margins-big">
                ©{currentYear} {t('footer-copyright')}
            </p>
        </div>
    </footer>
    )
}