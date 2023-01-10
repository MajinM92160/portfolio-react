import React from 'react';
import "./footer.css";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Marouane Kacem-chaouche</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/ashitaka808/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/Jubei92" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/marouane-kacem-chaouche/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Marouane Kacem-chaouche. All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;