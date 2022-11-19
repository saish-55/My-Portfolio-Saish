import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import SkillsPercentagePLight from "../components/skills-percentage-p-light";
import "./portfolio-light.css";

const PortfolioLight = (props) => {
  return (
    <div className="animate">
      <div className="portfolio-light-container">
        <Helmet>
          <title>Portfolio-Light - Saish PortFolio</title>
          <meta
            property="og:title"
            content="Portfolio-Light - Saish PortFolio"
          />
        </Helmet>
        <div className="portfolio-light-main">
          <div className="portfolio-light-intro-texts">
            <span className="portfolio-light-myportfolio">S k i l l s</span>
            <span className="portfolio-light-skills">
              <span className="portfolio-light-text">My</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <span className="portfolio-light-text02">Portfolio</span>
            </span>
          </div>
          <span className="portfolio-light-my-skills">My skills</span>
          <SkillsPercentagePLight rootClassName="skills-percentage-p-light-root-class-name"></SkillsPercentagePLight>
          <span className="portfolio-light-education">Education</span>
          <div className="portfolio-light-details-1">
            <div className="portfolio-light-symbol-1">
              <Link to="/portfolio" className="portfolio-light-navlink">
                <svg viewBox="0 0 1024 1024" className="portfolio-light-icon">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </Link>
            </div>
            <img
              alt="image"
              src="/playground_assets/untitled%20design%20%5B8%5D-200w.png"
              className="portfolio-light-line"
            />
            <span className="portfolio-light-year">2016 - 2019</span>
            <span className="portfolio-light-main-info">
              <span>High School Diploma</span>
              <br></br>
              <br></br>
              <span>(Computer Engineering)</span>
              <br className="portfolio-light-text07"></br>
              <br className="portfolio-light-text08"></br>
              <span>tssm - </span>
              <span className="portfolio-light-text10">Pune</span>
            </span>
          </div>
          <div className="portfolio-light-details-2">
            <div className="portfolio-light-symbol-2">
              <Link to="/portfolio" className="portfolio-light-navlink01">
                <svg viewBox="0 0 1024 1024" className="portfolio-light-icon02">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </Link>
            </div>
            <img
              alt="image"
              src="/playground_assets/untitled%20design%20%5B8%5D-200w.png"
              className="portfolio-light-line-2"
            />
            <span className="portfolio-light-main-info-2">
              <span>Bachelor&apos;s Degree</span>
              <br></br>
              <br></br>
              <span>(Computer Engineering)</span>
              <br className="portfolio-light-text15"></br>
              <br className="portfolio-light-text16"></br>
              <span>Vishwakarma University - </span>
              <span className="portfolio-light-text18">Pune</span>
            </span>
            <span className="portfolio-light-year-2">2016 - 2019</span>
          </div>
          <span className="portfolio-light-objective">
            <span>objective</span>
            <br></br>
          </span>
          <span className="portfolio-light-main-objective">
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
          <div className="portfolio-light-sidenavbardark">
            <div className="portfolio-light-home">
              <div className="portfolio-light-homebtn">
                <Link to="/home-light" className="portfolio-light-navlink02">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="portfolio-light-icon04"
                  >
                    <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                  </svg>
                </Link>
              </div>
              <Link
                to="/home-light"
                className="portfolio-light-navlink03 button"
              >
                HOME
              </Link>
            </div>
            <div className="portfolio-light-about">
              <div className="portfolio-light-aboutbtn">
                <Link to="/about-light" className="portfolio-light-navlink04">
                  <svg
                    viewBox="0 0 731.4285714285713 1024"
                    className="portfolio-light-icon06"
                  >
                    <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                  </svg>
                </Link>
              </div>
              <Link
                to="/about-light"
                className="portfolio-light-navlink05 button"
              >
                About
              </Link>
            </div>
            <div className="portfolio-light-portfolio">
              <div className="portfolio-light-portfoliobtn">
                <Link
                  to="/portfolio-light"
                  className="portfolio-light-navlink06"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="portfolio-light-icon08"
                  >
                    <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                  </svg>
                </Link>
              </div>
              <Link
                to="/portfolio-light"
                className="portfolio-light-navlink07 button"
              >
                portfolio
              </Link>
            </div>
            <div className="portfolio-light-contact">
              <div className="portfolio-light-contactbtn">
                <Link to="/contact-light" className="portfolio-light-navlink08">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="portfolio-light-icon10"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </Link>
              </div>
              <Link
                to="/contact-light"
                className="portfolio-light-navlink09 button"
              >
                Contact
              </Link>
            </div>
            <Link to="/portfolio" className="portfolio-light-navlink10">
              <div className="portfolio-light-dark">
                <svg
                  viewBox="0 0 843.4102857142857 1024"
                  className="portfolio-light-moon"
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

export default PortfolioLight;
