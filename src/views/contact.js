import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import DetailsCDark from "../components/details-c-dark";
import "./contact.css";

const Contact = (props) => {
  return (
    <div className="animate">
      <div className="contact-container">
        <Helmet>
          <title>Contact - Saish PortFolio</title>
          <meta property="og:title" content="Contact - Saish PortFolio" />
        </Helmet>
        <div className="contact-main">
          <div className="contact-intro-text">
            <span className="contact-text">contact</span>
            <span className="contact-text1">
              <span>
                get in
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <span className="contact-text3">touch</span>
            </span>
          </div>
          <input
            type="Name"
            required
            placeholder="YOUR NAME"
            className="contact-name input"
          />
          <input
            type="Name"
            required
            placeholder="YOUR EMAIL"
            className="contact-email input"
          />
          <input
            type="Name"
            required
            placeholder="YOUR SUBJECT"
            className="contact-subject input"
          />
          <textarea
            placeholder="YOUR MESSAGE"
            className="contact-message textarea"
          ></textarea>
          <div className="contact-sendmsg-btn button">
            <span className="contact-text4">Send message</span>
            <div className="contact-container1">
              <svg
                viewBox="0 0 1025.1702857142857 1024"
                className="contact-icon"
              >
                <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
              </svg>
            </div>
          </div>
          <span className="contact-dont">DOn&apos;t be shy !</span>
          <span className="contact-info">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </span>
          <DetailsCDark rootClassName="details-c-dark-root-class-name"></DetailsCDark>
          <div className="contact-sidenavbardark">
            <div className="contact-home">
              <div className="contact-homebtn">
                <Link to="/" className="contact-navlink">
                  <svg viewBox="0 0 1024 1024" className="contact-icon02">
                    <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/" className="contact-navlink1 button">
                HOME
              </Link>
            </div>
            <div className="contact-about">
              <div className="contact-aboutbtn">
                <Link to="/about" className="contact-navlink2">
                  <svg
                    viewBox="0 0 731.4285714285713 1024"
                    className="contact-icon04"
                  >
                    <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/about" className="contact-navlink3 button">
                About
              </Link>
            </div>
            <div className="contact-portfolio">
              <div className="contact-portfoliobtn">
                <Link to="/portfolio" className="contact-navlink4">
                  <svg viewBox="0 0 1024 1024" className="contact-icon06">
                    <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/portfolio" className="contact-navlink5 button">
                portfolio
              </Link>
            </div>
            <div className="contact-contact">
              <div className="contact-contactbtn">
                <Link to="/contact" className="contact-navlink6">
                  <svg viewBox="0 0 1024 1024" className="contact-icon08">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/contact" className="contact-navlink7 button">
                Contact
              </Link>
            </div>
            <Link to="/contact-light" className="contact-navlink8">
              <div className="contact-dark">
                <svg
                  viewBox="0 0 585.1428571428571 1024"
                  className="contact-d-b-u-l-b"
                >
                  <path d="M420.571 329.143c0 9.714-8.571 18.286-18.286 18.286s-18.286-8.571-18.286-18.286c0-39.429-61.143-54.857-91.429-54.857-9.714 0-18.286-8.571-18.286-18.286s8.571-18.286 18.286-18.286c53.143 0 128 28 128 91.429zM512 329.143c0-114.286-116-182.857-219.429-182.857s-219.429 68.571-219.429 182.857c0 36.571 14.857 74.857 38.857 102.857 10.857 12.571 23.429 24.571 34.857 37.714 40.571 48.571 74.857 105.714 80.571 170.286h130.286c5.714-64.571 40-121.714 80.571-170.286 11.429-13.143 24-25.143 34.857-37.714 24-28 38.857-66.286 38.857-102.857zM585.143 329.143c0 58.857-19.429 109.714-58.857 153.143s-91.429 104.571-96 165.714c16.571 9.714 26.857 28 26.857 46.857 0 13.714-5.143 26.857-14.286 36.571 9.143 9.714 14.286 22.857 14.286 36.571 0 18.857-9.714 36-25.714 46.286 4.571 8 7.429 17.714 7.429 26.857 0 37.143-29.143 54.857-62.286 54.857-14.857 33.143-48 54.857-84 54.857s-69.143-21.714-84-54.857c-33.143 0-62.286-17.714-62.286-54.857 0-9.143 2.857-18.857 7.429-26.857-16-10.286-25.714-27.429-25.714-46.286 0-13.714 5.143-26.857 14.286-36.571-9.143-9.714-14.286-22.857-14.286-36.571 0-18.857 10.286-37.143 26.857-46.857-4.571-61.143-56.571-122.286-96-165.714s-58.857-94.286-58.857-153.143c0-155.429 148-256 292.571-256s292.571 100.571 292.571 256z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
