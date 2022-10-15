import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  estado : boolean = true;
  imgSource : string;
  @Input() value1 : number = 2;
  constructor() { 
    this.imgSource = 'https://picsum.photos/200/300?ts100';
  }

  ngOnInit(): void {
  }

  habDes(): void {
    this.estado = !this.estado;
  }

  refreshImg(): void {
    this.imgSource = `https://picsum.photos/200/300?ts${Math.random()*100+1}`;
  }
}
