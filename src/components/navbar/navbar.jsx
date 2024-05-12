import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.scss';
import Logo from './../../images/navbar/logofornav.jpg';

function NavBar() {
  return (
    <nav className="nav">
      <span className="nav__top-line"></span>

      <div className="nav__container">
        <img src={ Logo } alt="" className="nav__container__img" />

        <div className="nav__container__menu">
          <div className="nav__container__menu__auth">
            <Link to="/Login" className="nav__container__menu__auth__login">
              Log In
            </Link>
            <Link to="/Register" className="nav__container__menu__auth__singin">
              Sing In
            </Link>
          </div>

          <div className="nav__container__menu__links">
            <Link to='/' className="nav__container__menu__links__item active">Home</Link>
            <Link to='/ContactUs' className="nav__container__menu__links__item">Contact Us</Link>
            <Link to='/Gallery' className="nav__container__menu__links__item">Gallery</Link>
            <Link to='/Course' className="nav__container__menu__links__item">Courses</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
