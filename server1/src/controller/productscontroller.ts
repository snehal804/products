import {Request, Response} from "express";
import Product from '../model/productmodel';

exports.getproductbyid = (req:Request,res:Response)=>{
    console.log(req.query.id);
    Product.find({cid:req.query.id})
    // console.log(req.params.id);
    // Product.findById({cid:req.params.id})
    .then((result) => {
      res.status(200).json(result);
  })
  .catch((result) => {
      res.status(500).json(result);
})

}
exports.addproduct = (req:Request, res: Response)=>{
    console.log("check product call",req.body);
    let prod = new Product(req.body)
    prod.save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((result) => {
        res.status(500).json(result);
})
}
exports.getproduct=(req:Request,res:Response)=>{
    console.log(req.body);
    Product.find()
    .then((result) => {
      res.status(200).json(result);
  })
  .catch((result) => {
      res.status(500).json(result);
})

}