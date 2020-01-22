"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("../conn/mongoose");
var mongoose_2 = require("mongoose");
exports.CartSchema = new mongoose_2.Schema({
    spid: { type: mongoose_2.Types.ObjectId }
    // quantity:{type:Number}
});
var Cart = mongoose_1.mongoose.model("cart", exports.CartSchema);
exports.default = Cart;
