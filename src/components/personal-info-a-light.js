import React from 'react'

import PropTypes from 'prop-types'

import './personal-info-a-light.css'

const PersonalInfoALight = (props) => {
  return (
    <div
      className={`personal-info-a-light-personal-info ${props.rootClassName} `}
    >
      <span className="personal-info-a-light-main">{props.Main}</span>
      <span className="personal-info-a-light-name">
        <span className="personal-info-a-light-text">Name:</span>
        <span className="personal-info-a-light-text01">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-light-text02">Saish</span>
      </span>
      <span className="personal-info-a-light-freelance">
        <span className="personal-info-a-light-text03">Freelance: </span>
        <span className="personal-info-a-light-text04">Available</span>
      </span>
      <span className="personal-info-a-light-email">
        <span className="personal-info-a-light-text05">Email:</span>
        <span className="personal-info-a-light-text06">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-light-text07">
          saishkaduskar85gmail.com
        </span>
      </span>
      <span className="personal-info-a-light-nationality">
        <span className="personal-info-a-light-text08">
          Nationality:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-light-text09">Indian</span>
      </span>
      <span className="personal-info-a-light-phone">
        <span className="personal-info-a-light-text10">
          Phone:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-light-text11">+91 951897848</span>
        <span className="personal-info-a-light-text12">2</span>
      </span>
      <span className="personal-info-a-light-language">
        <span className="">Language:</span>
        <span className="personal-info-a-light-text14">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-light-text15">English/Hin</span>
        <span className="personal-info-a-light-text16">di</span>
      </span>
      <div className="personal-info-a-light-download-cv button">
        <span className="personal-info-a-light-cv button">{props.Cv}</span>
        <div className="personal-info-a-light-download">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="personal-info-a-light-icon"
          >
            <path
              d="M731.429 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM877.714 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 640v182.857c0 30.286-24.571 54.857-54.857 54.857h-841.143c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h265.714l77.143 77.714c21.143 20.571 48.571 32 77.714 32s56.571-11.429 77.714-32l77.714-77.714h265.143c30.286 0 54.857 24.571 54.857 54.857zM765.143 314.857c5.714 13.714 2.857 29.714-8 40l-256 256c-6.857 7.429-16.571 10.857-25.714 10.857s-18.857-3.429-25.714-10.857l-256-256c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h146.286v-256c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571v256h146.286c14.857 0 28 9.143 33.714 22.286z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

PersonalInfoALight.defaultProps = {
  Main: 'Personal infos',
  rootClassName: '',
  Cv: 'download cv',
}

PersonalInfoALight.propTypes = {
  Main: PropTypes.string,
  rootClassName: PropTypes.string,
  Cv: PropTypes.string,
}

export default PersonalInfoALight
