/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";

const app = express()
mongoose.set('strictQuery', true)

try{
    await mongoose.connect(port.env.MONGO);
console.log('Connected to MongoDB!')
} catch(error){
handleError(error);
}

app.listen(8800, () => {
console.log('Backend server is running!')
})