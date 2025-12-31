import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";


const App = () => {
  // Initialize AOS library
  useEffect(() => {
    AOS.init({
      offset: 120,
      once: true,
    });
  }, []);
  return (
      <div className="relative min-h-screen m-0 p-0">
    <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
