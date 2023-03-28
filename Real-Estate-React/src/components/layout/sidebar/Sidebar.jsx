import React from 'react'
import './sidebar.css'
import {MdLineStyle,MdTimeline} from 'react-icons/md'
import  { HiOutlineTrendingDown } from 'react-icons/hi'
import  { AiOutlineUser, AiOutlineShop, AiOutlineMail, AiOutlineShopping } from 'react-icons/ai'
import  { BsCurrencyDollar } from 'react-icons/bs'
import  { MdDynamicFeed } from 'react-icons/md'
import  { BiMessageAlt } from 'react-icons/bi'
import  { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar dashboard'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active ">
                        <MdLineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <HiOutlineTrendingDown className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <AiOutlineUser className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Link className='sidebarListItemText' to='/admin/products' >
                        <AiOutlineShop className='sidebarIcon'/>
                        Products
                        </Link>
                        
                    </li>
                    <li className="sidebarListItem">
                        <Link className='sidebarListItemText' to='/admin/category'  >
                        <AiOutlineShop className='sidebarIcon'/>
                        Category
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <BsCurrencyDollar className='sidebarIcon'/>
                        Transactions
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <AiOutlineMail className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed className='sidebarIcon'/>
                        FeedBack
                    </li>
                    <li className="sidebarListItem">
                        <BiMessageAlt className='sidebarIcon'/>
                        Message
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <AiOutlineShopping className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <RiErrorWarningFill className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar