import ClubName from "@/components/ClubName/ClubName";
import Skew2 from "@/components/HomePage/Homepage";
import Head from "next/head";

import Announcement from "../components/Announcement/Announcement";
import SocietyRepresentative from "../components/SocietyRepresentative/SocietyRepresentative";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Aboutsac from "@/components/DeanSpeaks/DeanSpeaks";
import Deanspeaks from "@/components/DeanSpeaks/DeanSpeaks";
import SocietyGallery from "../components/SocietyGallery/SocietyGallery";
// import ClubHero from "@/components/ClubHero/ClubHero";
import AboutPage from "../components/AboutPage/AboutPage";
import Gallery from "@/components/Gallery/Gallery";
import Slider from "@/components/SocietySlider/Slider"
import ContactPage from "@/components/ContactPage/ContactPage";

import HomePageMobile from "@/components/HomePageMobile";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import Carousel from "../components/FestCarousel/Carousel";
import AboutNITR from "@/components/AboutPage/AboutNITR";
export default function Home() {
  return (
    <>
      <Head>
        <title>Student Activity Center, NIT Rourkela</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* *********** Meta SEO***********  */}
        <meta
          property="og:title"
          content="SAC NITR,Explore the plethora of thrilling events, exciting
              fests, diverse clubs and other activities in the
            beautiful campus of NIT Rourkela."
        />
        <meta
          name="keywords"
          content="sacnitr,sacnitrkl,sacnitrourkela, sac, club nitr, club, clubnitr, clubnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,societies nitrkl,societiesnitrkl"
        />
        <meta
          name="description"
          content="Official Website of SAC NIT Rourkela"
        />
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sacnitr.com/" />
        <meta
          property="og:image"
          content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png"
        />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />{" "}
        <meta name="description" content="sac 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HomePageMobile />
        <Skew2 />
        <AboutNITR
          data="Message from Director"
          img="https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679148287/Director_NIT_Rourkela_twwguz.png"
          description="I would request the students to have a little patience. Staying at home might have gotten boring now but I hope that they don’t feel disturbed. Today’s young generation is very vibrant, and they do not want to be stuck within the same four walls. But, the situation doesn’t allow us to have all the flexibility which we wish to have. I hope after the pooja vacations things change and soon all the students will be asked to return to campus."
        />
        <Deanspeaks

          data="Message from Dean"
          image="https://res.cloudinary.com/du3uvgzdr/image/upload/v1698967740/dean_r6xbdl.jpg"

          description="NIT Rourkela is one of the premier institutes of the country, with a tag of institute of national importance. Here at NITR we groom our students as future responsible citizens of the country. We are confident that each one our students will be directly or indirectly involved in the nation building process to take our country from developing to developed country in near future. We prepare our students to not only excel in academics, rather our focus is for their all-round development so that they can face any challenges with success in life. Towards this over all development of personality, Student Activity Center at NITR plays a major role.  
          The Student Activity Center is a vibrant hub of holistic development, where students can pursue their passions, hone their talents, and forge lifelong bonds. We offer a diverse tapestry of clubs and organisations, catering to every conceivable interest, from academics and athletics to the arts and literature. Whether you seek to forge new friendships, acquire new skills, or simply enjoy yourself outside the classroom, the Student Activity Center is a treasure trove of opportunities. We encourage all students to embrace this vibrant tapestry and make the most of their college experience. I urge you to explore the Student Activity Center and discover something that ignites your passion. It is a place where you can learn, grow, and have fun simultaneously."
        />
         <AboutNITR
          data="President Sac Speaks"
           img="https://res.cloudinary.com/de2s0mcjo/image/upload/v1695409082/IMG-20230913-WA0135_nanw4l.jpg"
          description="It is with great enthusiasm and pride that I welcome you to the Student Activity Centre at the National Institute of Technology Rourkela. As the President of this vibrant and dynamic hub of student life, I am honoured to represent a community of talented, passionate, and driven individuals who are committed to enhancing the overall experience of our students.

          At NIT Rourkela, we firmly believe education is not limited to classrooms and textbooks. The Student Activity Centre is a melting pot of creativity, innovation, and holistic development. It's a place where students can explore their interests, nurture their talents, and forge lifelong connections. Our primary mission is to create a platform for students to engage in various activities, from cultural and sports events to technical and entrepreneurial pursuits. We encourage our students to push their boundaries, challenge their limits, and discover new passions. Through our numerous clubs, societies, and events, we aim to foster leadership, teamwork, and a spirit of exploration.
          
          As the President, I am committed to working closely with our dedicated team and the entire student body to ensure that the Student Activity Centre remains a vibrant and inclusive space. We will continue to organize exciting events, workshops, and activities that cater to the diverse interests of our students. 
          
          I want to extend my gratitude to the institute leadership, students, faculty, staff, and the entire NIT Rourkela community for their unwavering support. Together, we can create an enriching and unforgettable college experience for our students."
        />
        <Slider/>
        <Announcement />
        <SocietyRepresentative />
        <Carousel />
        <Gallery />
        <FAQ />
      </main>
    </>
  );
}
