import {mongoose}  from "../conn/mongoose";
import { Document,Schema, Types } from "mongoose"

export interface Iproduct extends Document {
    colour:string,
     pid:Types.ObjectId,
     material:string,
     price:number,
     name:string,
     size:number
}
export const SubproductsSchema = new Schema({
    pid:{type:Types.ObjectId},
    name:{type:String},
    colour:{type:String},
    size:{type:Number},
    material:{type:String},
    price:{type:Number}
});

const Subproducts = mongoose.model<Iproduct>("subproduct", SubproductsSchema);
export default Subproducts;