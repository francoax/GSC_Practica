import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {

  @Input() address : string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
