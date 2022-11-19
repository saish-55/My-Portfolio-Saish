import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import SkillsPercentagePDark from "../components/skills-percentage-p-dark";
import "./portfolio.css";

const Portfolio = (props) => {
  return (
    <div className="animate">
      <div className="portfolio-container">
        <Helmet>
          <title>Portfolio - Saish PortFolio</title>
          <meta property="og:title" content="Portfolio - Saish PortFolio" />
        </Helmet>
        <div className="portfolio-main">


        



          <div className="portfolio-intro-texts">
            <span className="portfolio-myportfolio">S k i l l s</span>
            <span className="portfolio-skills">
              <span>
                My
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <span className="portfolio-text01">Portfolio</span>
            </span>
          </div>
          <span className="portfolio-my-skills">My skills</span>
          <img
            alt="image"
            src="/playground_assets/untitled%20design%20%5B7%5D-500w.png"
            className="portfolio-line-1"
          />
          <SkillsPercentagePDark rootClassName="skills-percentage-p-dark-root-class-name"></SkillsPercentagePDark>
          <img
            alt="image"
            src="/playground_assets/untitled%20design%20%5B7%5D-500w.png"
            className="portfolio-line-2"
          />
          <span className="portfolio-education">Education</span>
          <div className="portfolio-details-1">
            <div className="portfolio-symbol-1">
              <Link to="/portfolio" className="portfolio-navlink">
                <svg viewBox="0 0 1024 1024" className="portfolio-icon">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </Link>
            </div>
            <img
              alt="image"
              src="/playground_assets/untitled%20design%20%5B8%5D-200w.png"
              className="portfolio-line"
            />
            <span className="portfolio-year">2016 - 2019</span>
            <span className="portfolio-main-info">
              <span>High School Diploma</span>
              <br></br>
              <br></br>
              <span>(Computer Engineering)</span>
              <br className="portfolio-text06"></br>
              <br className="portfolio-text07"></br>
              <span>tssm - </span>
              <span className="portfolio-text09">Pune</span>
            </span>
          </div>
          <div className="portfolio-details-2">
            <div className="portfolio-symbol-2">
              <Link to="/portfolio" className="portfolio-navlink01">
                <svg viewBox="0 0 1024 1024" className="portfolio-icon02">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </Link>
            </div>
            <img
              alt="image"
              src="/playground_assets/untitled%20design%20%5B8%5D-200w.png"
              className="portfolio-line-21"
            />
            <span className="portfolio-main-info-2">
              <span>Bachelor&apos;s Degree</span>
              <br></br>
              <br></br>
              <span>(Computer Engineering)</span>
              <br className="portfolio-text14"></br>
              <br className="portfolio-text15"></br>
              <span>Vishwakarma University - </span>
              <span className="portfolio-text17">Pune</span>
            </span>
            <span className="portfolio-year-2">2016 - 2019</span>
          </div>
          <img
            alt="image"
            src="/playground_assets/untitled%20design%20%5B7%5D-500w.png"
            className="portfolio-line-3"
          />
          <span className="portfolio-objective">
            <span>objective</span>
            <br></br>
          </span>
          <span className="portfolio-main-objective">
            <span>Seeking a position as a front-end developer </span>
            <span>where I can </span>
            <span>apply my extensive </span>
            <span>knowledge of </span>
            <span>programming </span>
            <span>frameworks and development </span>
            <span>
              software to
              <span
                dangerouslySetInnerHTML={{
                  __html: " "
                }}
              />
            </span>
            <span>build the front-</span>
            <span>end portion of </span>
            <span>websites and web applications </span>
            <span>using </span>
            <span>JavaScript, React Bootstrap, and MUI, </span>
            <span>enabling users to </span>
            <span>
              access and
              <span
                dangerouslySetInnerHTML={{
                  __html: " "
                }}
              />
            </span>
            <span>interact with the </span>
            <span>site and app. Always looking </span>
            <span>
              out for mentally
              <span
                dangerouslySetInnerHTML={{
                  __html: " "
                }}
              />
            </span>
            <span>challenging environment </span>
            <span>where I can </span>
            <span>utilize my abilities while also </span>
            <span>pushing me forward to gain </span>
            <span>knowledge at </span>
            <span>every step.</span>
          </span>

          <div className="portfolio-sidenavbardark">
            <div className="portfolio-home">
              <div className="portfolio-homebtn">
                <Link to="/" className="portfolio-navlink02">
                  <svg viewBox="0 0 1024 1024" className="portfolio-icon04">
                    <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/" className="portfolio-navlink03 button">
                HOME
              </Link>
            </div>
            <div className="portfolio-about">
              <div className="portfolio-aboutbtn">
                <Link to="/about" className="portfolio-navlink04">
                  <svg
                    viewBox="0 0 731.4285714285713 1024"
                    className="portfolio-icon06"
                  >
                    <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/about" className="portfolio-navlink05 button">
                About
              </Link>
            </div>
            <div className="portfolio-portfolio">
              <div className="portfolio-portfoliobtn">
                <Link to="/portfolio" className="portfolio-navlink06">
                  <svg viewBox="0 0 1024 1024" className="portfolio-icon08">
                    <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/portfolio" className="portfolio-navlink07 button">
                portfolio
              </Link>
            </div>
            <div className="portfolio-contact">
              <div className="portfolio-contactbtn">
                <Link to="/contact" className="portfolio-navlink08">
                  <svg viewBox="0 0 1024 1024" className="portfolio-icon10">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </Link>
              </div>
              <Link to="/contact" className="portfolio-navlink09 button">
                Contact
              </Link>
            </div>
            <Link to="/portfolio-light" className="portfolio-navlink10">
              <div className="portfolio-dark">
                <svg
                  viewBox="0 0 585.1428571428571 1024"
                  className="portfolio-d-b-u-l-b"
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

export default Portfolio;
