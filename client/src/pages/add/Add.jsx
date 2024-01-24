    import React, { useReducer, useState } from 'react'
    import {gigReducer, INITIAL_STATE} from '../../reducers/gigReducer.js'
    import "./Add.scss"
    import upload from '../../utils/upload.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest.js'
import { useNavigate } from 'react-router-dom'

    const Add = () => {

      const [singleFile, setSingleFile] = useState(undefined)
      const [files, setFiles] = useState([])
      const [uploading, setUploading] = useState([])

      const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE)

      const handleChange = (e) =>{
        dispatch({
        type: 'CHANGE_INPUT', 
        payload:{name: e.target.name, value: e.target.value },
      })
      }

      const handleFeature = (e) =>{
        e.preventDefault()
        dispatch({
        type: 'ADD_FEATURE', 
        payload: e.target[0].value,
      })
      e.target[0].value = ''
      }

      const handleUpload = async () =>{
        setUploading(true)
        try {
          const cover = await upload(singleFile)

          const images = await Promise.all(
            [...files].map(async (file)=>{
              const url = await upload(file)
              return url
            })
          )
          setUploading(false)
          dispatch({type: 'ADD_IMAGES', payload:{ cover, images }})
        } catch (err) {
          console.log(err);
        }
      }

      const navigate = useNavigate()

      const queryClient = useQueryClient()
      
      const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post('/gigs', gig)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(['myGigs'])
    }
  })

      const handleSubmit = (e) =>{
        e.preventDefault()
        mutation.mutate(state)
        navigate('/mygigs')
      }

      return (
        <div className='add'>
          <div className="container">
            <h1>Add New Gig</h1>
            <div className="sections">
              <div className="left">
                <label htmlFor="">Title</label>
                <input 
                type="text" 
                name="title" 
                placeholder='e.g. I will do something I am really good at' 
                  onChange={handleChange}
                />
                <label htmlFor="">Category</label>
                <select name="cat" id="cat" onChange={handleChange}>
                  <option value="design">Design</option>
                  <option value="music">Music</option>
                  <option value="web">Web Development</option>
                  <option value="animation">Animation</option>
                </select>
                <div className='images'>
                  <div className='imagesInputs'>
                    <label htmlFor="">Cover Image</label>
                    <input type="file" onChange={(e)=>setSingleFile(e.target.files[0])} />
                    <label htmlFor="">Upload Image(s)</label>
                    <input type="file" multiple 
                    onChange={(e)=>setFiles(e.target.files)}/>
                  </div>
                </div>
                  <button onClick={handleUpload}>
                  {uploading ? 'uploading' : 'upload'}
                  </button>
                <label htmlFor="">Description</label>
                <textarea name="desc" 
                id="" cols="30" rows="16" 
                placeholder='Brief description to talk about your services'
                onChange={handleChange}
                ></textarea>
              <button onClick={handleSubmit}>Create</button>
              </div>
              <div className="right">
                <label htmlFor="">Service Title</label>
                <input type="text" name='shortTitle' 
                placeholder='e.g. one-page web design' onChange={handleChange}/>
                <label htmlFor="">Short Description</label>
                <textarea name="shortDesc" 
                id="" 
                cols="30" rows="10" 
                placeholder='Short Description of your service'
                onChange={handleChange}
                ></textarea>
                <label htmlFor="">Delivery Time (e.g. 3 days)</label>
                <input name='deliveryTime'
                type="number" min={1} 
                  onChange={handleChange}
                />
                <label htmlFor="">Revision Number</label>
                <input name='revisionNumber'
                type="number" min={1} 
                  onChange={handleChange}
                />
                <label htmlFor="">Add Features</label>
                <form action='' className='add' onSubmit={handleFeature}>
                <input type="text" placeholder='e.g. page-design'/>
                <button type='submit'>+</button>
                </form>
                <div className='addedFeatures'>
                  {state?.features?.map((f)=>(
                  <div className='item' key={f}>
                  <button onClick={()=>dispatch({type:'REMOVE_FEATURE', payload: f})}>
                  {f}
                  <span>X</span>
                  </button>
                  </div>
                  ))}
                </div>
                <label htmlFor="">Price</label>
                <input name='price'
                type="number" min={1} 
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Add