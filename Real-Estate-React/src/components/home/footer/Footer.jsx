import React from 'react'
import { Link } from 'react-router-dom'
import { CompanyData, contactData, CustomerData, ServicesFoot } from '../../data/Data'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="contact">
                <img src="./images/logo-light.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                {contactData.map((item,idx)=>(
                    <div className="item" key={idx}>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="company">
                <h4>Company</h4>
                <ul>
                    {CompanyData.map((item,idx)=>(
                        <li key={idx}>
                            <Link>{item.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="servicesFoot">
                <h4>Services</h4>
                <ul>
                    {ServicesFoot.map((item,idx)=>(
                        <li key={idx}>
                            <Link>{item.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="customer">
                <h4>Customer Core</h4>
                <ul>
                    {CustomerData.map((item,idx)=>(
                        <li key={idx}>
                            <Link>{item.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="last">
                <p>© 2022 codewithsadee. All Rights Reserved</p>
            </div>
    </footer>
  )
}

export default Footer