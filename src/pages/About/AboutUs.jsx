import { Helmet } from "react-helmet";
import AboutUsSection from "./AboutUsSection";
import OurTeamSection from "./OurTeamSection";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Evren Research</title>
        <meta
          name="description"
          content="Learn more about Evren Research and how we help businesses grow with innovative research solutions."
        />
        <link rel="canonical" href="https://www.evrenresearch.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.evrenresearch.com/about",
              "name": "About Us - Evren Research",
              "description": "Learn more about Evren Research and how we help businesses grow with innovative research solutions."
            }
          `}
        </script>
      </Helmet>

      <AboutUsSection />
      <OurTeamSection />
    </>
  );
}
