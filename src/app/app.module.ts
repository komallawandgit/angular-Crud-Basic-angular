import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './new/student-list/student-list.component';
import { StudentAddComponent } from './new/student-add/student-add.component';
import { StudentShowComponent } from './new/student-show/student-show.component';
import { CalciComponent } from './new/calci/calci.component';
import { TemplateComponentComponent } from './new/template-component/template-component.component';

import { SignInComponent } from './sign-in/sign-in.component';
import{ MyDateService } from './my-date.service';

import{RouterModule} from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';
import { TextFieldComponent } from './registration/text-field/text-field.component';
import { CheckBoxComponent } from './registration/check-box/check-box.component';
import { ClintOneComponent } from './registration/clint-one/clint-one.component';
import { ClintTwoComponent } from './registration/clint-two/clint-two.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentShowComponent,
    CalciComponent,
    
    TemplateComponentComponent,
  
    SignInComponent,
  
    MobileComponent,
  
    ButtonComponent,
  
    TextFieldComponent,
  
    CheckBoxComponent,
  
    ClintOneComponent,
  
    ClintTwoComponent


 
  
  ],
  imports: [
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(
       [
         { 
           path:'studentInfo',
           component:StudentComponent
          },
          {
            path:'StudentIO',
            component:StudentShowComponent
          },
          {
            path:'Calci',
            component:CalciComponent
          },
          {
            path:'Template',
            component:TemplateComponentComponent
          },
          {
            path:'Signin',
            component:SignInComponent
          },
          {
            path:'mobileData',
            component:MobileComponent
          },
          {
            path:'client1',
            component:ClintOneComponent
          },
          {
            path:'client2',
            component:ClintTwoComponent
          }
        ]
        )
  ],
  providers: [MyDateService],
  entryComponents: [ButtonComponent,TextFieldComponent,CheckBoxComponent],


})
export class AppModule { 
  constructor(injector: Injector){
 

  const buttonElment = createCustomElement(ButtonComponent, {injector});
  customElements.define('app-button', buttonElment);

  const txtel= createCustomElement(TextFieldComponent,{injector});
  customElements.define('app-text-field',txtel);

  const checkel =createCustomElement(CheckBoxComponent,{injector});
  customElements.define('app-check-box',checkel);


}
 
 ngDoBootstrap(){};
}
