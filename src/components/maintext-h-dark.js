import React from 'react'

import PropTypes from 'prop-types'

import './maintext-h-dark.css'

const MaintextHDark = (props) => {
  return (
    <div className={`maintext-h-dark-maintext ${props.rootClassName} `}>
      <div className="maintext-h-dark-first-text">
        <span className="maintext-h-dark-text">
          <span className="maintext-h-dark-text1">i&apos;m Saish.</span>
          <br className="maintext-h-dark-text2"></br>
          <br className="maintext-h-dark-text3"></br>
        </span>
        <span className="maintext-h-dark-text4">{props.text}</span>
      </div>
      <div className="maintext-h-dark-second-text">
        <span className="maintext-h-dark-text5">
          <span className="">
            I&apos;m an Indian based web designer &amp; front‑end developer
            focused on 
          </span>
          <span className="">
            crafting clean &amp; user‑friendly experiences, I am passionate
            about building excellent Web-designs that improves the
            User-interface of the users.
          </span>
        </span>
      </div>
      <div className="maintext-h-dark-more-b-t-n button">
        <span className="maintext-h-dark-moreabtme">{props.moreabtme}</span>
        <div className="maintext-h-dark-iconcointainer">
          <svg
            viewBox="0 0 841.1428571428571 1024"
            className="maintext-h-dark-arrow"
          >
            <path
              d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="maintext-h-dark-more-b-t-n1 button">
        <span className="maintext-h-dark-moreabtme1">{props.moreabtme1}</span>
        <svg
          viewBox="0 0 841.1428571428571 1024"
          className="maintext-h-dark-arrow1"
        >
          <path
            d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"
            className=""
          ></path>
        </svg>
        <div className="maintext-h-dark-iconcointainer1">
          <svg
            viewBox="0 0 841.1428571428571 1024"
            className="maintext-h-dark-arrow2"
          >
            <path
              d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

MaintextHDark.defaultProps = {
  moreabtme1: 'More about me',
  moreabtme: 'More about me',
  text: 'Frontend developer',
  rootClassName: '',
}

MaintextHDark.propTypes = {
  moreabtme1: PropTypes.string,
  moreabtme: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MaintextHDark
