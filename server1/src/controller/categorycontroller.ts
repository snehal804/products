import {Request, Response} from "express";
import Category from '../model/categorymodel';
import { NextFunction } from "connect";



exports.getcategory=(req:Request,res:Response)=>{
    console.log(req.body);
    Category.find()
    .then((result) => {
      res.status(200).json(result);
  })
  .catch((result) => {
      res.status(500).json(result);
})

}

exports.getcategorybyid=(req:Request,res:Response)=>{
    console.log(req.body);
    Category.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
  })
  .catch((result) => {
      res.status(500).json(result);
})

}
exports.addcategory = (req:Request, res: Response)=>{
    console.log("check product call",req.body);
    let prod = new Category(req.body)
    prod.save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((result) => {
        res.status(500).json(result);
})
}

// exports.addproducts = (req:Request, res: Response)=>{
//     console.log("check product call",req.body);
//     let prod = new Product(req.body)
//     prod.save()
//     .then((result) => {
//         res.status(200).json(result);
//     })
//     .catch((result) => {
//         res.status(500).json(result);
// })
// }

// exports.getcategory=async(req:Request,res:Response)=>{
//     console.log("inside getcategory ");
//     try {
//         var data = await Category.find();
//         return res.status(200).json({data:data});
//     } catch (error) {
//         return res.status(400).json({data:error.message});
//     }
//    Category.find()
//     .then((result) => {
//       res.status(200).json(result);
//   })
//   .catch((result) => {
//       res.status(500).json(result);
// })

// }

// exports.postOBJ = async(req:Request,res:Response,next:NextFunction)=>{
//     const saveData =new Category ({
//     category : req.body.category
//     })
// console.log(JSON.stringify(saveData));
//     try {
//         var save = await saveData.save();
//         return res.status(200).json({data:save});
//     } catch (error) {
//         return res.status(400).json({data:error.message});
//     }
// }