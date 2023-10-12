import React from 'react'
import "./Featured.scss"
const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
         <div className="left"> 
         <h1>Your Gateway to Tailored Opportunities, <i>Peer Networking</i>, and Student-Centric Resources</h1>
         <div className="search">
          <div className="searchInput">
            
            <input type="text" placeholder='Try "building web app"' />
          </div>
          <button>
            <img src="/img/search.png" alt="" />
            </button>
         </div>
         <div className="popular">
          <span>Popular:</span>
          <button>NFTs</button>
          <button>Data Science</button>
          <button>Web 3.0</button>
          <button>Motion graphics</button>
          <button>Copywriting</button>
         </div>
         </div>
         <div className="right">
          <img src="https://ik.imagekit.io/twork/prince-akachi-4Yv84VgQkRM-unsplash-removebg-preview.png?updatedAt=1697098598138" alt="Prince Akachi" />
          <p>Prince Akachi</p>
         </div>
      </div>
    </div>
  )
}

export default Featured