import React from 'react'

function Top() {
  return (
    <div className='top'>
        <div className="container">
            <div className="flex">
                <div className="contact">
                    <span>
                    <i class="fa-regular fa-envelope"></i>
                        Hussain@gmail.com
                    </span>
                    <span>
                    <i class="fa-solid fa-location-dot"></i>
                    15/A, Nest Tower, NYC
                    </span>
                </div>
                <div className="media">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <button>Add Listing</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top