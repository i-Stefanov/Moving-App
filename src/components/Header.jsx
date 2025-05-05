import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">ЕВРО ХАМАЛИ</div>
      <nav className="nav">
        <a href="/">Начало</a>
        <a href="/quote">Запитване</a>
        <a href="#services">Услуги</a>
        <a href="#contact">Контакт</a>
      </nav>
    </header>
  );
}

export default Header;
