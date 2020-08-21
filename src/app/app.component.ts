import { Component,OnInit,Injector } from '@angular/core';
import{ MyDateService } from './my-date.service';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import{TextFieldComponent} from '../app/registration/text-field/text-field.component';
import{CheckBoxComponent} from '../app/registration/check-box/check-box.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="Angular Application";

 


ngOnInit() {
  
}



}
