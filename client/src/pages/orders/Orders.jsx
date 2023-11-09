import React from 'react'
import "./Orders.scss"
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'


const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(`/orders`
      ).then(res=>{
        return res.data
      })
  })

  return (
    <div className='orders'>
      (isLoading ? 'Loading' : error
        <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyer':'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>45</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>45</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>45</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>45</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>)
    </div>
  )
}

export default Orders