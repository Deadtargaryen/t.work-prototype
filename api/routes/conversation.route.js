import express from 'express'

const router =  express.Router()

router.get('/', verifyToken, getConversations ),
router.get('/', verifyToken, createConversation ),
router.get('/single/:id', verifyToken, getSingleConversation ),
router.get('/:id', verifyToken, updateConversation )

export default router