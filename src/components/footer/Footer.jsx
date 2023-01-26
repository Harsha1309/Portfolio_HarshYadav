import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harsh</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
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
            href="https://www.facebook.com/profile.php?id=100008642178674"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://instagram.com/harsha_1309?utm_medium=copy_link"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/HarshYa47810607"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; HarshYadav. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
