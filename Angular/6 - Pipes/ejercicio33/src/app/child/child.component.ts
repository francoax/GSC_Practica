import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() quantity : number;
  squaredQuantity: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.squaredQuantity = changes.quantity.currentValue * changes.quantity.currentValue; 
  }
  
  ngOnInit() {
  }

}
