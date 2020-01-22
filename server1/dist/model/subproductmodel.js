"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("../conn/mongoose");
var mongoose_2 = require("mongoose");
exports.SubproductsSchema = new mongoose_2.Schema({
    pid: { type: mongoose_2.Types.ObjectId },
    name: { type: String },
    colour: { type: String },
    size: { type: Number },
    material: { type: String },
    price: { type: Number }
});
var Subproducts = mongoose_1.mongoose.model("subproduct", exports.SubproductsSchema);
exports.default = Subproducts;
