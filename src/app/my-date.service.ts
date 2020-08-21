import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDateService {

  constructor() { }
  showTodayDate() {
    debugger;
    let ndate = new Date();
    return ndate;
 }

 divFunction(num1,num2){
   debugger;
  let result = num1 / num2;
  console.log(result,"result");
  return result;
   

 }

}
