import React from 'react'
import "./assets/css/style.css"
export default function App() {

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Homeverse - Find your dream house</title>
      {/* 
    - favicon
  */}
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      {/* 
    - custom css link
  */}
      <link rel="stylesheet" href="./assets/css/style.css" />
      {/* 
    - google font link
  */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* 
    - #HEADER
  */}
      <header className="header" data-header="">
        <div className="overlay" data-overlay="" />
        <div className="header-top">
          <div className="container">
            <ul className="header-top-list">
              <li>
                <a href="mailto:info@homeverse.com" className="header-top-link">
                  {/* <ion-icon name="mail-outline" /> */}
                  <span>info@homeverse.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-link">
                  {/* <ion-icon name="location-outline" /> */}
                  <address>15/A, Nest Tower, NYC</address>
                </a>
              </li>
            </ul>
            <div className="wrapper">
              <ul className="header-top-social-list">
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <ion-icon name="logo-facebook" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <ion-icon name="logo-twitter" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <ion-icon name="logo-instagram" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="header-top-social-link">
                    {/* <ion-icon name="logo-pinterest" /> */}
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
                <span>Search</span>
              </button>
              <button className="header-bottom-actions-btn" aria-label="Profile">
                {/* <ion-icon name="person-outline" /> */}
                <span>Profile</span>
              </button>
              <button className="header-bottom-actions-btn" aria-label="Cart">
                {/* <ion-icon name="cart-outline" /> */}
                <span>Cart</span>
              </button>
              <button
                className="header-bottom-actions-btn"
                data-nav-open-btn=""
                aria-label="Open Menu"
              >
                {/* <ion-icon name="menu-outline" /> */}
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <article>
          {/* 
  - #HERO
*/}
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">
                  {/* <ion-icon name="home" /> */}
                  <span>Real Estate Agency</span>
                </p>
                <h2 className="h1 hero-title">Find Your Dream House By Us</h2>
                <p className="hero-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore.
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
          {/* 
  - #ABOUT
*/}
          <section className="about" id="about">
            <div className="container">
              <figure className="about-banner">
                <img
                  src="./assets/images/about-banner-1.png"
                  alt="House interior"
                />
                <img
                  src="./assets/images/about-banner-2.jpg"
                  alt="House interior"
                  className="abs-img"
                />
              </figure>
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">
                  The Leading Real Estate Rental Marketplace.
                </h2>
                <p className="about-text">
                  Over 39,000 people work for us in more than 70 countries all over
                  the This breadth of global coverage, combined with specialist
                  services
                </p>
                <ul className="about-list">
                  <li className="about-item">
                    <div className="about-item-icon">
                      {/* <ion-icon name="home-outline" /> */}
                    </div>
                    <p className="about-item-text">Smart Home Design</p>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      {/* <ion-icon name="leaf-outline" /> */}
                    </div>
                    <p className="about-item-text">Beautiful Scene Around</p>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      {/* <ion-icon name="wine-outline" /> */}
                    </div>
                    <p className="about-item-text">Exceptional Lifestyle</p>
                  </li>
                  <li className="about-item">
                    <div className="about-item-icon">
                      {/* <ion-icon name="shield-checkmark-outline" /> */}
                    </div>
                    <p className="about-item-text">Complete 24/7 Security</p>
                  </li>
                </ul>
                <p className="callout">
                  "Enimad minim veniam quis nostrud exercitation llamco laboris.
                  Lorem ipsum dolor sit amet"
                </p>
                <a href="#service" className="btn">
                  Our Services
                </a>
              </div>
            </div>
          </section>
          {/* 
  - #SERVICE
*/}
          <section className="service" id="service">
            <div className="container">
              <p className="section-subtitle">Our Services</p>
              <h2 className="h2 section-title">Our Main Focus</h2>
              <ul className="service-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src="./assets/images/service-1.png" alt="Service icon" />
                    </div>
                    <h3 className="h3 card-title">
                      <a href="#">Buy a home</a>
                    </h3>
                    <p className="card-text">
                      over 1 million+ homes for sale available on the website, we
                      can match you with a house you will want to call home.
                    </p>
                    <a href="#" className="card-link">
                      <span>Find A Home</span>
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src="./assets/images/service-2.png" alt="Service icon" />
                    </div>
                    <h3 className="h3 card-title">
                      <a href="#">Rent a home</a>
                    </h3>
                    <p className="card-text">
                      over 1 million+ homes for sale available on the website, we
                      can match you with a house you will want to call home.
                    </p>
                    <a href="#" className="card-link">
                      <span>Find A Home</span>
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src="./assets/images/service-3.png" alt="Service icon" />
                    </div>
                    <h3 className="h3 card-title">
                      <a href="#">Sell a home</a>
                    </h3>
                    <p className="card-text">
                      over 1 million+ homes for sale available on the website, we
                      can match you with a house you will want to call home.
                    </p>
                    <a href="#" className="card-link">
                      <span>Find A Home</span>
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
  - #PROPERTY
*/}
          <section className="property" id="property">
            <div className="container">
              <p className="section-subtitle">Properties</p>
              <h2 className="h2 section-title">Featured Listings</h2>
              <ul className="property-list has-scrollbar">
                <li>
                  <div className="property-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/property-1.jpg"
                          alt="New Apartment Nice View"
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge green">For Rent</div>
                      <div className="banner-actions">
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="location" /> */}
                          <address>Belmont Gardens, Chicago</address>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="camera" /> */}
                          <span>4</span>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="film" /> */}
                          <span>2</span>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="card-price">
                        <strong>$34,900</strong>/Month
                      </div>
                      <h3 className="h3 card-title">
                        <a href="#">New Apartment Nice View</a>
                      </h3>
                      <p className="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                        Renovated With New Wood
                      </p>
                      <ul className="card-list">
                        <li className="card-item">
                          <strong>3</strong>
                          {/* <ion-icon name="bed-outline" /> */}
                          <span>Bedrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>2</strong>
                          {/* <ion-icon name="man-outline" /> */}
                          <span>Bathrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>3450</strong>
                          {/* <ion-icon name="square-outline" /> */}
                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="card-author">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author.jpg"
                            alt="William Seklo"
                            className="w-100"
                          />
                        </figure>
                        <div>
                          <p className="author-name">
                            <a href="#">William Seklo</a>
                          </p>
                          <p className="author-title">Estate Agents</p>
                        </div>
                      </div>
                      <div className="card-footer-actions">
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="resize-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="heart-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="add-circle-outline" /> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="property-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/property-2.jpg"
                          alt="Modern Apartments"
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge orange">For Sales</div>
                      <div className="banner-actions">
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="location" /> */}
                          <address>Belmont Gardens, Chicago</address>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="camera" /> */}
                          <span>4</span>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="film" /> */}
                          <span>2</span>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="card-price">
                        <strong>$34,900</strong>/Month
                      </div>
                      <h3 className="h3 card-title">
                        <a href="#">Modern Apartments</a>
                      </h3>
                      <p className="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                        Renovated With New Wood
                      </p>
                      <ul className="card-list">
                        <li className="card-item">
                          <strong>3</strong>
                          {/* <ion-icon name="bed-outline" /> */}
                          <span>Bedrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>2</strong>
                          {/* <ion-icon name="man-outline" /> */}
                          <span>Bathrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>3450</strong>
                          {/* <ion-icon name="square-outline" /> */}
                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="card-author">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author.jpg"
                            alt="William Seklo"
                            className="w-100"
                          />
                        </figure>
                        <div>
                          <p className="author-name">
                            <a href="#">William Seklo</a>
                          </p>
                          <p className="author-title">Estate Agents</p>
                        </div>
                      </div>
                      <div className="card-footer-actions">
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="resize-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="heart-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="add-circle-outline" /> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="property-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/property-3.jpg"
                          alt="Comfortable Apartment"
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge green">For Rent</div>
                      <div className="banner-actions">
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="location" /> */}
                          <address>Belmont Gardens, Chicago</address>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="camera" /> */}
                          <span>4</span>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="film" /> */}
                          <span>2</span>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="card-price">
                        <strong>$34,900</strong>/Month
                      </div>
                      <h3 className="h3 card-title">
                        <a href="#">Comfortable Apartment</a>
                      </h3>
                      <p className="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                        Renovated With New Wood
                      </p>
                      <ul className="card-list">
                        <li className="card-item">
                          <strong>3</strong>
                          {/* <ion-icon name="bed-outline" /> */}
                          <span>Bedrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>2</strong>
                          {/* <ion-icon name="man-outline" /> */}
                          <span>Bathrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>3450</strong>
                          {/* <ion-icon name="square-outline" /> */}
                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="card-author">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author.jpg"
                            alt="William Seklo"
                            className="w-100"
                          />
                        </figure>
                        <div>
                          <p className="author-name">
                            <a href="#">William Seklo</a>
                          </p>
                          <p className="author-title">Estate Agents</p>
                        </div>
                      </div>
                      <div className="card-footer-actions">
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="resize-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="heart-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="add-circle-outline" /> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="property-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/property-4.png"
                          alt="Luxury villa in Rego Park"
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge green">For Rent</div>
                      <div className="banner-actions">
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="location" /> */}
                          <address>Belmont Gardens, Chicago</address>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="camera" /> */}
                          <span>4</span>
                        </button>
                        <button className="banner-actions-btn">
                          {/* <ion-icon name="film" /> */}
                          <span>2</span>
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <div className="card-price">
                        <strong>$34,900</strong>/Month
                      </div>
                      <h3 className="h3 card-title">
                        <a href="#">Luxury villa in Rego Park</a>
                      </h3>
                      <p className="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                        Renovated With New Wood
                      </p>
                      <ul className="card-list">
                        <li className="card-item">
                          <strong>3</strong>
                          {/* previously: <ion-icon name="bed-outline" /> */}
                          {/* <ion-icon name="bed-outline" /> */}
                          <span>Bedrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>2</strong>
                          {/* <ion-icon name="man-outline" /> */}
                          <span>Bathrooms</span>
                        </li>
                        <li className="card-item">
                          <strong>3450</strong>
                          {/* <ion-icon name="square-outline" /> */}
                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <div className="card-author">
                        <figure className="author-avatar">
                          <img
                            src="./assets/images/author.jpg"
                            alt="William Seklo"
                            className="w-100"
                          />
                        </figure>
                        <div>
                          <p className="author-name">
                            <a href="#">William Seklo</a>
                          </p>
                          <p className="author-title">Estate Agents</p>
                        </div>
                      </div>
                      <div className="card-footer-actions">
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="resize-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="heart-outline" /> */}
                        </button>
                        <button className="card-footer-actions-btn">
                          {/* <ion-icon name="add-circle-outline" /> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
  - #FEATURES
*/}
          <section className="features">
            <div className="container">
              <p className="section-subtitle">Our Aminities</p>
              <h2 className="h2 section-title">Building Aminities</h2>
              <ul className="features-list">
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="car-sport-outline" /> */}
                    </div>
                    <h3 className="card-title">Parking Space</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="water-outline" /> */}
                    </div>
                    <h3 className="card-title">Swimming Pool</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="shield-checkmark-outline" /> */}
                    </div>
                    <h3 className="card-title">Private Security</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="fitness-outline" /> */}
                    </div>
                    <h3 className="card-title">Medical Center</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="library-outline" /> */}
                    </div>
                    <h3 className="card-title">Library Area</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="bed-outline" /> */}
                    </div>
                    <h3 className="card-title">King Size Beds</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="home-outline" /> */}
                    </div>
                    <h3 className="card-title">Smart Homes</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      {/* <ion-icon name="football-outline" /> */}
                    </div>
                    <h3 className="card-title">Kid’s Playland</h3>
                    <div className="card-btn">
                      {/* <ion-icon name="arrow-forward-outline" /> */}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* 
  - #BLOG
*/}
          <section className="blog" id="blog">
            <div className="container">
              <p className="section-subtitle">News &amp; Blogs</p>
              <h2 className="h2 section-title">Leatest News Feeds</h2>
              <ul className="blog-list has-scrollbar">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/blog-1.png"
                        alt="The Most Inspiring Interior Design Of 2021"
                        className="w-100"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-content-top">
                        <ul className="card-meta-list">
                          <li>
                            <a href="#" className="card-meta-link">
                              {/* <ion-icon name="person" /> */}
                              <span>by: Admin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="card-meta-link">
                              {/* <ion-icon name="pricetags" /> */}
                              <span>Interior</span>
                            </a>
                          </li>
                        </ul>
                        <h3 className="h3 blog-title">
                          <a href="#">The Most Inspiring Interior Design Of 2021</a>
                        </h3>
                      </div>
                      <div className="blog-content-bottom">
                        <div className="publish-date">
                          {/* <ion-icon name="calendar" /> */}
                          <time dateTime="2022-27-04">Apr 27, 2022</time>
                        </div>
                        <a href="#" className="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/blog-2.jpg"
                        alt="Recent Commercial Real Estate Transactions"
                        className="w-100"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-content-top">
                        <ul className="card-meta-list">
                          <li>
                            <a href="#" className="card-meta-link">
                              {/* <ion-icon name="person" /> */}
                              <span>by: Admin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="card-meta-link">
                              {/* <ion-icon name="pricetags" /> */}
                              <span>Estate</span>
                            </a>
                          </li>
                        </ul>
                        <h3 className="h3 blog-title">
                          <a href="#">Recent Commercial Real Estate Transactions</a>
                        </h3>
                      </div>
                      <div className="blog-content-bottom">
                        <div className="publish-date">
                          {/* <ion-icon name="calendar" /> */}
                          <time dateTime="2022-27-04">Apr 27, 2022</time>
                        </div>
                        <a href="#" className="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/blog-3.jpg"
                        alt="Renovating a Living Room? Experts Share Their Secrets"
                        className="w-100"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-content-top">
                        <ul className="card-meta-list">
                          <li>
                            <a href="#" className="card-meta-link">
                              {/* <ion-icon name="person" /> */}
                              <span>by: Admin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="card-meta-link">
                              {/* <ion-icon name="pricetags" /> */}
                              <span>Room</span>
                            </a>
                          </li>
                        </ul>
                        <h3 className="h3 blog-title">
                          <a href="#">
                            Renovating a Living Room? Experts Share Their Secrets
                          </a>
                        </h3>
                      </div>
                      <div className="blog-content-bottom">
                        <div className="publish-date">
                          {/* <ion-icon name="calendar" /> */}
                          <time dateTime="2022-27-04">Apr 27, 2022</time>
                        </div>
                        <a href="#" className="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
  - #CTA
*/}
          <section className="cta">
            <div className="container">
              <div className="cta-card">
                <div className="card-content">
                  <h2 className="h2 card-title">Looking for a dream home?</h2>
                  <p className="card-text">
                    We can help you realize your dream of a new home
                  </p>
                </div>
                <button className="btn cta-btn">
                  <span>Explore Properties</span>
                  {/* <ion-icon name="arrow-forward-outline" /> */}
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>
      {/* 
    - #FOOTER
  */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="./assets/images/logo-light.png" alt="Homeverse logo" />
              </a>
              <p className="section-text">
                Lorem Ipsum is simply dummy text of the and typesetting industry.
                Lorem Ipsum is dummy text of the printing.
              </p>
              <ul className="contact-list">
                <li>
                  <a href="#" className="contact-link">
                    {/* <ion-icon name="location-outline" /> */}
                    <address>Brooklyn, New York, United States</address>
                  </a>
                </li>
                <li>
                  <a href="tel:+0123456789" className="contact-link">
                    {/* <ion-icon name="call-outline" /> */}
                    <span>+0123-456789</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@homeverse.com" className="contact-link">
                    {/* <ion-icon name="mail-outline" /> */}
                    <span>contact@homeverse.com</span>
                  </a>
                </li>
              </ul>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-facebook" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-twitter" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-linkedin" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-youtube" /> */}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Company</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Locations Map
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Services</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Order tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Wish List
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    My account
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotional Offers
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Customer Care</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    My account
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Wish List
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Order tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              © 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* 
    - custom js link
  */}
      {/* 
    - ionicon link
  */}
    </>)
}