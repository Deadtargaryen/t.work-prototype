import createError from "../utils/createError.js"
import Order from '../models/order.model.js'
import Gig from '../models/gig.model.js'
import Stripe from 'stripe';

export const intent = async (req, res, next) =>{
    const stripe = new Stripe(
        process.env.STRIPE
    )

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });
      
}

export const createOrder = async (req, res, next)=>{
    try {

        const gig = await Gig.findById(req.params.gigId)
        
        const newOrder = new Order ({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: 'temporary',
        })

        await newOrder.save()
        res.status(200).send('stripe-id-successful')
    } catch (err) {
        next(err)
    }
}

export const getOrders = async (req, res, next)=>{
    try {
         
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true,
        })

        res.status(200).send(orders)

    } catch (err) {
        next(err)
    }
}