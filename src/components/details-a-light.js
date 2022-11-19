import React from 'react'

import PropTypes from 'prop-types'

import './details-a-light.css'

const DetailsALight = (props) => {
  return (
    <div className={`details-a-light-details ${props.rootClassName} `}>
      <div className="details-a-light-programming-languages">
        <span className="details-a-light-ten">{props.ten}</span>
        <div className="details-a-light-line-1">
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon02">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon04">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon06">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-light-programming">
          <span className="">Programming </span>
          <br className=""></br>
          <span className="">Languages</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-light-plus"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-a-light-completed-projects">
        <span className="details-a-light-twelve">{props.Twelve}</span>
        <div className="details-a-light-line-2">
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon09">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon11">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon13">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon15">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-light-completed">
          <span className="">Completed</span>
          <br className=""></br>
          <span className="">Projects</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-light-plus1"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-a-light-frontend-tools">
        <span className="details-a-light-five">{props.Five}</span>
        <div className="details-a-light-line-3">
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon18">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon20">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon22">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon24">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-light-frontend">
          <span className="">Frontend</span>
          <br className=""></br>
          <span className="">Tools</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-light-plus2"
        >
          <path
            d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-a-light-react-libraries">
        <span className="details-a-light-four">{props.Four}</span>
        <div className="details-a-light-line-4">
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon27">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon29">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon31">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="details-a-light-icon33">
            <path
              d="M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
              className=""
            ></path>
          </svg>
        </div>
        <span className="details-a-light-react">
          <span className="">React</span>
          <br className=""></br>
          <span className="">Libraries</span>
          <br className=""></br>
        </span>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-a-light-plus3"
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

DetailsALight.defaultProps = {
  Five: '5',
  rootClassName: '',
  ten: '10',
  Four: '4',
  Twelve: '12',
}

DetailsALight.propTypes = {
  Five: PropTypes.string,
  rootClassName: PropTypes.string,
  ten: PropTypes.string,
  Four: PropTypes.string,
  Twelve: PropTypes.string,
}

export default DetailsALight
