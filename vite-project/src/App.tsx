// App.jsx
import React from "react";
import "./assets/css/style.css"; 
// import {
//   MailOutline,
//   LocationOutline,
//   LogoFacebook,
//   LogoTwitter,
//   LogoInstagram,
//   LogoPinterest,
//   CloseOutline,
//   SearchOutline,
//   PersonOutline,
//   CartOutline,
//   MenuOutline,
//   HomeOutline,
// } from "react-icons";

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
          <div className="container">
            <ul className="header-top-list">
              <li>
                <a href="mailto:info@homeverse.com" className="header-top-link">
                  {/* <MailOutline height="20px" width="20px" color="#333" /> */}
                  <span>info@homeverse.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-link">
                  {/* <LocationOutline height="20px" width="20px" color="#333" /> */}
                  <address>15/A, Nest Tower, NYC</address>
                </a>
              </li>
            </ul>

            <div className="wrapper">
              <ul className="header-top-social-list">
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <LogoFacebook height="20px" width="20px" color="#1877F2" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <LogoTwitter height="20px" width="20px" color="#1DA1F2" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <LogoInstagram height="20px" width="20px" color="#E4405F" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <LogoPinterest height="20px" width="20px" color="#BD081C" /> */}
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

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src="./assets/images/logo.png" alt="Homeverse logo" />
                </a>
                <button
                  className="nav-close-btn"
                  data-nav-close-btn
                  aria-label="Close Menu"
                >
                  {/* <CloseOutline height="25px" width="25px" /> */}
                </button>
              </div>

              <div className="navbar-bottom">
                <ul className="navbar-list">
                  {["Home", "About", "Service", "Property", "Blog", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="navbar-link"
                          data-nav-link
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </nav>

            <div className="header-bottom-actions">
              <button className="header-bottom-actions-btn" aria-label="Search">
                {/* <SearchOutline height="20px" width="20px" /> */}
                <span>Search</span>
              </button>
              <button className="header-bottom-actions-btn" aria-label="Profile">
                {/* <PersonOutline height="20px" width="20px" /> */}
                <span>Profile</span>
              </button>
              <button className="header-bottom-actions-btn" aria-label="Cart">
                {/* <CartOutline height="20px" width="20px" /> */}
                <span>Cart</span>
              </button>
              <button
                className="header-bottom-actions-btn"
                data-nav-open-btn
                aria-label="Open Menu"
              >
                {/* <MenuOutline height="20px" width="20px" /> */}
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">
                  {/* <HomeOutline height="24px" width="24px" /> */}
                  <span>Real Estate Agency</span>
                </p>
                <h2 className="h1 hero-title">Find Your Dream House By Us</h2>
                <p className="hero-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <button className="btn">Make An Enquiry</button>
              </div>
              <figure className="hero-banner">
                <img
                  src="./assets/images/hero-banner.png"
                  alt="Modern house model"
                  className="w-100"
                />
              </figure>
            </div>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
