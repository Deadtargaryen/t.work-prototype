import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import getCurrentUser from '../../utils/getCurrentUser.js'
import newRequest from '../../utils/newRequest.js'

const MyGigs = () => {
  const currentUser = getCurrentUser
  
  const queryClient = useQueryClient()

  const { isLoading, error, data} = useQuery({
    queryKey: ['myGigs'],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`
      ).then(res=>{
        return res.data
      })
  })
  
  const mutation = useMutation({
mutationFn: (id) => {
  return newRequest.delete('/gigs/${id}')
},
onSuccess:()=>{
  queryClient.invalidateQueries(['myGigs'])
}
})

  return (
    <div className='myGigs'>
      { isLoading ? (
        'loading...'
      ) : error ? (
        'error'
      ) : (
          <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>45</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" onClick={handleDelete} />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      )}
    </div>
  )
}

export default MyGigs