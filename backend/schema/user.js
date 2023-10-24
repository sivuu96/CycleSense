import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

const userSchema = mongoose.Schema(
    {
        email :{
            type:String,
            //required:true,
        },
        first_name:{
            type:String,
            //required:true,
        },
        last_name:{
            type:String,
            //required:true,
        },
        password:{
            type:String,
            //required:true,
        },
        phone:{
            type:String,
            //required:true,
        }
    },
    {
        timestamps:true,
    }
);

userSchema.statics.signup = async function(email, password, first_name, last_name, phone) {

    if(!email||!password){
        throw Error("Fill the missing fields")
    }

    if(!validator.isEmail(email)){
        throw Error("Enter a valid email")
    }
    
    const exists = await this.findOne({email})
    if(exists) {
        throw Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email,password:hash,first_name,last_name,phone})

    return user
};

userSchema.statics.login = async function(email, password){
    
    if(!email||!password){
        throw Error("Fill the missing fields")
    }

    const user = await this.findOne({email})
    if(!user) {
        throw Error('User does not exist. Sign up');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password');
    }

    return user;
}

export const User = mongoose.model('User',userSchema);