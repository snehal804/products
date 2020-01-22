import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
response;

  constructor(private s:SerService, private rout:Router) { }

  ngOnInit() {
    this.s.getcategory().subscribe((d)=>{
     // console.log("init"+ JSON.stringify(d));
      this.response=d
    });
    
  }

  onclick(id)
  {
    console.log("id"+id);
    this.s.getproduct(id).subscribe(r=>{
     // alert(JSON.stringify(r))
      console.log("check data"+JSON.stringify(r));
      this.rout.navigate(['/actionproduct',JSON.stringify(r)])
    })
  }

}
