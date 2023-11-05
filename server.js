import express from "express";
import {PORT,mongoDBURL} from "./config.js"
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import PeriodRoutes from './routes/PeriodRoutes.js'
import cors from 'cors';
import path from 'path'

const app = express();

app.use(express.json());
app.use(cors());

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

//production script
app.use(express.static("./frontend/build"))
app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "frontend","build","index.html"))
})
