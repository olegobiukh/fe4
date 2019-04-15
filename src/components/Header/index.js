import React from "react";

import $ from "jquery";

import "./index.scss";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(document).scrollTop() > 600 && $(window).width() > 768) {
          $(".Navigation").addClass("navigation__top");
        } else {
          $(".Navigation").removeClass("navigation__top");
        }
      });
    });
  }

  render() {
    return (
      <header className="header" id="home">
        <nav className="navigation container">
          <span className="navigation__logo">&lt;/&gt;</span>
          <input type="checkbox" id="burger" className="burger" />

          <label htmlFor="burger" className="burger-icon">
            <span />
            <span />
            <span />
          </label>

          <ul className="navigation__list container">
            <li className="navigation__item">
              <a href="#home" className="navigation__link">
                home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#about" className="navigation__link">
                about
              </a>
            </li>
            <li className="navigation__item">
              <a href="#skills" className="navigation__link">
                skills
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="header__title">Oleg Obiukh</h1>
        <p className="header__subtitle">front-end developer</p>
      </header>
    );
  }
}

export default Header;
