import express from 'express';
import {User} from '../schema/user.js'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const jwt = require('jsonwebtoken');

const router = express.Router();

const createToken = (_id) =>{
    return jwt.sign({_id},'asdasdwebPsuxsfasf',{expiresIn: '3d'})
}

router.post('/login',async(req,res) => {

    const {email,password} = req.body
    try{
        const user = await User.login(email,password)

        const token = createToken(user._id)
        res.status(200).json({email,token})
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
    
})

router.post('/signup',async(req,res) => {

    const {email,password,first_name,last_name,phone} = req.body
    try{
        const user = await User.signup(email,password,first_name,last_name,phone);
        
        const token = createToken(user._id)
        res.status(200).json({email,token,first_name,last_name,phone});
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
})


router.get('/all',async(req, res)=>{
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