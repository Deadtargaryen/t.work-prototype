import express from 'express'
import { verifyToken } from '../middleware/jwt.js'

const router =  express.Router()

router.post('/', verifyToken, createGig)
router.delete('/:id', verifyToken, deleteGig)
router.get('/single/:id', verifyToken, createGig)
router.get('/', verifyToken, getGig)
router.get('/', verifyToken, getGigs)

export default router