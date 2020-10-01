import React from 'react'
// import Authorized from './Authorized/Authorized';
import './Header.scss';
import NotAuthorized from './NotAuthorized/NotAuthorized';

export const Header = ()=>{
  let date = new Date(),
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return(
    <header>
      <nav className="navigation">
        <div className="center">
          <div className="logo">
            <img src={require('./img/logo.svg')} alt="" className="main-logo-img"/>
          </div>
          {/* <Authorized/> */}
          <NotAuthorized/>
        </div>
      </nav>
      <div className="prewiew-block center">
        <div className="main-logo">
          <img src={require('./img/logo.png')} alt="main-logo"/>
        </div>
        <div className="now">
          <div className="date"><span>{`${days[date.getDay()]} . ${date.getDate()} ${date.toLocaleString('en', { month: 'long' })} . ${date.getFullYear()}`}</span></div>
            <div className="socials">
              <a href="http" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="http" className="social-link"><i className="fab fa-github"></i></a>
              <a href="http" className="social-link"><i className="fab fa-telegram-plane"></i></a>
              <a href="http" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
      </div>
    </header>
  )
}
