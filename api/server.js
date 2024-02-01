import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import messageRoute from './routes/message.route.js';
import conversationRoute from './routes/conversation.route.js';
import orderRoute from './routes/order.route.js';
import reviewRoute from './routes/review.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log(error);
    }
};

const port = process.env.PORT || 8800;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://t-work-prototype.vercel.app');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// Enable CORS for all routes
const corsOptions = {
    origin: 'https://t-work-prototype.vercel.app',
    credentials: true,
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Apply CORS middleware before your routes
app.use('/api', cors(corsOptions));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/messages', messageRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/order', orderRoute);
app.use('/api/review', reviewRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'something went wrong!';

    return res.status(errorStatus).send(errorMessage);
});

app.listen(port, () => {
    connect();
    console.log('Backend server is running!');
});