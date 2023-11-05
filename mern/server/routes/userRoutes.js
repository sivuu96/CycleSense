import express from 'express';
import {User} from '../schema/user.js'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const jwt = require('jsonwebtoken');
import mongoose from 'mongoose';

const router = express.Router();

const createToken = (_id) =>{
    return jwt.sign({_id},'asdasdwebPsuxsfasf',{expiresIn: '3d'})
}

router.route('/login').post(async(req,res) => {

    const {email,password} = req.body
    try{
        const user = await User.login(email,password)

        const id = user._id
        const first_name = user.first_name
        const last_name = user.last_name
        const phone = user.phone

        const token = createToken(user._id)
        res.status(200).json({email,token,id,first_name,last_name,phone})
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
    
})

router.route('/signup').post(async(req,res) => {

    const {email,password,first_name,last_name,phone} = req.body
    try{
        const user = await User.signup(email,password,first_name,last_name,phone);
        
        const token = createToken(user._id)
        const id = user._id
        res.status(200).json({email,token,first_name,last_name,phone,id});
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
})

router.route('/delete/:id').delete( async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }

    const user = await User.findOneAndDelete({_id: id})
    if (!user) {
      return res.status(400).json({error: 'No such user'})
    }
    res.status(200).json(user)
})

router.route('/update/:id').put(async(req,res)=>{
    const {id} = req.params
    const updatedFields = req.body

    console.log(updatedFields)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const updatedUser = await User.findByIdAndUpdate(id,
        {$set:updatedFields},
        {new:true}    
    )
    return res.json(updatedUser)
})

router.route('/all').get(async(req, res)=>{
    try{
        const users = await User.find({})
        return res.status(200).json(users);
    }
    catch(err){
        console.log(e.message);
        res.status(500).send({message:e.message});
    }
});

export default router;