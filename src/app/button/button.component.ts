import { Component, OnInit, ViewEncapsulation,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  constructor() { }
  private numberofclick=0;

  ngOnInit() {
  }
  alertMsg(){
    alert("alert msg ");
  }

}
