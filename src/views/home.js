import React from "react";
import { Link } from "react-router-dom";

import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";


import "./home.css";

const Home = (props) => {
  return (

    <div className="animate">
      <div className="home-container">
     
        <Helmet>
          <title>Saish PortFolio</title>
          <meta property="og:title" content="Saish PortFolio" />
        </Helmet>


        <img
          alt="image"
          src="/playground_assets/untitled%20design%20%5B6%5D-1500w.png"
          className="home-homeimg"
        />
        <div className="home-tabletmodel">
          <div className="home-div">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomrelaxingcopy-fff8e0147e401694f783cc985a403774/' frameborder='0' width='100%'
    height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-model-dark">
          <div className="home-desktop">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomrelaxingcopy-192c0ea8d9cd4f2379a202d52918fe82/' frameborder='0' width='100%'
    height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
          <div className="home-laptop">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomrelaxingcopy-30d146e0e96bd5147de8eae44fe98919/' frameborder='0' width='100%'
    height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-maintext">
        

          <div className="home-second-text">
            <span className="home-text">
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
          <Link to="/portfolio" className="home-navlink">
            <div className="home-more-b-t-n button">
              <span className="home-moreabtme">More about me</span>
              <div className="home-iconcointainer">
                <svg
                  viewBox="0 0 841.1428571428571 1024"
                  className="home-arrow"
                >
                  <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/portfolio" className="home-navlink01">
            <div className="home-more-b-t-n1 button">
              <span className="home-moreabtme1">More about me</span>
              <svg viewBox="0 0 841.1428571428571 1024" className="home-arrow1">
                <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
              </svg>
              <div className="home-iconcointainer1">
                <svg
                  viewBox="0 0 841.1428571428571 1024"
                  className="home-arrow2"
                >
                  <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
                </svg>
              </div>
            </div>
          </Link>
          <span className="home-text3">
            <span className="home-text4">i&apos;m Saish.</span>
            <br className="home-text5"></br>
            <br className="home-text6"></br>
          </span>
          <span className="home-text7">Frontend developer</span>
        </div>
        <div className="home-widemodel">
          <div className="home-div1">
            <DangerousHTML
              html={`<iframe src='https://my.spline.design/roomrelaxingcopy-5b46493a3e170fe5510ea090550d22dc/' frameborder='0' width='100%'
    height='100%'></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-sidenavbardark">
          <div className="home-home">
            <div className="home-homebtn">
              <Link to="/" className="home-navlink02">
                <svg viewBox="0 0 1024 1024" className="home-icon03">
                  <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/" className="home-navlink03 button">
              HOME
            </Link>
          </div>
          <div className="home-about">
            <div className="home-aboutbtn">
              <Link to="/about" className="home-navlink04">
                <svg
                  viewBox="0 0 731.4285714285713 1024"
                  className="home-icon05"
                >
                  <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/about" className="home-navlink05 button">
              About
            </Link>
          </div>
          <div className="home-portfolio">
            <div className="home-portfoliobtn">
              <Link to="/portfolio" className="home-navlink06">
                <svg viewBox="0 0 1024 1024" className="home-icon07">
                  <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/portfolio" className="home-navlink07 button">
              portfolio
            </Link>
          </div>
          <div className="home-contact">
            <div className="home-contactbtn">
              <Link to="/contact" className="home-navlink08">
                <svg viewBox="0 0 1024 1024" className="home-icon09">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </Link>
            </div>
            <Link to="/contact" className="home-navlink09 button">
              Contact
            </Link>
          </div>
          <Link to="/home-light" className="home-navlink10">
            <div className="home-dark">
              <svg
                viewBox="0 0 585.1428571428571 1024"
                className="home-d-b-u-l-b"
              >
                <path d="M420.571 329.143c0 9.714-8.571 18.286-18.286 18.286s-18.286-8.571-18.286-18.286c0-39.429-61.143-54.857-91.429-54.857-9.714 0-18.286-8.571-18.286-18.286s8.571-18.286 18.286-18.286c53.143 0 128 28 128 91.429zM512 329.143c0-114.286-116-182.857-219.429-182.857s-219.429 68.571-219.429 182.857c0 36.571 14.857 74.857 38.857 102.857 10.857 12.571 23.429 24.571 34.857 37.714 40.571 48.571 74.857 105.714 80.571 170.286h130.286c5.714-64.571 40-121.714 80.571-170.286 11.429-13.143 24-25.143 34.857-37.714 24-28 38.857-66.286 38.857-102.857zM585.143 329.143c0 58.857-19.429 109.714-58.857 153.143s-91.429 104.571-96 165.714c16.571 9.714 26.857 28 26.857 46.857 0 13.714-5.143 26.857-14.286 36.571 9.143 9.714 14.286 22.857 14.286 36.571 0 18.857-9.714 36-25.714 46.286 4.571 8 7.429 17.714 7.429 26.857 0 37.143-29.143 54.857-62.286 54.857-14.857 33.143-48 54.857-84 54.857s-69.143-21.714-84-54.857c-33.143 0-62.286-17.714-62.286-54.857 0-9.143 2.857-18.857 7.429-26.857-16-10.286-25.714-27.429-25.714-46.286 0-13.714 5.143-26.857 14.286-36.571-9.143-9.714-14.286-22.857-14.286-36.571 0-18.857 10.286-37.143 26.857-46.857-4.571-61.143-56.571-122.286-96-165.714s-58.857-94.286-58.857-153.143c0-155.429 148-256 292.571-256s292.571 100.571 292.571 256z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
