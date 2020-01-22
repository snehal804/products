import {mongoose}  from "../conn/mongoose";
import { Document,Schema } from "mongoose"

// export interface Iproduct extends Document {
//      category:string;
// }
//  const CategorySchema = new mongoose.Schema({
//     category:{type:String}
    
// });

// export default mongoose.model("transaction",CategorySchema);



export interface Iproduct extends Document {
    category:string
    
}
export const  CategorySchema= new Schema({
    category:{type:String}
  
});

const Category = mongoose.model<Iproduct>("category",CategorySchema);
export default Category;
