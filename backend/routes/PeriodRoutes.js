import express from 'express';
import {Period} from '../schema/period.js'
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();
router.use(requireAuth)

router.post('/',async(req,res)=>{
    try{
        const user_id = req.user._id

        const addPeriod = {
            date : req.body.date,
            length : req.body.length,
            symptoms : req.body.symptoms,
            menstrual_flow : req.body.menstrual_flow,
            mood : req.body.mood,
            user_id : user_id
        };
        const period = await Period.create(addPeriod);
        return res.status(201).send(period);
    }
    catch(e){
        console.log(e.message);
        res.status(500).send({message:e.message});
    }
});

router.get('/all',async(req, res)=>{
    const user_id = req.user._id
    try{
        const periods = await Period.find({user_id})
        return res.status(200).json(periods);
    }
    catch(err){
        console.log(e.message);
        res.status(500).send({message:e.message});
    }
});

export default router;