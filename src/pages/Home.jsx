import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceOverview from "../components/ServicesOverview";
import ServicesPage from "./ServicesPage";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <ServiceOverview /> */}
      <ServicesPage />
      {/* <Footer />  */}
    </>
  );
}

export default Home;
