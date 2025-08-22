import React from 'react'
import {
      IoMailOutline,
      IoLocationOutline,
      IoLogoFacebook,
      IoLogoTwitter,
      IoLogoInstagram,
      IoLogoPinterest,
      IoLogoLinkedin,
      IoLogoYoutube,
      IoSearchOutline,
      IoPersonOutline,
      IoCartOutline,
      IoMenuOutline,
      IoCloseOutline,
      IoBedOutline,
      IoManOutline,
      IoSquareOutline,
      IoArrowForwardOutline,
      IoLeafOutline,
      IoWineOutline,
      IoShieldCheckmarkOutline,
      IoCarSportOutline,
      IoWaterOutline,
      IoFitnessOutline,
      IoLibraryOutline,
      IoFootballOutline,
      IoCallOutline,
      IoCalendarOutline,
      IoPricetagsOutline,
      IoPerson,
      IoCamera,
      IoFilm,
      IoAddCircleOutline,
      IoHeartOutline,
      IoResizeOutline,
      IoHomeOutline,
      IoHome,
} from "react-icons/io5"
export default function Header() {
      return (
            <header className="header" data-header="">
                  <div className="overlay" data-overlay="" />
                  <div className="header-top">
                        <div className="container">
                              <ul className="header-top-list">
                                    <li>
                                          <a href="mailto:info@homeverse.com" className="header-top-link">
                                                <IoMailOutline />
                                                <span>info@homeverse.com</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="#" className="header-top-link">
                                                {/* <ion-icon name="location-outline" /> */}
                                                <IoLocationOutline />
                                                <address>15/A, Nest Tower, NYC</address>
                                          </a>
                                    </li>
                              </ul>
                              <div className="wrapper">
                                    <ul className="header-top-social-list">
                                          <li>
                                                <a href="#" className="header-top-social-link">
                                                      {/* <ion-icon name="logo-facebook" /> */}
                                                      <IoLogoFacebook />
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#" className="header-top-social-link">
                                                      {/* <ion-icon name="logo-twitter" /> */}
                                                      <IoLogoTwitter />
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#" className="header-top-social-link">
                                                      {/* <ion-icon name="logo-instagram" /> */}
                                                      <IoLogoInstagram />
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#" className="header-top-social-link">
                                                      {/* <ion-icon name="logo-pinterest" /> */}
                                                      <IoLogoPinterest />
                                                </a>
                                          </li>
                                    </ul>
                                    <button className="header-top-btn">Add Listing</button>
                              </div>
                        </div>
                  </div>
                  <div className="header-bottom">
                        <div className="container">
                              <a href="#" className="logo">
                                    <img src="./assets/images/logo.png" alt="Homeverse logo" />
                              </a>
                              <nav className="navbar" data-navbar="">
                                    <div className="navbar-top">
                                          <a href="#" className="logo">
                                                <img src="./assets/images/logo.png" alt="Homeverse logo" />
                                          </a>
                                          <button
                                                className="nav-close-btn"
                                                data-nav-close-btn=""
                                                aria-label="Close Menu"
                                          >
                                                {/* <ion-icon name="close-outline" /> */}
                                                <IoCloseOutline />
                                          </button>
                                    </div>
                                    <div className="navbar-bottom">
                                          <ul className="navbar-list">
                                                <li>
                                                      <a href="#home" className="navbar-link" data-nav-link="">
                                                            Home
                                                      </a>
                                                </li>
                                                <li>
                                                      <a href="#about" className="navbar-link" data-nav-link="">
                                                            About
                                                      </a>
                                                </li>
                                                <li>
                                                      <a href="#service" className="navbar-link" data-nav-link="">
                                                            Service
                                                      </a>
                                                </li>
                                                <li>
                                                      <a href="#property" className="navbar-link" data-nav-link="">
                                                            Property
                                                      </a>
                                                </li>
                                                <li>
                                                      <a href="#blog" className="navbar-link" data-nav-link="">
                                                            Blog
                                                      </a>
                                                </li>
                                                <li>
                                                      <a href="#contact" className="navbar-link" data-nav-link="">
                                                            Contact
                                                      </a>
                                                </li>
                                          </ul>
                                    </div>
                              </nav>
                              <div className="header-bottom-actions">
                                    <button className="header-bottom-actions-btn" aria-label="Search">
                                          {/* <ion-icon name="search-outline" /> */}
                                          <IoSearchOutline />
                                          <span>Search</span>
                                    </button>
                                    <button className="header-bottom-actions-btn" aria-label="Profile">
                                          {/* <ion-icon name="person-outline" /> */}
                                          <IoPersonOutline />
                                          <span>Profile</span>
                                    </button>
                                    <button className="header-bottom-actions-btn" aria-label="Cart">
                                          {/* <ion-icon name="cart-outline" /> */}
                                          <IoCartOutline />
                                          <span>Cart</span>
                                    </button>
                                    <button
                                          className="header-bottom-actions-btn"
                                          data-nav-open-btn=""
                                          aria-label="Open Menu"
                                    >
                                          {/* <ion-icon name="menu-outline" /> */}
                                          <IoMenuOutline />
                                          <span>Menu</span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </header>
      )
}
