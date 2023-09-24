import User from '../models/user.model.js'

export const register = async (req,res)=>{

    try{
        const newUser = new User (req.body)

        await newUser.save()
        res.status(201).send('User created Successfully')
    }catch(err){
        res.status(500).send('something went wrong!')
    }
}
export const login = async (req,res)=>{
   
}
export const logout = async (req,res)=>{
   
}