import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">ЛОГО</div>
      <nav className={styles.nav}>
        <Link to="/">Начало</Link>
        <Link to="/quote">Запитване</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/contact">Контакт</Link>
      </nav>
    </header>
  );
}

export default Header;
