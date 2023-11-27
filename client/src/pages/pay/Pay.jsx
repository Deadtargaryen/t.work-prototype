import React, { useState, useEffect } from 'react'
import './Pay.scss'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import newRequest from '../../utils/newRequest.js'
import {useParams} from 'react-router-dom'
import CheckoutForm from '../../components/checkoutForm/CheckoutForm.jsx'

const stripePromise = loadStripe("pk_test_51OAUSFCMrdoK8LFGM6urHSnFPwzZjhloDYHuEP0jDPQ3lMD3hdu3tcxHpmtEumeTqPgBhVe9fXjLz5PVIsG9GPay00O6XE0Qmx");


const Pay = () => {

  const [clientSecret, setClientSecret] = useState("")

  const {id} = useParams()

  useEffect(()=>{
    const makeRequest = async ()=>{
      try {
        const res = await newRequest.post(`/orders/create-payment-intent/${id}`
        )
        setClientSecret(res.data.clientSecret)
      } 
      catch (err) {
        console.log(err)
      }
    }
    makeRequest
  },[])

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='pay'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay