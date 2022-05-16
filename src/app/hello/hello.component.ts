import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-udc',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})


export class HelloUdc implements OnInit {

  title: string = "hello udc"

  getName(name:string):string{
    
    return `My name is ${name}`
   }

  constructor() { }

  ngOnInit(): void {
    
  }

  func1(){
    console.log("first")
  }

}
