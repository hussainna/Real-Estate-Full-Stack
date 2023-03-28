import React from 'react'
import './widget.css'
import {MdVisibility} from 'react-icons/md'
import User1 from '../../images/pexels-andrea-piacquadio-874158.jpg'
function Widget() {
  return (
    <div className='widget'>
        <span className="widgetTitle">New Join Members</span>
        <ul className="widgetList">
            <li className="widgetItem">
                <img className='widgetImg' src={User1} alt="" />
                <div className="widgetUser">
                   <span className="widgetUserName">Anna keller</span>
                   <span className="widgetUserTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
                    <MdVisibility className='widgetIcon'/>
                    display
                </button>
            </li>
            <li className="widgetItem">
                <img className='widgetImg' src={User1} alt="" />
                <div className="widgetUser">
                   <span className="widgetUserName">Hussain Alasdy</span>
                   <span className="widgetUserTitle">Web Develop</span>
                </div>
                <button className="widgetButton">
                    <MdVisibility className='widgetIcon'/>
                    display
                </button>
            </li>
            <li className="widgetItem">
                <img className='widgetImg' src={User1} alt="" />
                <div className="widgetUser">
                   <span className="widgetUserName">Anna keller</span>
                   <span className="widgetUserTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
                    <MdVisibility className='widgetIcon'/>
                    display
                </button>
            </li>
        </ul>
    </div>
  )
}
export default Widget