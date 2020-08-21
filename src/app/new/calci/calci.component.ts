import { Component, OnInit,NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ MyDateService } from '../../my-date.service';


@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
 num1:number;
   num2:number;
  result:number;


  constructor( private myDateService :MyDateService) { }

  AdditionFunction(){
  this.result = +this.num1+  + this.num2;
  
    console.log(this.result,"result");
  }

  SubstractionFunction(){
    this.result = this.num1 - this.num2;
    console.log(this.result,"result");

  }

  MultiplicationFunction(){
    this.result = this.num1 * this.num2;
    console.log(this.result,"result");

  }
 
  divFunction(){
    debugger;
   this.result =this.myDateService.divFunction(this.num1,this.num2)
    console.log(this.result,"result");

  }




  ngOnInit() {
  }


 

}