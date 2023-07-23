import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards} from '../../data'
import CatCard from '../../components/catCard/CatCard'
const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
          <h1>Unlock a world of freelance talent, tailored for students like you!</h1>
          <div className="title">
            <img src="/public/img/check.png" alt="" />
            Top-notch quality, regardless of your budget!
          </div>
            <p>
              Quality services, fixed project-based pricing, no hourly rates!
            </p>
          <div className="title">
            <img src="/public/img/check.png" alt="" />
            Top-notch quality, regardless of your budget!
          </div>
            <p>
              Quality services, fixed project-based pricing, no hourly rates!
            </p>
          <div className="title">
            <img src="/public/img/check.png" alt="" />
            Top-notch quality, regardless of your budget!
          </div>
            <p>
              Quality services, fixed project-based pricing, no hourly rates!
            </p>
          <div className="title">
            <img src="/public/img/check.png" alt="" />
            Top-notch quality, regardless of your budget!
          </div>
            <p>
              Quality services, fixed project-based pricing, no hourly rates!
            </p>
          </div>
            <div className="item">
              <video src="https://ik.imagekit.io/twork/typing_-_1655%20(360p).mp4?updatedAt=1690067076182" controls></video>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home