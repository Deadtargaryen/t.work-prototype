import createError from "../utils/createError"
import Order from '../models/order.model.js'

export const createOrder = async (req, res, next)=>{
    try {
        
        const newOrder = new Order ({

        })

    } catch (err) {
        next(err)
    }
}