import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { CalculatorComponent }      from './calculator/calculator.component';
const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  exports: [RouterModule],
  imports :[RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }