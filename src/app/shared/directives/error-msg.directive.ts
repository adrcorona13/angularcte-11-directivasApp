import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() { 
    console.log('contructor directive');
  }

  ngOnInit(): void {
    console.log('onInit directive');
  }

}