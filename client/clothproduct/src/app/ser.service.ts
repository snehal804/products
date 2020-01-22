import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient) {}

getcategory()
  {
   // return this.http.get("http://localhost:3000/category")
    return this.http.get("https://localhost:5001/api/category")
  }

 getproduct(id)
 {
  // return this.http.get("http://localhost:3000/productbyid?id="+id+"");
  // return this.http.get("http://localhost:3000/product/:id");
  return this.http.get("https://localhost:5001/api/product/"+id+"");
 }


 getsubproduct(id)
 {
  //  return this.http.get("http://localhost:3000/subproductbyid?id="+id+"");
  return this.http.get("https://localhost:5001/api/subproducts/" +id);
 }

 postcartdata(obj)
 {
  //  return this.http.post("http://localhost:3000/cart",obj);
     return this.http.post("https://localhost:5001/api/carts",obj);
 }
 getcartdata()
 {
  //  return this.http.get("http://localhost:3000/cart");
  return this.http.get("https://localhost:5001/api/carts");

 }
//  getcart(id)
//  {
//    return this.http.get("http://localhost:3000/subproduct",id);
//  }
 
 deleteitem(id){
  // return this.http.delete("http://localhost:3000/deletecart?id="+id+"");
   return this.http.delete("https://localhost:5001/api/carts/" +id);
 }

}
