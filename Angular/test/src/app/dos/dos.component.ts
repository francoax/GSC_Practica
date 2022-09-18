import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css'],
  inputs: ['value2'] //otra manera de definir los inputs
})
export class DosComponent implements OnInit {

  @Input() value2 : number = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
