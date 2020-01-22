"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = new mongoose_1.Mongoose();
exports.mongoose = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true, useUnifiedTopology: true }, function (Error) {
    if (!Error) {
        console.log("succes con");
    }
    else {
        console.log("error");
    }
});
