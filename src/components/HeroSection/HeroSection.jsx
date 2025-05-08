import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Преместването е лесно с нас</h1>
        <p>Надеждни хамалски услуги за домове и офиси</p>
        <Link to="/quote" className={styles.ctaButton}>
          Получи оферта
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
