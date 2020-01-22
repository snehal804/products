"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
var app = express_1.default();
var port = 3000;
var categorycontroller = require("./controller/categorycontroller");
var productcontroller = require("./controller/productscontroller");
var subproductscontroller = __importStar(require("./controller/subproductscontroller"));
var cartcontroller = __importStar(require("./controller/cartcontroller"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.add_header('Access-Control-Allow-Origin'. 'http://localhost:4200' always);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
//category routes
app.get('/category', categorycontroller.getcategory);
app.get('/category/:id', categorycontroller.getcategorybyid);
app.post('/category', categorycontroller.addcategory);
//product routes
//app.get('/product/:id',productcontroller.getproductbyid);
app.get('/productbyid', productcontroller.getproductbyid);
//app.get('/product',productcontroller.getproduct);
app.post('/product', productcontroller.addproduct);
// subproduct routes
app.get('/subproduct', subproductscontroller.getsubproduct);
app.get('/subproductbyid', subproductscontroller.getsubproductbyid);
app.post('/subproduct', subproductscontroller.addsubproduct);
//cart routes
app.get('/cart', cartcontroller.getcart);
app.post('/cart', cartcontroller.addcart);
app.get('/', function (req, res) {
    res.send('!!!!!!!');
});
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});
module.exports = app;
