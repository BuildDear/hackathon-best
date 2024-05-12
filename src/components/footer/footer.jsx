import React from 'react';
import { Link } from 'react-router-dom'; 
import './footer.scss'
import Tiktok from './../../images/footer/tiktok.svg'
import Instagram from './../../images/footer/Instagram.svg'
import Telegram from './../../images/footer/telegram.svg'
import Facebook from './../../images/footer/fecebook.svg'
import Twitter from './../../images/footer/twitter.svg'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__icons">
                <Link to="https://www.tiktok.com/" className="footer__icons__item">
                    <img src={ Tiktok } alt="Tiktok" className="footer__icons__item__icon" />
                </Link>

                <Link to="https://www.instagram.com/" className="footer__icons__item">
                    <img src={ Instagram } alt="Instagram" className="footer__icons__item__icon" />
                </Link>

                <Link to="https://web.telegram.org/" className="footer__icons__item">
                    <img src={ Telegram } alt="Telegram" className="footer__icons__item__icon" />
                </Link>

                <Link to="https://www.facebook.com/" className="footer__icons__item">
                    <img src={ Facebook } alt="Facebook" className="footer__icons__item__icon" />
                </Link>

                <Link to="https://twitter.com/" className="footer__icons__item">
                    <img src= { Twitter } alt="Twitter" className="footer__icons__item__icon" />
                </Link>
            </div>

            <div className="footer__link">
                <Link to='/' className="footer__link__item">Home</Link>
                <Link to='/ContactUs' className="footer__link__item">Contact Us</Link>
                <Link to='/Gallery' className="footer__link__item">Gallery</Link>
                <Link to='/Course' className="footer__link__item">Courses</Link>
            </div>
        </footer>
    )
}

export default Footer;