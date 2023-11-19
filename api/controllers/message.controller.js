import createError from "../utils/createError.js"
import Message from '../models/message.model.js'
import Conversation from '../models/conversation.model.js'

export const createMessage = async (req, res, next)=>{
    const newMessage = new Message({
        ConversationId : req.body.conversationId,
        userId: req.userId,
        desc: req.body.desc
    })
    try {
        
        const savedMessage = await newMessage.save()
        await Conversation.findOneAndUpdate({id: req.body.ConversationId},{
            $set:{
                
            }
        })
    } catch (err) {
        next(err)
    }
}
export const getMessages = async (req, res, next)=>{
    
    try {
        const messages = await Message.find({ConversationId : req.params.id})
        res.status(200).send(messages)
        
    } catch (err) {
        next(err)
    }
}
