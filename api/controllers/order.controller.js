import createError from "../utils/createError.js"
import Order from '../models/order.model.js'
import Gig from '../models/gig.model.js'

export const createOrder = async (req, res, next)=>{
    try {

        const gig = Gig.findById(req.params.gigId)
        
        const newOrder = new Order ({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: 'temporary',
        })

    } catch (err) {
        next(err)
    }
}