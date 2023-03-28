import React from 'react'
import './featured.css'
import {FaArrowDown,FaArrowUp} from 'react-icons/fa'
function featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMounyContanier">
                <span className="featuredMouny">$2,240</span>
                <span className="featuredMouneyRate">-11.2 <FaArrowDown className='featuredIcon negative' /></span>
            </div>
            <div className="featuredSub">Compared Last Month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMounyContanier">
                <span className="featuredMouny">$4,150</span>
                <span className="featuredMouneyRate">-15.2 <FaArrowDown className='featuredIcon negative' /></span>
            </div>
            <div className="featuredSub">Compared Last Month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMounyContanier">
                <span className="featuredMouny">$6,891</span>
                <span className="featuredMouneyRate">+2.5 <FaArrowUp className='featuredIcon'/></span>
            </div>
            <div className="featuredSub">Compared Last Month</div>
        </div>
    </div>
  )
}

export default featured