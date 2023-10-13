import gig from '../models/gig.model'
import createError from '../utils/createError'

export const createGig = async (req, res, next) => {
if (!req.isSeller) return next(createError(403, 'Only sellers can create a gig!'))

const newGig = new Gig ({
    userId: req.userId,
    ...req.body
})

    try {
        const savedGig = await newGig.save()
        res.status(201).json(savedGig)
    } catch (err) {
        next (err)
    }
}
export const deleteGig = async (req, res, next) => {
    
}
export const getGig = async (req, res, next) => {

}
export const getGigs = async (req, res, next) => {

}