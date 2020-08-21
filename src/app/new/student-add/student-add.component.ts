import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studSave:any;
  id:any;
  name:any;
  email:any;
  phoneNumber:any;
  department:any;
  
  @Input() set studSave1(stud: any){
    this.studSave = stud;
    this.id=stud.id;
    this.name=stud.name;
    this.email=stud.email;
    this.phoneNumber=stud.phoneNumber;
    this.department=stud.department;
 };

  @Output() studentForm= new EventEmitter();
  

  SaveStudent(studentForm:any){
    console.log("Inside student", studentForm);
    this.studentForm.emit(studentForm);
}



  constructor() { }

  ngOnInit() {
  }

}
