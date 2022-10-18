import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output :string[] = [];
  keyInput : string;
  
  constructor() {
    this.subject = new Subject();
   }

  ngOnInit() {
    this.subject
    .subscribe(key => {
     this.output.push(key);
     this.output = this.output.map(k => k.toUpperCase());
    });
  }

  reset() : void {
    this.output = [];
    this.keyInput = '';
  }

  keypress(e) {
    this.subject.next(e.key);
  }
  
}
