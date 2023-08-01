import React from 'react'
import "./Gig.scss"
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <span className="breadcrumbs">TWORK > GRAPHICS & DESIGN ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundary of art and tech with twork's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>Best Selling</span>
            <img src="/img/down.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gig