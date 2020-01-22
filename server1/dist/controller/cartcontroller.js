"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartmodel_1 = __importDefault(require("../model/cartmodel"));
function getcart(req, res) {
    console.log(req.body);
    cartmodel_1.default.aggregate([{ $lookup: { from: "subproducts", localField: "spid", foreignField: "_id", as: "join" } }])
        //  cart.find().populate('id')
        // cart.find()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
}
exports.getcart = getcart;
function addcart(req, res) {
    console.log("check cart call", req.body);
    var prod = new cartmodel_1.default({
        spid: req.body._id
    });
    console.log("check spid call", req.body._id);
    prod.save()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
}
exports.addcart = addcart;
