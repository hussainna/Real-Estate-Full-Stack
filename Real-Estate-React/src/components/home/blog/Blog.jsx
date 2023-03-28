import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from '../../data/Data'

function Blog() {

    const [Product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('all-products').then(res=>{
          if(res.data.status===200)
          {
            setProduct(res.data.product)
    
          }
        })
    
      },[])

  return (
    <div className='blog'>
        <div className="container">
            <div className="text">
                <span>News & Blogs</span>
                <h1>Leatest News Feeds</h1>
            </div>
            <div className="flex">
                {Product.map((item,idx)=>(
                    <div className="card" key={idx}>
                        <img src='./images/property-1.jpg' className='card-img' alt="" />
                        <div className="card-body">
                            <div className="info">

                                <div className="info-item">
                                <i class="fa-solid fa-user"></i>
                                <p>By: Admin</p>
                                </div>

                                <div className="info-item">
                                <i class="fa-solid fa-tag"></i>
                                <p>Estate</p>
                                </div>

                            </div>
                                <h4>{item.name}</h4>
                        </div>
                        <div className="card-footer">
                            <div className="date">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>{item.date}</p>
                            </div>
                            <Link to='/'>READ MORE</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog