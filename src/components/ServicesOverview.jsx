import "../styles/ServiceOverview.css";

function ServiceOverview() {
  return (
    <section className="services" id="services">
      <h2>Нашите услуги</h2>
      <div className="services-container">
        <div className="service-card">Домашно преместване</div>
        <div className="service-card">Офис преместване</div>
        <div className="service-card">Опаковане и разопаковане</div>
      </div>
    </section>
  );
}

export default ServiceOverview;
