import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartarr :any;
totalcartItem : any[]=[];
  constructor(private s:SerService, private route:ActivatedRoute,private rou:Router) { }
res:any=[];
respons
  ngOnInit() {
    // this.res=this.s.getcartdata()

      this.s.getcartdata().subscribe(d=>
        
          this.res=d)
          
      
             // this.getCartList()
  }
   params = new HttpParams().set('id', '1');

delete(id){
  
  this.s.deleteitem(id).subscribe(d=>
    { alert(JSON.stringify(d))
    
    })

}

  // getCartList(){
 
  //   this.s.getcartdata().subscribe((data)=>{ 
  //    this.cartarr = data;
  //    console.log(this.cartarr)
  //        this.cartarr.forEach(element => {
              
  //         this.s.getsubproduct(element.spid).subscribe((data)=>{
           
  //           this.totalcartItem.push(data)
            
  //          });
           
  //        });

  //    })

  // }

}
