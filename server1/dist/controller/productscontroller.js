"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var productmodel_1 = __importDefault(require("../model/productmodel"));
exports.getproductbyid = function (req, res) {
    console.log(req.query.id);
    productmodel_1.default.find({ cid: req.query.id })
        // console.log(req.params.id);
        // Product.findById({cid:req.params.id})
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
};
exports.addproduct = function (req, res) {
    console.log("check product call", req.body);
    var prod = new productmodel_1.default(req.body);
    prod.save()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
};
exports.getproduct = function (req, res) {
    console.log(req.body);
    productmodel_1.default.find()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
};
