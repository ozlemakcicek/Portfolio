import React from 'react'
import "./Footer.css"

// const Footer = () => {
//   return (
//     <footer >
       
//             <hr />
        
//         <br />
//         <br />
       
//             <div className='ich'>
//                 <h5> Özlem Akcicek</h5>
//                 <p>A passionate web developer based in Aachen, Germany</p>
//             </div>
        
//     </footer>
//   )
// }

// export default Footer



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
      <hr />

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ozlemakcicek/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/ozlemakcicek"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <h2 className="footer__copy">&#169; ÖzlemAkcicek</h2>
        <span className="footer__copy">
          A passionate web developer based in Aachen, Germany
        </span>
      </div>
    </footer>
  );
}

export default Footer