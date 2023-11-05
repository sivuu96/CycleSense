import {User} from '../schema/user.js'
import jwt from 'jsonwebtoken'

const requireAuth = async(req, res, next) => {

    const {authorization} = req.headers
    if(!authorization) {
        return res.status(401).json({error:'Auth token required'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, 'asdasdwebPsuxsfasf')

        req.user = await User.findOne({_id}).select('_id')
        next() 
    }
    catch(error){
        console.log()
        res.status(401).json({error:'Request not valid'})
    }

}

export default requireAuth