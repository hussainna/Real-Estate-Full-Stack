import React from 'react'
import { serviceData } from '../../data/Data'

function Services() {
  return (
    <div className='services'>
        <div className="container">
            <div className="tex">
                <span>Our Services</span>
                <h1>Our Main Focus</h1>
            </div>
            <div className="flex">
                {serviceData.map((item,idx)=>(
                    <div key={idx} className="card">
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <a href='#'>Find A Home</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services