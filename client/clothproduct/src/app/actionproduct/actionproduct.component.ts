import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { SerService } from '../ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actionproduct',
  templateUrl: './actionproduct.component.html',
  styleUrls: ['./actionproduct.component.css']
})
export class ActionproductComponent implements OnInit {
  res:any[]=[];
  response;
  data;
  constructor(private route:ActivatedRoute, private router:Router,private s:SerService) { }

  ngOnInit() {
 
   this.route.params.subscribe(par => {
     this.res =JSON.parse(par['data']) ;
      });
     
  }


    onclick(id)
    {
      console.log(id)
  this.s.getsubproduct(id).subscribe(d=>
    {console.log("check data"+JSON.stringify(d));
      this.response=d})
    }

    oncartclick(obj)
    {


      console.log(obj)
    //  this.router.navigate(['/cart',JSON.stringify(obj)])
       this.s.postcartdata(obj).subscribe((r)=> {
        alert(JSON.stringify(r))
        console.log(JSON.stringify(r))
         this.data=r
        //  if(this.data.status == 201){
        //   this.router.navigate(['/cart']);
        //  }
      //   this.data=r
        this.router.navigate(['/cart'])
     });

  }
    

}
