import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cond',
  templateUrl: './cond.component.html',
  styleUrls: ['./cond.component.css']
})
export class CondComponent implements OnInit {

  hide:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hide = !this.hide
    console.log(this.hide)
  }

}
