import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import './Gig.scss'
const Gig = () => {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadCrumbs'>TWORK &gt; GRAPHICS & DESIGN &gt;</span>
          <h1>I will create an AI generated art for you</h1>

          <div className='user'>
            <img
              src='https://ik.imagekit.io/twork/alexander-hipp-iEEBWgY_6lA-unsplash__1_.jpg?updatedAt=1689415721528'
              alt=''
            />
            <span>John Doe</span>
            <div className='stars'>
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1}>
            <img
              src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
          </Slider>
          <h2>About this Gig</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            doloremque deleniti amet! Aliquam in itaque cumque impedit id
            facilis dicta minus assumenda repellat officiis alias, reiciendis
            dolore, voluptate provident iste. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eius doloremque deleniti amet! Aliquam
            in itaque cumque impedit id facilis dicta minus assumenda repellat
            officiis alias, reiciendis dolore, voluptate provident iste.
          </p>
          <div className='seller'>
            <h2>About the seller</h2>
            <div className='user'>
              <img
                src='https://ik.imagekit.io/twork/alexander-hipp-iEEBWgY_6lA-unsplash__1_.jpg?updatedAt=1689415721528'
                alt=''
              />
              <div className='info'>
                <span>John Doe</span>
                <div className='stars'>
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">UniCal</span>
                </div><div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2023</span>
                </div><div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div><div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">a day ago</span>
                </div><div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr/>
              <p>
                My name is Ciaran. I enjoy creating AI generated art in my spare time. 
                I have a lot of experience using the AI program and that means I know what 
                to prompt the AI with to get great and incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Gig
