import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {User} from '../schema/user.js'
const jwt = require('jsonwebtoken');

const router = express.Router();

const createToken = (_id) =>{
    return jwt.sign({_id},'asdasdwebPsuxsfasf',{expiresIn: '3d'})
}

router.post('/login',async(req,res) => {
    res.json({mssg : 'login user'})
})

router.post('/signup',async(req,res) => {

    const {email,password,first_name,last_name,phone} = req.body
    try{
        const user = await  User.signup(email,password,first_name,last_name,phone);
        
        const token = createToken(user._id)
        res.status(200).json({email,token,first_name,last_name,phone});
    }
    catch(e){
        console.log(e.message);
        res.status(500).send({message:e.message});
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