import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">

              <h4>
              <i class="fa-solid fa-house"></i>
              Real Estate Agency
              </h4>
              <h1>Find Your Dream House By Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
              <button>Make An Enquiry</button>

            </div>

            <div className="right">
                <img src="./images/hero-banner.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Hero