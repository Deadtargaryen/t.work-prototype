import express from 'express'
import { 
    getConversations, 
    createConversation, 
    getSingleConversation,
    updateConversation } from '../controllers/conversation.controller.js'
import { verifyToken } from '../middleware/jwt.js'

const router =  express.Router()

router.get('/', verifyToken, getConversations )
router.get('/', verifyToken, createConversation )
router.get('/single/:id', verifyToken, getSingleConversation )
router.get('/:id', verifyToken, updateConversation )

export default router