import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  gigId:{
    type: String,
    required: true,
  },
  userId:{
    type: String,
    required: true,
  },
  star:{
    type: Number,
    required: true,
  },
  gigId:{
    type: String,
    required: true,
  },
  gigId:{
    type: String,
    required: true,
  },
  gigId:{
    type: String,
    required: true,
  },
}, {
    timestamps: true
});

export default mongoose.model('Review', ReviewSchema)