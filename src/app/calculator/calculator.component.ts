import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  ans:number;
  addition(num1:number,num2:number){
    this.ans=0;
    this.ans=+num1 + +num2;
   }
  subtraction(num1:number,num2:number){
    this.ans=0;
    this.ans=num1-num2;

   }
   multiplication(num1:number,num2:number){
    this.ans=0;
    this.ans=num1*num2;
    
   }
   division(num1:number,num2:number){
    this.ans=0;
    this.ans=num1/num2;
   
   }
  ngOnInit() {
  }

}
