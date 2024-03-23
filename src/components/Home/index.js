import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faKeyboard, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Home = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a className="link" href="#">Gmail</a>
            </li>
            <li>
              <a className="link" href="#">Images</a>
            </li>
            <li>
              <div className="circle-shadow">
                <a className="menu-icon" href="#"><FontAwesomeIcon icon={faBars} /></a>
              </div>
            </li>
            <li>
              <div className="circle-shadow">
                <a className="user-icon" href="#"><span>J</span></a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <section className="content-section">
        <div className="content-wrapper">
          <img className="logo-img" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input id="search-input" className="search-input" type="text" />
            <FontAwesomeIcon icon={faKeyboard} />
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          <div className="search-btns">
            <button className="google-search-btn">Google Search</button>
            <button className="lucky-search-btn">I'm Feeling Lucky</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
