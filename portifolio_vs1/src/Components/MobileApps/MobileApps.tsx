import React from 'react'
import './MobileApps.css'
import Airbnb2 from '../../Assets/Mockups/Airbnb2/Mock1.png'
import Rentiki from '../../Assets/Mockups/Rentiki/Mock2.png'

const MobileApps = () => {
  return (
    <div className="MobileApps_Page" id='mobileApps'>
      <div className="MobileApps_Page_main">
        <h2>Mobile Apps</h2>
        <div className="Mockups">
          <a href='https://github.com/mssdesign/rentiKi' target='_blank' className="Mockup_container">
            <h4>Rentiki</h4>
            <img src={Rentiki} alt="" className="mockup" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileApps
