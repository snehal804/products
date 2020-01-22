"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("../conn/mongoose");
var mongoose_2 = require("mongoose");
exports.ProductSchema = new mongoose_2.Schema({
    cid: mongoose_2.Types.ObjectId,
    pname: { type: String },
    pcompany: { type: String }
});
var Product = mongoose_1.mongoose.model("product", exports.ProductSchema);
exports.default = Product;
