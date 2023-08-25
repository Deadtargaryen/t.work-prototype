import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards, projects} from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'
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
            <img src="/img/check.png" alt="" />
            Top-notch quality, regardless of your budget!
          </div>
            <p>
              Quality services, fixed project-based pricing, no hourly rates!
            </p>
          <div className="title">
            <img src="/img/check.png" alt="" />
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
      <div className="features dark">
        <div className="container">
          <div className="item">
          <h1>t <span className="dot">.</span>work business</h1>
          <h1>An innovative team-oriented business solution.</h1>
          <p>Embrace a bespoke business experience, teeming with tailored tools and exclusive perks.</p>
          <div className="title">
            <img src="/img/check.png" alt="" />
            Connect with diverse freelancers for top-notch project support.
          </div><div className="title">
            <img src="/img/check.png" alt="" />
            Find perfect talent with help from our manager.
          </div><div className="title">
            <img src="/img/check.png" alt="" />
            Enhance productivity and teamwork with a single, powerful workspace.
          </div>
          <button>Explore t<span className='dott'>.</span>work Business</button>
          </div>
            <div className="item">
             <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
            </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home