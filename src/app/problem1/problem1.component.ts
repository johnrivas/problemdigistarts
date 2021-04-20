import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styles: [
  ]
})
export class Problem1Component implements OnInit {

  tam: number = 1;
  listIn: number[] = [];
  listOut: number[] = [];

  added: number = 0;
  next: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  nextButton(){
    this.next = true;
  }

  addList(){
    if (this.added >= -1000 && this.added <= 1000){
      this.listIn.push(this.added);
    }
  }

  result()
  {
    this.listIn = this.listIn.sort();
    this.listOut = this.listIn
                    .filter((valor, indice) => {
                                  return this.listIn.indexOf(valor) === indice;
                                }
                              );
  }

  onSubmit1(form1: NgForm){
    
    if(form1.valid){
      this.result();
    } else {
      return;
    }
    
  }

  

}
