import {Mongoose} from 'mongoose';
const mongoose = new Mongoose();
 
mongoose.connect('mongodb://127.0.0.1:27017/products',{useNewUrlParser:true,useUnifiedTopology:true} ,
(Error:any)=>
{
    if(!Error)
    {
        console.log("succes con");
    }else {
        console.log("error");
    }
});
export{mongoose}