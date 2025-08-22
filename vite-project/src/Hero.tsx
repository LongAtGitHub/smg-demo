import React from 'react'
import { IoHome } from 'react-icons/io5'
export default function Hero() {
      return (
            <section className="hero" id="home">
                  <div className="container">
                        <div className="hero-content">
                              <p className="hero-subtitle">
                                    {/* <ion-icon name="home" /> */}
                                    <IoHome />
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
      )
}
