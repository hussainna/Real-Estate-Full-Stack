import React from 'react'

function About() {
  return (
    <div className='about'>
        <div className="container">
            <div className="left">
                <img src="./images/about-banner-1.png" alt="" />
            </div>

            <div className="right">
                <span>About Us</span>
                <h1>The Leading Real Estate Rental Marketplace.</h1>
                <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                <div className="grid">
                    
                    <div className="col">
                    <i class="fa-solid fa-house"></i>
                    <p>Smart Home Design</p>
                    </div>
                    
                    <div className="col">
                    <i class="fa-solid fa-feather"></i>
                    <p>Beautiful Scene Around</p>
                    </div>

                    <div className="col">
                    <i class="fa-solid fa-mug-hot"></i>
                    <p>Exceptional Lifestyle</p>
                    </div>

                    <div className="col">
                    <i class="fa-solid fa-shield"></i>
                    <p>Complete 24/7 Security</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About