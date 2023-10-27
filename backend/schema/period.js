import mongoose from "mongoose"

const periodSchema = mongoose.Schema(
    {
        date :{
            type:Date,
            //required:true,
        },
        length:{
            type:Number,
            //required:true,
        },
        symptoms:{
            type:String,
            //required:true,
        },
        menstrual_flow:{
            type:String,
            //required:true,
        },
        mood:{
            type:String,
            //required:true,
        },
        user_id:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
);
export const Period = mongoose.model('Period',periodSchema);