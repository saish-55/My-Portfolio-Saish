import React from 'react'

import PropTypes from 'prop-types'

import './details-c-light.css'

const DetailsCLight = (props) => {
  return (
    <div className={`details-c-light-container ${props.rootClassName} `}>
      <div className="details-c-light-contact">
        <span className="details-c-light-contact1">{props.contact}</span>
        <span className="details-c-light-number">{props.Number}</span>
        <svg viewBox="0 0 1024 1024" className="details-c-light-icon">
          <path
            d="M192 0v1024h768v-1024h-768zM576 256.33c70.51 0 127.67 57.16 127.67 127.67s-57.16 127.67-127.67 127.67-127.67-57.16-127.67-127.67 57.16-127.67 127.67-127.67v0zM768 768h-384v-64c0-70.696 57.306-128 128-128v0h128c70.696 0 128 57.304 128 128v64z"
            className=""
          ></path>
          <path d="M64 64h96v192h-96v-192z" className=""></path>
          <path d="M64 320h96v192h-96v-192z" className=""></path>
          <path d="M64 576h96v192h-96v-192z" className=""></path>
          <path d="M64 832h96v192h-96v-192z" className=""></path>
        </svg>
      </div>
      <div className="details-c-light-e-mail">
        <span className="details-c-light-email">{props.email}</span>
        <span className="details-c-light-e-address">{props.e_address}</span>
        <svg viewBox="0 0 1024 1024" className="details-c-light-icon06">
          <path
            d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="details-c-light-address">
        <span className="details-c-light-address1">{props.address}</span>
        <span className="details-c-light-info">{props.info}</span>
        <svg viewBox="0 0 1024 1024" className="details-c-light-icon08">
          <path
            d="M292.571 0c9.714 0 18.286 8.571 18.286 18.286v841.143c0 6.857-4 13.143-9.714 16l-274.286 146.286c-2.857 1.714-5.714 2.286-8.571 2.286-9.714 0-18.286-8.571-18.286-18.286v-841.143c0-6.857 4-13.143 9.714-16l274.286-146.286c2.857-1.714 5.714-2.286 8.571-2.286zM1005.714 0c9.714 0 18.286 8.571 18.286 18.286v841.143c0 6.857-4 13.143-9.714 16l-274.286 146.286c-2.857 1.714-5.714 2.286-8.571 2.286-9.714 0-18.286-8.571-18.286-18.286v-841.143c0-6.857 4-13.143 9.714-16l274.286-146.286c2.857-1.714 5.714-2.286 8.571-2.286zM365.714 0c2.857 0 5.714 0.571 8 1.714l292.571 146.286c6.286 3.429 10.286 9.714 10.286 16.571v841.143c0 9.714-8.571 18.286-18.286 18.286-2.857 0-5.714-0.571-8-1.714l-292.571-146.286c-6.286-3.429-10.286-9.714-10.286-16.571v-841.143c0-9.714 8.571-18.286 18.286-18.286z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

DetailsCLight.defaultProps = {
  address: 'pune, maharashtra, india',
  info: 'address point',
  email: 'e-mail ',
  contact: 'contact',
  Number: '+91 9518978482',
  e_address: 'Saishkaduskar85@gmail.com',
  rootClassName: '',
}

DetailsCLight.propTypes = {
  address: PropTypes.string,
  info: PropTypes.string,
  email: PropTypes.string,
  contact: PropTypes.string,
  Number: PropTypes.string,
  e_address: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DetailsCLight
