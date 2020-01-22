import {Request, Response} from "express";
import Subproduct from '../model/subproductmodel';

export function getsubproductbyid  (req:Request,res:Response){
    console.log(req.query.id);
    Subproduct.find({pid:req.query.id})
    .then((result) => {
      res.status(200).json(result);
  })
  .catch((result) => {
      res.status(500).json(result);
})

}
export function addsubproduct  (req:Request, res: Response){
    console.log("check product call",req.body);
    let prod = new Subproduct(req.body)
    prod.save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((result) => {
        res.status(500).json(result);
})
}
export function getsubproduct (req:Request,res:Response) {
    console.log(req.body);
    Subproduct.find()
    .then((result) => {
      res.status(200).json(result);
  })
  .catch((result) => {
      res.status(500).json(result);
})

}