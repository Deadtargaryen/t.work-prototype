import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
         <Link to='/messages'>Messages</Link>&gt; John Doe &gt;
        </span>
      <div className="messages">
        <div className="item">
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae reiciendis, 
          eius suscipit soluta dolores explicabo 
          laborum a laudantium vero iure ipsam laboriosam possimus porro! 
          Mollitia magnam dignissimos consequuntur est!
        </p>
        </div>
        <div className="item owner">
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae reiciendis, 
          eius suscipit soluta dolores explicabo 
          laborum a laudantium vero iure ipsam laboriosam possimus porro! 
          Mollitia magnam dignissimos consequuntur est!
        </p>
        </div>
        <div className="item">
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae reiciendis, 
          eius suscipit soluta dolores explicabo 
          laborum a laudantium vero iure ipsam laboriosam possimus porro! 
          Mollitia magnam dignissimos consequuntur est!
        </p>
        </div>
        <div className="item owner">
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae reiciendis, 
          eius suscipit soluta dolores explicabo 
          laborum a laudantium vero iure ipsam laboriosam possimus porro! 
          Mollitia magnam dignissimos consequuntur est!
        </p>
        </div>
        <div className="item">
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae reiciendis, 
          eius suscipit soluta dolores explicabo 
          laborum a laudantium vero iure ipsam laboriosam possimus porro! 
          Mollitia magnam dignissimos consequuntur est!
        </p>
        </div>
        <div className="item owner">
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae reiciendis, 
          eius suscipit soluta dolores explicabo 
          laborum a laudantium vero iure ipsam laboriosam possimus porro! 
          Mollitia magnam dignissimos consequuntur est!
        </p>
        </div>
      </div>
      <hr />
      <div className="write">
        <textarea name="" placeholder='Type a message...' id="" cols="30" rows="10"></textarea>
        <button>Send</button>
      </div>
      </div>
    </div>
  )
}

export default Message