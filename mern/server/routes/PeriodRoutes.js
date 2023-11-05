import express from 'express';
import {Period} from '../schema/period.js'
import requireAuth from '../middleware/requireAuth.js';
import mongoose from 'mongoose';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');

const router = express.Router();
router.use(requireAuth)

router.route('/').post(async(req,res)=>{
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

router.route('/all').get(async(req, res)=>{
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
router.route('/sendemail').post(async(req,res)=>{
    const email=req.body.mail

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'cyclesense.notif@gmail.com',
          pass: 'ubqv zxrq wfuf zyej',
        },
      });
      
      // Email data
      const mailOptions = {
        from: 'cyclesense.notif@gmail.com',
        to: email,
        subject: 'Period Reminder',
        text: '(This is an autogenerated email. Do not reply.)\n\nGreetings User!\nHope you are doing well.\nWe hope this message finds you well. We are here to remind you that your menstrual cycle is approaching, and your periods are due within 2 days.\nRemember that it is entirely normal to experience a range of emotions and physical changes during your menstrual cycle. It is a natural part of being a woman, and you are not alone in this journey.\nIf you have any specific concerns or questions about your menstrual health, do not hesitate to consult with a healthcare professional.\nFor further details regarding your cycle, log in to your account. We wish you health! Thanks!\n\nTeam CycleSense',
      };
      
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ' + error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
);

router.route('/update/:id').put(async(req,res)=>{
    const {id} = req.params
    const updatedFields = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const updatedPeriod = await Period.findByIdAndUpdate(id,
        {$set:updatedFields},
        {new:true}    
    )
    return res.json(updatedPeriod)
})

router.route('/delete/:id').delete( async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }

    const period = await Period.findOneAndDelete({_id: id})
    if (!period) {
      return res.status(400).json({error: 'No such period'})
    }
    res.status(200).json(period)
})

export default router;