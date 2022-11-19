import React from "react";
import { Link } from "react-router-dom";

import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";

import "./home-light.css";

const HomeLight = (props) => {
  return (
    <div className="animate">
      <div className="home-light-container">
        <Helmet>
          <title>Home-Light - Saish PortFolio</title>
          <meta property="og:title" content="Home-Light - Saish PortFolio" />
        </Helmet>
        <div className="home-light-homeimg"></div>
        <div className="home-light-tabletmodel">
          <div className="home-light-div">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomgirlworkingcopy-ce27209657519c5da09dd56cf7bfe739/' frameborder='0'
    width='100%' height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-light-model-dark">
          <div className="home-light-desktop">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomgirlworkingcopy-6d13a7ddce3732b279a01cdc83e24671/' frameborder='0'
    width='100%' height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
          <div className="home-light-laptop">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomgirlworkingcopy-25d1bbd191177a18b51cee0eacda54e8/' frameborder='0'
    width='100%' height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-light-widemodel">
          <div className="home-light-div1">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomrelaxingcopy-5b46493a3e170fe5510ea090550d22dc/' frameborder='0' width='100%'
    height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-light-sidenavbar-light">
          <div className="home-light-home">
            <div className="home-light-homebtn">
              <Link to="/home-light" className="home-light-navlink">
                <svg viewBox="0 0 1024 1024" className="home-light-icon">
                  <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/home-light" className="home-light-navlink01 button">
              HOME
            </Link>
          </div>
          <div className="home-light-about">
            <div className="home-light-aboutbtn">
              <Link to="/about-light" className="home-light-navlink02">
                <svg
                  viewBox="0 0 731.4285714285713 1024"
                  className="home-light-icon02"
                >
                  <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/about-light" className="home-light-navlink03 button">
              About
            </Link>
          </div>
          <div className="home-light-portfolio">
            <div className="home-light-portfoliobtn">
              <Link to="/portfolio-light" className="home-light-navlink04">
                <svg viewBox="0 0 1024 1024" className="home-light-icon04">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/portfolio-light" className="home-light-navlink05 button">
              portfolio
            </Link>
          </div>
          <div className="home-light-contact">
            <div className="home-light-contactbtn">
              <Link to="/contact-light" className="home-light-navlink06">
                <svg viewBox="0 0 1024 1024" className="home-light-icon06">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/contact-light" className="home-light-navlink07 button">
              Contact
            </Link>
          </div>
          <Link to="/" className="home-light-navlink08">
            <div className="home-light-dark">
              <svg
                viewBox="0 0 843.4102857142857 1024"
                className="home-light-moon"
              >
                <path d="M721.143 744.571c-20.571 3.429-41.714 5.143-62.857 5.143-212 0-384-172-384-384 0-72.571 21.143-143.429 59.429-204-152 45.143-260.571 184.571-260.571 350.286 0 201.714 164 365.714 365.714 365.714 110.286 0 213.714-50.286 282.286-133.143zM837.143 696c-71.429 154.857-228 254.857-398.286 254.857-241.714 0-438.857-197.143-438.857-438.857 0-237.143 185.714-429.714 422.286-438.286 16-0.571 29.143 8.571 34.857 22.286 6.286 14.286 2.286 30.857-8.571 41.143-65.143 59.429-101.143 140.571-101.143 228.571 0 171.429 139.429 310.857 310.857 310.857 45.143 0 88.571-9.714 130.286-29.143 14.286-6.286 30.286-3.429 41.143 7.429s13.714 27.429 7.429 41.143z"></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="home-light-maintext">
          <div className="home-light-second-text">
            <span className="home-light-text">
              <span>
                I&apos;m an Indian based web designer &amp; front‑end developer
                focused on 
              </span>
              <span>
                crafting clean &amp; user‑friendly experiences, I am passionate
                about building excellent Web-designs that improves the
                User-interface of the users.
              </span>
            </span>
          </div>
          <div className="home-light-more-b-t-n button">
            <Link to="/portfolio-light" className="home-light-moreabtme">
              More about me
            </Link>
            <div className="home-light-iconcointainer">
              <Link to="/portfolio-light" className="home-light-navlink09">
                <svg
                  viewBox="0 0 841.1428571428571 1024"
                  className="home-light-arrow"
                >
                  <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <Link to="/portfolio-light" className="home-light-navlink10">
            <div className="home-light-more-b-t-n1 button">
              <span className="home-light-moreabtme1">More about me</span>
              <svg
                viewBox="0 0 841.1428571428571 1024"
                className="home-light-arrow1"
              >
                <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
              </svg>
              <div className="home-light-iconcointainer1">
                <svg
                  viewBox="0 0 841.1428571428571 1024"
                  className="home-light-arrow2"
                >
                  <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
                </svg>
              </div>
            </div>
          </Link>
          <span className="home-light-text03">
            <span className="home-light-text04">i&apos;m Saish.</span>
            <br className="home-light-text05"></br>
            <br className="home-light-text06"></br>
          </span>
          <span className="home-light-text07">Frontend developer</span>
          <span className="home-light-text08">
            <span>i&apos;m Saish.</span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeLight;
