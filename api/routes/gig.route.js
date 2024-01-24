import express from 'express'
import { verifyToken } from '../middleware/jwt.js'
import { createGig } from '../controllers/gig.controller.js'
import { deleteGig } from '../controllers/gig.controller.js'
import { getGig } from '../controllers/gig.controller.js'
import { getGigs } from '../controllers/gig.controller.js'

const router =  express.Router()

router.post('/', verifyToken, createGig)
router.delete('/:id', verifyToken, deleteGig)
router.get('/single/:id', getGig)
router.get('/', getGigs)

export default router