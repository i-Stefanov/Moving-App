import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">ЕВРО ХАМАЛИ</div>
      <nav className="nav">
        <Link to="/">Начало</Link>
        <Link to="/quote">Запитване</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/contact">Контакт</Link>
      </nav>
    </header>
  );
}

export default Header;
