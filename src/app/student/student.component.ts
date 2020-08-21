import { Component, OnInit,NgModule} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Student } from '../models/student';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']

})
export class StudentComponent implements OnInit {

  id:any;
  name:any;
  email:any;
  phoneNumber:any;
  department:any;
   idEdit:number;
   studentForm: any;


studdata = [
  { 
  id:1,
   name:'komal',
    email:'komallaawand678@gmail.com',
    phoneNumber:97628415,
    department:'computer'
   
  },
  {
   id:2,
   name:'rupali',
    email:'rupali@gmail.com',
    phoneNumber:97628415,
    department:'It'

  },
  {
   id:3,
   name:'manisha',
    email:'manisha@gmail.com',
    phoneNumber:97628415,
    department:'computer'

  }
];

constructor(){

}

ngOnInit() {
}

SaveStudent(studentForm:NgForm){
debugger;

let i = this.studdata.findIndex(s =>  s.id == this.id);

    if(i == -1){

            var any = {

              'id':this.id,
              'name':this.name,
              'email':this.email,
               'phoneNumber':this.phoneNumber,
              'department':this.department
            };

            this.studdata.push(any);
    }else{

      
      this.studdata[i].id = this.id;
      this.studdata[i].name = this.name;
      this.studdata[i].email = this.email;
      this.studdata[i].phoneNumber = this.phoneNumber;
      this.studdata[i].department = this.department;
  
         
        }
}



DeleteStudent(id:number){
debugger;
    let i = this.studdata.findIndex(s =>  s.id == this.id);
    if(i !== -1){
    this.studdata.splice(i,1);
    }

}



editForm(idEdit:number){
  debugger;
  this.name 
    for(let i=0;i< this.studdata.length;i++){

          if(idEdit == this.studdata[i].id){
              this.id = this.studdata[i].id;
              this.name = this.studdata[i].name;
              this.email = this.studdata[i].email;
              this.phoneNumber = this.studdata[i].phoneNumber;
              this.department = this.studdata[i].department;
          }

    }
    this.studentForm = true;

}

  


}
