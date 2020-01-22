import {mongoose}  from "../conn/mongoose";
import { Document,Schema,Types } from "mongoose";


export interface Iproduct extends Document {
    cid:Types.ObjectId,
    pname:string,
    pcompany:string,
}
export const ProductSchema = new Schema({
    cid:Types.ObjectId,
    pname:{type:String},
    pcompany:{type:String}
});

const Product = mongoose.model<Iproduct>("product", ProductSchema);
export default Product;