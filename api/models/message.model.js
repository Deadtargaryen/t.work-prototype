import mongoose from 'mongoose';
const { Schema } = mongoose;

const MessageSchema = new Schema({
  ConversationId: {
    type: String,
    required: true,
    unique: true,
  },
userId: {
    type: String,
    required: true,
    unique: true,
  },
desc: {
    type: String,
    required: true,
    unique: true,
  },
}, {
    timestamps: true
});

export default mongoose.model('Message', MessageSchema)