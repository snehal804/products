import {Request,Response } from "express";
import  cart from '../model/cartmodel';

export function getcart (req:Request, res:Response){
    console.log(req.body)
     cart.aggregate([{ $lookup:{ from:"subproducts",localField:"spid",foreignField:"_id",as:"join"}}])
    //  cart.find().populate('id')
    // cart.find()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((result)=>{
        res.status(500).json(result);
    })
}
export function addcart (req:Request, res: Response){
    console.log("check cart call",req.body);
    let prod = new cart({
        spid:req.body._id
      
    })
 console.log("check spid call",req.body._id);

    prod.save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((result) => {
        res.status(500).json(result);
})
}

