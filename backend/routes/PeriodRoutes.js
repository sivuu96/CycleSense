import express from 'express';
import {Period} from '../schema/period.js'

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const addPeriod = {
            date : req.body.date,
            length : req.body.length,
            symptoms : req.body.symptoms,
            menstrual_flow : req.body.menstrual_flow,
            mood : req.body.mood,
        };

        const period = await  Period.create(addPeriod);
        return res.status(201).send(period);
    }
    catch(e){
        console.log(e.message);
        res.status(500).send({message:e.message});
    }
});

router.get('/all',async(req, res)=>{
    try{
        const periods = await Period.find({})
        return res.status(200).json(periods);
    }
    catch(err){
        console.log(e.message);
        res.status(500).send({message:e.message});
    }
});

export default router;