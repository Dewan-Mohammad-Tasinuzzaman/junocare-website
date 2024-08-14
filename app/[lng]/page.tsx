'use client'; // Converted to client component

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { useTranslation } from '../i18n/client';
import { ParallaxBanner } from "react-scroll-parallax";
import HomeBannerImage from "@/public/assets/images/home-banner-img.jpg";
import Logo_Icon_White from "@/public/assets/svgs/juno-care-icon.svg";
import Logo_Icon_Blue from '@/public/assets/svgs/juno-care-icon-blue.svg';
import Down_Arrow_White from "@/public/assets/svgs/down-arrow-icon.svg";
import Video_Icon_White from "@/public/assets/svgs/video-icon.svg";
import Custom_Separator_Corner from "@/public/assets/svgs/hero-custom-corner.svg";
import About_Image from "@/public/assets/images/doctor_illustration.png";
import Phone_Icon_White from '@/public/assets/svgs/contact-icon-white.svg';
import Phone_Icon_Dark from '@/public/assets/svgs/contact-icon-dark.svg';
import Email_Icon_Dark from '@/public/assets/svgs/email-icon.svg';
import Live_Support_Icon_White from '@/public/assets/svgs/live-support_icon.svg';
import Money_Icon_White from '@/public/assets/svgs/money_icon.svg';
import Team_Icon_White from '@/public/assets/svgs/team_icon.svg';
import Clinic_Icon_White from '@/public/assets/svgs/clinic_icon.svg';
import Gear_Icon_White from '@/public/assets/svgs/gear_icon.svg';
import Logo from '@/public/assets/svgs/juno_care_logo.svg';
import Medical_Icon_White from '@/public/assets/svgs/medical-icon-white.svg';



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

  // Email Sending
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:' + 'junocare@junopharm.com';
  };

  return (
    <main className={styles.main}>
      
      <section id="section-hero" className="hero">

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
                translateY: [0, 30],
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
      </section>


      {/* About */}
      <section id="section-about" className="about">
        <div className="about__container page-margins-big">
          <Image src={About_Image} alt="About Image" unoptimized={true} className="about__image" />
          <div className="about__contents">
            <h2 className="about__contents_header">JunoCare <span className="bold">Patient Support Program</span></h2>
            <p className="about__contents_text">
              JunoCares is a support program for patients who have been prescribed a Juno Pharmaceuticals specialty medication. Enrolling is easy and can be done by a healthcare professional involved in their care. <br/>
              The JunoCare support services are customized for each medication, and include:
            </p>
            <div className="about__contents_points">
              <div className="about__contents_points-point">
                <span className="about__contents_points-point--bullet"></span>
                <p className="about__contents_points-point--text">Reimbursement navigation and financial assistance.</p>
              </div>
              <div className="about__contents_points-point">
                <span className="about__contents_points-point--bullet"></span>
                <p className="about__contents_points-point--text">Educational materials to understand your medication.</p>
              </div>
              <div className="about__contents_points-point">
                <span className="about__contents_points-point--bullet"></span>
                <p className="about__contents_points-point--text">Specialty pharmacy services.</p>
              </div>
              <div className="about__contents_points-point">
                <span className="about__contents_points-point--bullet"></span>
                <p className="about__contents_points-point--text">Ongoing support during treatment..</p>
              </div>
              <div className="about__contents_points-point">
                <span className="about__contents_points-point--bullet"></span>
                <p className="about__contents_points-point--text">Compassionate patient support program.</p>
              </div>
            </div>
            <p className="about__contents_notice bold">*Subject to provincial regulations.</p>
            <div className="about__contents_button">
              <Link className="btn-contacts" href={`/${lng}#section-contacts`}>
                <div className="btn-contacts__iconcircle">
                  <Image src={Phone_Icon_White} alt="Contacts Icon" unoptimized={true} className="btn-contacts__iconcircle_icon" />
                </div>
                <p className="btn-contacts__text">Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Features */}
      <section id="section-features" className="features page-margins-small">
        <Image src={Logo_Icon_Blue} alt="Features Illustration" unoptimized={true} className="features__illustration" />
        <h2 className="features__header"><span className="bold">Personalized</span> Support Services</h2>
        <p className="features__description">With JunoCare, you will choose your personalized support services and resources at every stage of your treatment journey, such as:</p>
        
        <div className="features__container">

          <div className="features__container_feature">
            <div className="features__container_feature-iconbox">
              <Image src={Live_Support_Icon_White} alt="Feature Icon" unoptimized={true} className="features__container_feature-iconbox--icon" />
            </div>
            <p className="features__container_feature-description">Live support, available from our dedicated team and your Care Coach (nurse), for questions about the program or treatment.</p>
          </div>

          <div className="features__container_feature">
            <div className="features__container_feature-iconbox">
              <Image src={Money_Icon_White} alt="Feature Icon" unoptimized={true} className="features__container_feature-iconbox--icon" />
            </div>
            <p className="features__container_feature-description">Reimbursement expertise to help you find and secure coverage for your treatment plan.</p>
          </div>

          <div className="features__container_feature">
            <div className="features__container_feature-iconbox">
              <Image src={Team_Icon_White} alt="Feature Icon" unoptimized={true} className="features__container_feature-iconbox--icon" />
            </div>
            <p className="features__container_feature-description">Experienced team members to help you access your medication as quickly as possible.</p>
          </div>

          <div className="features__container_feature">
            <div className="features__container_feature-iconbox">
              <Image src={Clinic_Icon_White} alt="Feature Icon" unoptimized={true} className="features__container_feature-iconbox--icon" />
            </div>
            <p className="features__container_feature-description">Access to a reliable infusion/injection clinic network, staffed by qualified healthcare professionals.</p>
          </div>

          <div className="features__container_feature">
            <div className="features__container_feature-iconbox">
              <Image src={Gear_Icon_White} alt="Feature Icon" unoptimized={true} className="features__container_feature-iconbox--icon" />
            </div>
            <p className="features__container_feature-description">Practical tools to help you navigate your treatment plan.</p>
          </div>

        </div>
      </section>



      {/* Contacts */}
      <section id="section-contacts" className="contacts page-margins-big">
        <Image src={Logo} alt="Logo" unoptimized={true} className="contacts__logo" />
        <h2 className="contacts__header bold">Enrolling into JunoCare Patient Support Program</h2>
        <p className="contacts__description">Patients can ask their healthcare provider to enroll them in JunoCare. A healthcare provider can enroll their patient by submitting a completed enrollment form by fax or email.</p>
        <div className="contacts__method">
          <Image src={Phone_Icon_Dark} alt="Phone Icon" unoptimized={true} className="contacts__method_icon" />
          <p className="contacts__method_text">1.437.339.3327</p>
        </div>
        <div className="contacts__method">
          <Image src={Email_Icon_Dark} alt="Email Icon" unoptimized={true} className="contacts__method_icon" />
          <p className="contacts__method_text">junocare@junopharm.com</p>
        </div>
        <p className="contacts__availability bold">Monday-Friday (9am - 5pm) (EST)</p>
        <div className="contacts__button">
          <Link className="btn-contacts-dark" href={`mailto:junocare@junopharm.com`}>
            <div className="btn-contacts-dark__iconcircle">
              <Image src={Medical_Icon_White} alt="Contacts Icon" unoptimized={true} className="btn-contacts-dark__iconcircle_icon" />
            </div>
            <p className="btn-contacts-dark__text">Enroll A Patient</p>
          </Link>
        </div>
      </section>

    </main>
  );
}
