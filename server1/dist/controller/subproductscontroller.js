"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subproductmodel_1 = __importDefault(require("../model/subproductmodel"));
function getsubproductbyid(req, res) {
    console.log(req.query.id);
    subproductmodel_1.default.find({ pid: req.query.id })
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
}
exports.getsubproductbyid = getsubproductbyid;
function addsubproduct(req, res) {
    console.log("check product call", req.body);
    var prod = new subproductmodel_1.default(req.body);
    prod.save()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
}
exports.addsubproduct = addsubproduct;
function getsubproduct(req, res) {
    console.log(req.body);
    subproductmodel_1.default.find()
        .then(function (result) {
        res.status(200).json(result);
    })
        .catch(function (result) {
        res.status(500).json(result);
    });
}
exports.getsubproduct = getsubproduct;
