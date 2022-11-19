import React from 'react'

import PropTypes from 'prop-types'

import './details-a-dark.css'

const DetailsADark = (props) => {
  return (
    <div className={`details-a-dark-details ${props.rootClassName} `}>
      <div className="details-a-dark-programming-languages">
        <span className="details-a-dark-ten">{props.ten}</span>
        <div className="details-a-dark-line-1">
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon02">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon04">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon06">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-dark-programming">
          <span className="">Programming </span>
          <br className=""></br>
          <span className="">Languages</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-dark-plus"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-a-dark-completed-projects">
        <span className="details-a-dark-twelve">{props.Twelve}</span>
        <div className="details-a-dark-line-2">
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon09">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon11">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon13">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon15">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-dark-completed">
          <span className="">Completed</span>
          <br className=""></br>
          <span className="">Projects</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-dark-plus1"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-a-dark-frontend-tools">
        <span className="details-a-dark-five">{props.Five}</span>
        <div className="details-a-dark-line-3">
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon18">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon20">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon22">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon24">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-dark-frontend">
          <span className="">Frontend</span>
          <br className=""></br>
          <span className="">Tools</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-dark-plus2"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-a-dark-react-libraries">
        <span className="details-a-dark-four">{props.Four}</span>
        <div className="details-a-dark-line-4">
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon27">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon29">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon31">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-dark-icon33">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-dark-react">
          <span className="">React</span>
          <br className=""></br>
          <span className="">Libraries</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-dark-plus3"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

DetailsADark.defaultProps = {
  Twelve: '12',
  ten: '10',
  rootClassName: '',
  Four: '4',
  Five: '5',
}

DetailsADark.propTypes = {
  Twelve: PropTypes.string,
  ten: PropTypes.string,
  rootClassName: PropTypes.string,
  Four: PropTypes.string,
  Five: PropTypes.string,
}

export default DetailsADark
