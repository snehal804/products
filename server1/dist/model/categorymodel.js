"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("../conn/mongoose");
var mongoose_2 = require("mongoose");
exports.CategorySchema = new mongoose_2.Schema({
    category: { type: String }
});
var Category = mongoose_1.mongoose.model("category", exports.CategorySchema);
exports.default = Category;
