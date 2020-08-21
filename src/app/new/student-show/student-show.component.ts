import { Component, OnInit} from '@angular/core';
// import { Student } from '../models/student';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  id:any;
  name:any;
  email:any;
  phoneNumber:any;
  department:any;
   idEdit:number;
   studentForm: any;

   studSave:any={};

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

  
  
  constructor() { 
  }

  ngOnInit() {
  }

  handleDelete(event){
    let i = this.studdata.findIndex(s =>  s.id == event);
    if(i !== -1){
    this.studdata.splice(i,1);
    }
  }

  handleEdit(event){
    debugger;
    this.name 
      for(let i=0;i< this.studdata.length;i++){
  
            if(event == this.studdata[i].id){
                // this.id = this.studdata[i].id;
                // this.name = this.studdata[i].name;
                // this.email = this.studdata[i].email;
                // this.phoneNumber = this.studdata[i].phoneNumber;
                // this.department = this.studdata[i].department;
                this.studSave=this.studdata[i];
            }
  
      }
      
  
  }

  handleSave(event){
    console.log("Inside handle save", event);
    let i = this.studdata.findIndex(s =>  s.id == event.id);

    if(i == -1){

            // var any = {

            //   'id':this.id,
            //   'name':this.name,
            //   'email':this.email,
            //    'phoneNumber':this.phoneNumber,
            //   'department':this.department
            // };

            this.studdata.push(event);
    }else{

      
    //  this.studSave=this.studdata[i];
         this.studdata[i] = event;
         
        }
}

  
  
  

   




}
