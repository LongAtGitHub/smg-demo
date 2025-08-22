import React from "react";
import "./assets/css/style.css";
import Header from "./header";
import {
  IoMailOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoBedOutline,
  IoManOutline,
  IoSquareOutline,
  IoArrowForwardOutline,
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
  IoLocation,
} from "react-icons/io5";
import Hero from "./Hero";
import About from "./About";

export default function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Homeverse - Find your dream house</title>
      {/* favicon */}
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      {/* custom css link */}
      <link rel="stylesheet" href="./assets/css/style.css" />
      {/* google font link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* #HEADER */}
      <Header />

      <main>
        <article>
          {/* #HERO */}
          <Hero />

          {/* #ABOUT */}
          <About />

          {/* #SERVICE */}
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
                      <IoArrowForwardOutline />
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
                      <IoArrowForwardOutline />
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
                      <IoArrowForwardOutline />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #PROPERTY */}
          <section className="property" id="property">
            <div className="container">
              <p className="section-subtitle">Properties</p>
              <h2 className="h2 section-title">Featured Listings</h2>

              <ul className="property-list has-scrollbar">
                {/* Card 1 */}
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
                          <IoLocation />
                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button className="banner-actions-btn">
                          <IoCamera />
                          <span>4</span>
                        </button>

                        <button className="banner-actions-btn">
                          <IoFilm />
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
                          <IoBedOutline />
                          <span>Bedrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>2</strong>
                          <IoManOutline />
                          <span>Bathrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>3450</strong>
                          <IoSquareOutline />
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
                          <IoResizeOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoHeartOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoAddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Card 2 */}
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
                          <IoLocation />
                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button className="banner-actions-btn">
                          <IoCamera />
                          <span>4</span>
                        </button>

                        <button className="banner-actions-btn">
                          <IoFilm />
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
                          <IoBedOutline />
                          <span>Bedrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>2</strong>
                          <IoManOutline />
                          <span>Bathrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>3450</strong>
                          <IoSquareOutline />
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
                          <IoResizeOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoHeartOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoAddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Card 3 */}
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
                          <IoLocation />
                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button className="banner-actions-btn">
                          <IoCamera />
                          <span>4</span>
                        </button>

                        <button className="banner-actions-btn">
                          <IoFilm />
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
                          <IoBedOutline />
                          <span>Bedrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>2</strong>
                          <IoManOutline />
                          <span>Bathrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>3450</strong>
                          <IoSquareOutline />
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
                          <IoResizeOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoHeartOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoAddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Card 4 */}
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
                          <IoLocation />
                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button className="banner-actions-btn">
                          <IoCamera />
                          <span>4</span>
                        </button>

                        <button className="banner-actions-btn">
                          <IoFilm />
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
                          <IoBedOutline />
                          <span>Bedrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>2</strong>
                          <IoManOutline />
                          <span>Bathrooms</span>
                        </li>

                        <li className="card-item">
                          <strong>3450</strong>
                          <IoSquareOutline />
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
                          <IoResizeOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoHeartOutline />
                        </button>
                        <button className="card-footer-actions-btn">
                          <IoAddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #FEATURES */}
          <section className="features">
            <div className="container">
              <p className="section-subtitle">Our Aminities</p>
              <h2 className="h2 section-title">Building Aminities</h2>

              <ul className="features-list">
                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoCarSportOutline />
                    </div>
                    <h3 className="card-title">Parking Space</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoWaterOutline />
                    </div>
                    <h3 className="card-title">Swimming Pool</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoShieldCheckmarkOutline />
                    </div>
                    <h3 className="card-title">Private Security</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoFitnessOutline />
                    </div>
                    <h3 className="card-title">Medical Center</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoLibraryOutline />
                    </div>
                    <h3 className="card-title">Library Area</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoBedOutline />
                    </div>
                    <h3 className="card-title">King Size Beds</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoHomeOutline />
                    </div>
                    <h3 className="card-title">Smart Homes</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="features-card">
                    <div className="card-icon">
                      <IoFootballOutline />
                    </div>
                    <h3 className="card-title">Kid’s Playland</h3>
                    <div className="card-btn">
                      <IoArrowForwardOutline />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* #BLOG */}
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
                              <IoPerson />
                              <span>by: Admin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="card-meta-link">
                              <IoPricetagsOutline />
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
                          <IoCalendarOutline />
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
                              <IoPerson />
                              <span>by: Admin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="card-meta-link">
                              <IoPricetagsOutline />
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
                          <IoCalendarOutline />
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
                              <IoPerson />
                              <span>by: Admin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="card-meta-link">
                              <IoPricetagsOutline />
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
                          <IoCalendarOutline />
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

          {/* #CTA */}
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
                  <IoArrowForwardOutline />
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* #FOOTER */}
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
                    <IoLocationOutline />
                    <address>Brooklyn, New York, United States</address>
                  </a>
                </li>

                <li>
                  <a href="tel:+0123456789" className="contact-link">
                    <IoCallOutline />
                    <span>+0123-456789</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:contact@homeverse.com" className="contact-link">
                    <IoMailOutline />
                    <span>contact@homeverse.com</span>
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IoLogoYoutube />
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
      {/* custom js link & ionicon link removed for React setup */}
    </>
  );
}
