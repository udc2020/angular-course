import { Component, OnInit, Input } from '@angular/core';
import { Schema } from 'src/app/dataschema';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item?: Schema 

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
