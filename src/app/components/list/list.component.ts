import { Component, OnInit } from '@angular/core';
import { DataBase } from '../../data'
import { Schema } from 'src/app/dataschema';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: Schema[] = DataBase

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
