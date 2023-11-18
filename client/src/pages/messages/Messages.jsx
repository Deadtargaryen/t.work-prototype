import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import moment from 'moment'

const Messages = () => { 

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const { isLoading, error, data } = useQuery({
    queryKey: ['conversatons', currentUser.id],
    queryFn: () =>
      newRequest.get(`/conversations?userId=${currentUser.id}`)
      .then(res=>{
        return res.data
      })
  })

  return (
    <div className='messages'>
      {isLoading ? (
        'loading'
        ) : error ? (
          'error'
          ) : (
      <div className="container">
        <div className="title">
          <h1>Messages for {currentUser.name}...</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {data.map(c=>(

          <tr className='active' key={c.id}>
            <td>
              John Doe
            </td>
            <td><Link to='/message/123' className='link'>
            {c?.lastMesage?.substring(0,100)}...
            </Link></td>
            <td>{moment(c.updatedAt).fromNow()}</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          ))}
          
          
        </table>
      </div>)}
    </div>
  )
}

export default Messages