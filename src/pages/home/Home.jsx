import { Helmet } from "react-helmet";
import React from "react";
import { BackgroundLinesDemo } from "../../components/BackgroundLinesDemo";
import { WhatWeDoSection } from "../../components/WhatWeDoSection";
import AboutUsSection from "../../components/AboutUsSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import Stats from "../../components/ui/stats";
import IndustryFocused from "../../components/IndustryFocused";
// import Testimonial from "../../components/Testimonials"
const Home = () => {
  return ( 
    <>
      <Helmet>
        <title>
          Evren Research | Innovative Data Analytics and Research Solutions
        </title>
        <meta
          name="description"
          content="Evren Research provides innovative data analytics and research solutions to empower businesses. Learn more about our services and expertise."
        />
        <link rel="canonical" href="https://www.evrenresearch.com/" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://www.evrenresearch.com/",
        "name": "Home - Evren Research",
        "description": "Home page of Evren Research, providing innovative data analytics and research solutions."
      }
    `}
        </script>
      </Helmet>
      <BackgroundLinesDemo />
      <WhatWeDoSection />
      <AboutUsSection />
      <IndustryFocused />
      <WhyChooseUs />
      <Stats />
      {/* <Testimonial/> */}
    </>
  );
};

export default Home;
