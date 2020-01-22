import express from 'express';
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const  categorycontroller = require("./controller/categorycontroller");
const productcontroller = require("./controller/productscontroller")
import * as subproductscontroller from './controller/subproductscontroller';
import * as cartcontroller from './controller/cartcontroller';

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:true
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
 // res.add_header('Access-Control-Allow-Origin'. 'http://localhost:4200' always);
  res.header("Access-Control-Allow-Credentials", "true");

  res.header("Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

//category routes

app.get('/category',categorycontroller.getcategory);
app.get('/category/:id',categorycontroller.getcategorybyid);
app.post('/category',categorycontroller.addcategory);

//product routes
//app.get('/product/:id',productcontroller.getproductbyid);
app.get('/productbyid',productcontroller.getproductbyid);
//app.get('/product',productcontroller.getproduct);
app.post('/product',productcontroller.addproduct);

// subproduct routes
app.get('/subproduct',subproductscontroller.getsubproduct);
app.get('/subproductbyid',subproductscontroller.getsubproductbyid);
app.post('/subproduct',subproductscontroller.addsubproduct);

//cart routes
app.get('/cart',cartcontroller.getcart);
app.post('/cart',cartcontroller.addcart);

app.get('/', (req, res) => {
  res.send('!!!!!!!');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});



module.exports = app;