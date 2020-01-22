"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var categorymodel_1 = __importDefault(require("../model/categorymodel"));
exports.getcategory = function (req, res) {
    console.log(req.body);
    categorymodel_1.default.find()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
};
exports.getcategorybyid = function (req, res) {
    console.log(req.body);
    categorymodel_1.default.findById(req.params.id)
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
};
exports.addcategory = function (req, res) {
    console.log("check product call", req.body);
    var prod = new categorymodel_1.default(req.body);
    prod.save()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
};
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
