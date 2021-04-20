import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-problem2',
  templateUrl: './problem2.component.html',
  styles: [
  ]
})
export class Problem2Component implements OnInit {

  binario1: string = '';
  binario2: string = '';
  operador: string = '';
  binarioRes: string = '';
  isResult: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter1(event: any){

    if (event.key === '1' || event.key === '0'){}
    else{
      if(event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode === 32){
        this.binario1 = this.binario1.substring(0, this.binario1.length - 1);
      }
    }

  }

  applyFilter2(event: any){

     if (event.key === '1' || event.key === '0'){} 
      else{
        if(event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode === 32){
          this.binario2 = this.binario2.substring(0, this.binario2.length - 1)
        }
      }
    
  }

  convertBin(num: number): string 
  {
    var str = num.toString(2);
    return '00000000'.slice(str.length) + str;
  }

  convertDec(bin: string): number
  {
    return parseInt(bin, 2);
  }

  result(form: NgForm){
    if(form.valid && form.touched)
    {
      this.isResult = true;
      let numOne: number = 0;
      let numTwo: number = 0;
      numOne = this.convertDec(this.binario1);
      numTwo = this.convertDec(this.binario2);
      let reslutado : number = 0;
      switch(this.operador){
        case '+': { 
                    reslutado = numOne + numTwo;
                    break; 
                   }
        case '-': { 
                    reslutado = numOne - numTwo;
                    break; 
                   }
        case '*': { 
                    reslutado = numOne * numTwo;
                    break; 
                  }
        case '/': { 
                    reslutado = Math.trunc(numOne / numTwo);
                    break; 
                   }
        case '%': { 
                    reslutado = numOne % numTwo;
                    break; 
                   }
      }
  
      this.binarioRes = this.convertBin(reslutado);
    }
  }

}
