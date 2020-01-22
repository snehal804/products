const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./product')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
 // res.add_header('Access-Control-Allow-Origin'. 'http://localhost:4200' always);
  res.header("Access-Control-Allow-Credentials", "true");

  res.header("Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/category', db.getcategory)
app.get('/category/:id', db.getcategoryById)
//app.get('/product', db.getproduct)
app.get('/product',db.getproductById)
app.get('/subproduct',db.getsubproductById)
app.post('/cart', db.createcart)
 app.get('/getcart', db.getcart)
//  app.post('/cartkurtas', db.createcartkurtas)
//  app.get('/cartkurtas/:id', db.getcartkurtasById)
// app.put('/users/:id', db.updateUser)
 app.delete('/deletecart', db.deletecart)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})