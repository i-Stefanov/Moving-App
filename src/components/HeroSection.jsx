import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Преместването е лесно с нас</h1>
        <p>Надеждни хамалски услуги за домове и офиси</p>
        <a href="/quote" className="cta-button">
          Получи оферта
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
