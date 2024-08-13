'use client'; // Converted to client component

import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslation } from '../i18n/client';
import { ParallaxBanner } from "react-scroll-parallax";
import HomeBannerImage from "@/public/assets/images/home-banner-img.jpg";
import Logo_Icon_White from "@/public/assets/svgs/juno-care-icon.svg";
import Down_Arrow_White from "@/public/assets/svgs/down-arrow-icon.svg";
import Video_Icon_White from "@/public/assets/svgs/video-icon.svg";
import Custom_Separator_Corner from "@/public/assets/svgs/hero-custom-corner.svg";
import Link from "next/link";


// Define the props type for the HomePage component
type HomePageProps = {
  params: {
    lng: string;
  };
};

export default function Home({ params: { lng } }: HomePageProps) {

  // Language
  const { t } = useTranslation(lng, 'home-page');

  // Images for ParallaxBanner
  const homeBannerImage = "/assets/images/home-banner-img.jpg";

  return (
    <main className={styles.main}>
      
      <div id="section-hero" className="hero">

        {/* Main Contents */}
        <div className="hero__contents page-span-big">

          <div className="hero__contents_intro">
            <Image src={Logo_Icon_White} alt="Logo Icon (Heart)" unoptimized={true} className="hero__contents_intro-logoicon" />
            <h1 className="hero__contents_intro-header">Advancing The Healthcare of Canadians</h1>
            <p className="hero__contents_intro-description">Welcome to Juno Pharmaceuticals&apos; Patient Support Program, where we are dedicated to providing you with the resources and support you need for your healthcare journey.</p>
            <div className="hero__contents_intro-keep-scrolling keep-scrolling">
              <div className="keep-scrolling__text">Keep Scrolling</div>
              <Image src={Down_Arrow_White} alt="Down Arrow" unoptimized={true} className="keep-scrolling__icon" />
            </div>
          </div>

          <Link href="/noromby-guide" className="hero__contents_video-circle">
            <Image src={Video_Icon_White} alt="Video Icon" unoptimized={true} className="hero__contents_video-circle--icon" />
          </Link>

        </div>

        {/* Banner Image */}
        <ParallaxBanner
            layers={[
              {
                image: homeBannerImage,
                speed: -70,
                translateY: [0, 14],
                opacity: [1, 1],
                scale: [1.05, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
              },
            ]}
            className="w-full aspect-2-1 hero__image"
        />
        <div className="banner-shadow"></div>

        <div className="hero__separator">
          <Image src={Custom_Separator_Corner} alt="" unoptimized={true} className="hero__separator-corner" />
          <div className="hero__separator-base"></div>
        </div>
      </div>

    </main>
  );
}
