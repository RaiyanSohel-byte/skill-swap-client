import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../components/Loading";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const { state } = useNavigation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-secondary/30">
      <Navbar />

      <ScrollToTop />
      <div className="space-y-20">
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
