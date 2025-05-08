import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";

import { FaHome, FaBuilding, FaBoxOpen } from "react-icons/fa";

function ServicesPage() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesHeader}>
        <h1>Нашите услуги</h1>
        <p>Надеждни и професионални решения за преместване на дома и офиса.</p>
      </div>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <FaHome className={`${styles.serviceIcon} ${styles.homeIcon}`} />
          <h3>Домашно преместване</h3>
          <p>Без стрес при преместване на апартамент или къща.</p>
          <Link to="/quote" className={styles.cardCta}>
            Получи оферта
          </Link>
        </div>
        <div className={styles.serviceCard}>
          <FaBuilding
            className={`${styles.serviceIcon} ${styles.buildingIcon}`}
          />
          <h3>Офис преместване</h3>
          <p>Ефективно преместване на вашия бизнес с минимално прекъсване.</p>
          <Link to="/quote" className={styles.cardCta}>
            Получи оферта
          </Link>
        </div>
        <div className={styles.serviceCard}>
          <FaBoxOpen className={`${styles.serviceIcon} ${styles.boxIcon}`} />
          <h3>Опаковане и разопаковане</h3>
          <p>Професионално опаковане на ценни и чупливи вещи.</p>
          <Link to="/quote" className={styles.cardCta}>
            Получи оферта
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
