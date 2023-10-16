import React, { useRef, useState } from 'react'
import './Gigs.scss'
import GigCard from '../../components/gigCard/GigCard'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
const Gigs = () => {

  const [ sort, setSort ] = useState("sales")
  const [ open, setOpen ] = useState(false)
  const minRef = useRef()
  const maxRef = useRef()

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      newRequest.get('/gigs').then(res=>{
        return res.data
      })
  })

  console.log(data)

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>t.work &gt; Graphics & Design &gt;</span>
        <h1>AI Artists</h1>
        <p>Explore the boundary of art and tech with t<span className='dot'>.</span>work&#39;s AI artists</p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>Sort By</span>
            <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src='/img/down.png' alt='' onClick={()=>setOpen(!open)}/>
            {open && (
            <div className='rightMenu'>
              {sort ==="sales" ? (<span onClick={()=>reSort("createdAt")}>Newest</span>)
              :
              (<span onClick={()=>reSort("sales")}>Best Selling</span>)}
            </div>)}
          </div>
        </div>
        <div className="cards">
          {isLoading ? 'loading' 
          : error ? 'Something went wrong!'
          : data.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
