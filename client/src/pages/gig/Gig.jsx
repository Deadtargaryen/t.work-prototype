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
            className='pp'
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
          <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
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
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr/>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr/>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create high quality AI generated 
            image based on the descrption you give me
          </p>
          <div className="details">
            <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 days Delivery</span>
            </div>
            <div className="item">
            <img src="/img/recycle.png" alt="" />
            <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork Delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional Design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
