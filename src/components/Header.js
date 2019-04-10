import React from "react";

function Header() {
  return (
    <header className="Header" id="home">
      <nav className="Navigation container">
        <span className="Navigation__logo">&lt;/&gt;</span>
        <input type="checkbox" id="burger" className="burger" />

        <label htmlFor="burger" className="burger-icon">
          <span />
          <span />
          <span />
        </label>

        <ul className="Navigation__list container">
          <li className="Navigation__item">
            <a href="#home" className="Navigation__link">
              home
            </a>
          </li>
          <li className="Navigation__item">
            <a href="#about" className="Navigation__link">
              about
            </a>
          </li>
          <li className="Navigation__item">
            <a href="#skills" className="Navigation__link">
              skills
            </a>
          </li>
          <li className="Navigation__item">
            <a href="#contact" className="Navigation__link">
              contact
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="Header__title">name surname</h1>
      <p className="Header__subtitle">front-end developer</p>
    </header>
  );
}

export default Header;
