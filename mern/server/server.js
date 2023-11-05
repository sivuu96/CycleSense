import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.mongoDBURL
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import PeriodRoutes from './routes/PeriodRoutes.js'
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('CycleSense Up')
});

// app.listen(PORT, () =>{
//     console.log(`App listening to port ${PORT}`);
// });

app.use('/user',userRoutes);
app.use('/period',PeriodRoutes)

mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log(`Connected to DB`);
        app.listen(PORT,() =>{
            console.log(`App listening to port ${PORT}`);
        });
    })
    .catch((error) =>{
        console.log(`Error: ${error}`);
    });

