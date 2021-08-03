import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './router/routers.js';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();


app.use('/posts', router);


app.listen(process.env.PORT, () => {
    console.log(`Server Started on ${process.env.PORT} port`);
     mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true 
    })
    .then(_ => console.log('Connected to DB'))
    .catch(err => console.log(`Error when connect DB: ${err}`));
});