import React from 'react'
import './layout.css'
import Home from './pages/home/Home'
import Sidebar from './sidebar/Sidebar'
import TopBar from './Topbar/TopBar'
function Master() {
  return (
    <div className='master'>
        <TopBar/>
        <div className="cont">
          <Sidebar/>
            <Home/>
        </div>
    </div>
  )
}

export default Master