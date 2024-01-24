import User from '../../models/user.model.jsl.js'
import createError from '../../utils/createError.jsr.js'

export const deleteUser = async (req, res, next)=>{

    const user = await User.findById(req.params.id)
   
    
        if(req.userId !== user._id.toString()){
            return next(createError(403, 'You can delete only your account!'))
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send('user successfully deleted')       
}
export const getUser = async (req, res, next)=>{

    const user = await User.findById(req.params.id)
   
        res.status(200).send(user)       
}