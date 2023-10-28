import express from 'express';
import {Period} from '../schema/period.js'
import requireAuth from '../middleware/requireAuth.js';
import mongoose from 'mongoose';

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
            user_id : user_id,
            next_date : req.body.next_date
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

router.put('/update/:id',async(req,res)=>{
    const {id} = req.params
    const updatedFields = req.body

    console.log(updatedFields)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const updatedPeriod = await Period.findByIdAndUpdate(id,
        {$set:updatedFields},
        {new:true}    
    )
    return res.json(updatedPeriod)
})

export default router;