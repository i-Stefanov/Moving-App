import React, { useState } from "react";
import QuoteList from "../components/Admin/QuoteList"; // Placeholder
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("quotes");

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Админ панел</h2>
        <nav>
          <button onClick={() => setActiveSection("overview")}>Начало</button>
          <button onClick={() => setActiveSection("quotes")}>Заявки</button>
          <button onClick={() => setActiveSection("calendar")}>Календар</button>
          <button onClick={() => setActiveSection("invoices")}>Фактури</button>
          <button onClick={() => setActiveSection("customers")}>Клиенти</button>
        </nav>
      </aside>

      <main className={styles.content}>
        {activeSection === "overview" && <h2>Добре дошли в админ панела</h2>}
        {activeSection === "quotes" && <QuoteList />}
        {activeSection === "calendar" && <p>Тук ще има календар</p>}
        {activeSection === "invoices" && <p>Генериране на фактури</p>}
        {activeSection === "customers" && <p>Управление на клиенти</p>}
      </main>
    </div>
  );
}

export default Dashboard;
