import React from 'react'

import PropTypes from 'prop-types'

import './personal-info-a-dark.css'

const PersonalInfoADark = (props) => {
  return (
    <div
      className={`personal-info-a-dark-personal-info ${props.rootClassName} `}
    >
      <span className="personal-info-a-dark-main">{props.Main}</span>
      <span className="personal-info-a-dark-name">
        <span className="personal-info-a-dark-text">Name:</span>
        <span className="personal-info-a-dark-text01">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-dark-text02">Saish</span>
      </span>
      <span className="personal-info-a-dark-freelance">
        <span className="personal-info-a-dark-text03">Freelance: </span>
        <span className="personal-info-a-dark-text04">Available</span>
      </span>
      <span className="personal-info-a-dark-email">
        <span className="personal-info-a-dark-text05">Email:</span>
        <span className="personal-info-a-dark-text06">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-dark-text07">
          saishkaduskar85gmail.com
        </span>
      </span>
      <span className="personal-info-a-dark-nationality">
        <span className="personal-info-a-dark-text08">
          Nationality:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-dark-text09">Indian</span>
      </span>
      <span className="personal-info-a-dark-phone">
        <span className="personal-info-a-dark-text10">
          Phone:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-dark-text11">+91 9518978482</span>
      </span>
      <span className="personal-info-a-dark-language">
        <span className="">
          Language:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="personal-info-a-dark-text13">English/Hindi</span>
      </span>
      <div className="personal-info-a-dark-download-cv button">
        <span className="personal-info-a-dark-cv">{props.Cv}</span>
        <div className="personal-info-a-dark-download">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="personal-info-a-dark-icon"
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

PersonalInfoADark.defaultProps = {
  Main: 'Personal infos',
  Cv: 'download cv',
  rootClassName: '',
}

PersonalInfoADark.propTypes = {
  Main: PropTypes.string,
  Cv: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PersonalInfoADark
