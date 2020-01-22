import {mongoose}  from "../conn/mongoose";
import { Document,Schema, Types } from "mongoose"

export interface Iproduct extends Document {
     spid:Types.ObjectId
     //quantity:number


}
export const CartSchema = new Schema({
     spid:{type:Types.ObjectId}
    // quantity:{type:Number}
 
});

const Cart = mongoose.model<Iproduct>("cart",CartSchema);
export default Cart;
