import "../styles/ServicesPage.css";

import { FaHome, FaBuilding, FaBoxOpen } from "react-icons/fa";

function ServicesPage() {
  return (
    <section className="services">
      <div className="services-header">
        <h1>Нашите услуги</h1>
        <p>Професионални хамалски услуги за дома и офиса.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <FaHome className="service-icon home-icon" />
          <h3>Домашно преместване</h3>
          <p>Без стрес при преместване на апартамент или къща.</p>
        </div>
        <div className="service-card">
          <FaBuilding className="service-icon building-icon" />
          <h3>Офис преместване</h3>
          <p>Ефективно преместване на вашия бизнес с минимално прекъсване.</p>
        </div>
        <div className="service-card">
          <FaBoxOpen className="service-icon box-icon" />
          <h3>Опаковане и разопаковане</h3>
          <p>Професионално опаковане на ценни и чупливи вещи.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
