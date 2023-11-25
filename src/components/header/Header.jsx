import React, { useState } from "react";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // 200 viewportal dan yuksekse scrollu goster.degilse gizle
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /** ======================== TOGGLE MENU ============================*/

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <section>
    <header className="header">
      <nav className="nav container">
      
        <a href="index.html" className="nav__logo">
          ÖZLEM
         
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                {/* <i className="uil uil-estate nav__icon"></i> */}
                #home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                {/* <i className="uil uil-user nav__icon"></i> */}
                #über mich
              </a>
            </li>
 <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil-briefcase nav__icon"></i> */}
                #projekte
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil-file-alt nav__icon"></i> */}
                #fähigkeiten
              </a>
            </li>

           

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil-scenery nav__icon"></i> */}
                #portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }
              >
                {/* <i className="uil uil-message nav__icon"></i> */}
                #kontakt
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
    </section>
    
  );
};

export default Header;
