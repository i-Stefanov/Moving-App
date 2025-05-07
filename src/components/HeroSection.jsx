import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Преместването е лесно с нас</h1>
        <p>Надеждни хамалски услуги за домове и офиси</p>
        <Link to="/quote" className="cta-button">
          Получи оферта
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
