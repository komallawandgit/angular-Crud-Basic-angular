import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Student } from '../models/student';


import { from } from 'rxjs';
// import { EventEmitter } from 'protractor';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  stud: any;
  @Input() set studobject(stud: any){
     this.stud = stud;
  };


  @Output() id = new EventEmitter();
  @Output() idEdit = new EventEmitter();

  constructor() { }
ngOnInit() {
  }



  editForm(idEdit:any){
   this.idEdit.emit(idEdit);  
  }
  

  DeleteStudent(idDelete:any){
    this.id.emit(idDelete);  
   }

}
