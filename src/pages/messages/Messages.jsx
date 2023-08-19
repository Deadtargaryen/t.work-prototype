import React from 'react'
import "./Messages.scss"
const Messages = () => {

  const currentUser = {
    id: 1,
    username: "Manny",
    isSeller: true
  } 

  const message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptatem nisi, in suscipit maiores quis laudantium eligendi ipsum asperiores ut sit possimus deleniti eaque autem. Vel molestiae veritatis suscipit voluptas?`

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>
              John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>4 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>8 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Messages