import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import DetailsCLight from "../components/details-c-light";
import "./contact-light.css";

const ContactLight = (props) => {
  return (
    <div className="animate">
      <div className="contact-light-container">
        <Helmet>
          <title>Contact-Light - Saish PortFolio</title>
          <meta property="og:title" content="Contact-Light - Saish PortFolio" />
        </Helmet>
        <div className="contact-light-main">
          <div className="contact-light-intro-text">
            <span className="contact-light-text">contact</span>
            <span className="contact-light-text1">
              <span className="contact-light-text2">get in</span>
              <span className="contact-light-text3">
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <span className="contact-light-text4">touch</span>
            </span>
          </div>
          <input
            type="Name"
            required
            placeholder="YOUR NAME"
            className="contact-light-name input"
          />
          <input
            type="Name"
            required
            placeholder="YOUR EMAIL"
            className="contact-light-email input"
          />
          <input
            type="Name"
            required
            placeholder="YOUR SUBJECT"
            className="contact-light-subject input"
          />
          <textarea
            placeholder="YOUR MESSAGE"
            className="contact-light-message textarea"
          ></textarea>
          <div className="contact-light-sendmsg-btn button">
            <span className="contact-light-text5">Send message</span>
            <div className="contact-light-container1">
              <svg
                viewBox="0 0 1025.1702857142857 1024"
                className="contact-light-icon"
              >
                <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
              </svg>
            </div>
          </div>
          <span className="contact-light-dont">DOn&apos;t be shy !</span>
          <span className="contact-light-info">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </span>
          <DetailsCLight rootClassName="details-c-light-root-class-name"></DetailsCLight>
          <div className="contact-light-sidenavbardark">
            <div className="contact-light-home">
              <div className="contact-light-homebtn">
                <Link to="/home-light" className="contact-light-navlink">
                  <svg viewBox="0 0 1024 1024" className="contact-light-icon02">
                    <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/home-light" className="contact-light-navlink1 button">
                HOME
              </Link>
            </div>
            <div className="contact-light-about">
              <div className="contact-light-aboutbtn">
                <Link to="/about-light" className="contact-light-navlink2">
                  <svg
                    viewBox="0 0 731.4285714285713 1024"
                    className="contact-light-icon04"
                  >
                    <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/about-light" className="contact-light-navlink3 button">
                About
              </Link>
            </div>
            <div className="contact-light-portfolio">
              <div className="contact-light-portfoliobtn">
                <Link to="/portfolio-light" className="contact-light-navlink4">
                  <svg viewBox="0 0 1024 1024" className="contact-light-icon06">
                    <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                  </svg>
                </Link>
              </div>
              <Link
                to="/portfolio-light"
                className="contact-light-navlink5 button"
              >
                portfolio
              </Link>
            </div>
            <div className="contact-light-contact">
              <div className="contact-light-contactbtn">
                <Link to="/contact-light" className="contact-light-navlink6">
                  <svg viewBox="0 0 1024 1024" className="contact-light-icon08">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </Link>
              </div>
               <Link
                to="/contact-light"
                className="contact-light-navlink7 button"
              >
                Contact
              </Link>
            </div>
            <Link to="/contact" className="contact-light-navlink8">
              <div className="contact-light-dark">
                <svg
                  viewBox="0 0 843.4102857142857 1024"
                  className="contact-light-moon"
                >
                  <path d="M721.143 744.571c-20.571 3.429-41.714 5.143-62.857 5.143-212 0-384-172-384-384 0-72.571 21.143-143.429 59.429-204-152 45.143-260.571 184.571-260.571 350.286 0 201.714 164 365.714 365.714 365.714 110.286 0 213.714-50.286 282.286-133.143zM837.143 696c-71.429 154.857-228 254.857-398.286 254.857-241.714 0-438.857-197.143-438.857-438.857 0-237.143 185.714-429.714 422.286-438.286 16-0.571 29.143 8.571 34.857 22.286 6.286 14.286 2.286 30.857-8.571 41.143-65.143 59.429-101.143 140.571-101.143 228.571 0 171.429 139.429 310.857 310.857 310.857 45.143 0 88.571-9.714 130.286-29.143 14.286-6.286 30.286-3.429 41.143 7.429s13.714 27.429 7.429 41.143z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLight;
