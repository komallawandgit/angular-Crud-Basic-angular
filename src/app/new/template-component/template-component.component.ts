import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css']
})
export class TemplateComponentComponent implements OnInit {
  title="Web Assemble";
        urlToImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTctLJ6G1Kg3XwezWJ8RPzE8v0N1SidvwOKnPmiKim7oAP1Wwa4A&s";
         
        urlToImage2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDY35LKZU2Z_Q9KU6xOp_O10oattE6W1qZa_wGj5tiQwqz8Xj3g&s";
        title2="messenger";
urltoimage3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRecZ5oUY69Aw-PUa-l6PjM0dLTm7cMHXI1vswqFf501dWNKA&s";
title3="car";
        description="Using Web Assembly to speed up your Angular Application For some applications, JavaScript just isn't fast enough...But there is hope! hat is Web Assembly?Web Assembly is a binary instruction format.It is designed to have a very small file-size due to its binary format.The i18nMapping advantage of Web Assembly that it is fast(Almost) As fast as a native program.";

  constructor() { }
  openMenu(){}

 
 

  ngOnInit() {
  }

}
