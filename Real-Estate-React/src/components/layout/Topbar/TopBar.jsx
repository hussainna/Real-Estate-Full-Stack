import React from 'react'
import './topbar.css'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {GrLanguage} from 'react-icons/gr'
import {AiFillSetting} from 'react-icons/ai'
function TopBar() {
  return (
    <div className='topbar'>
        <div className="masterWrapper">
            <div className="topLeft">
              <span className="logo">lamaadmin</span>
            </div>
            <div className="topRight">
              <div className="TopBarIcons">
                <i><IoMdNotificationsOutline/></i>
                <span className="topIconBag">2</span>
              </div>
              <div className="TopBarIcons">
                <i><GrLanguage/></i>
                <span className="topIconBag">2</span>
              </div>
              <div className="TopBarIcons">
                <i><AiFillSetting/></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar