import express from 'express';
import {User} from '../schema/user.js'

const router = express.Router();

router.post('/new',async(req,res)=>{
    try{
        const newUser = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
        };

        const user = await  User.create(newUser);
        return res.status(201).send(user);
    }
    catch(e){
        console.log(e.message);
        res.status(500).send({message:e.message});
    }
});

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