import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obs = new Observable<number>();
  result : number;
  promise;

  constructor() {
    this.obs = of(35);
  }

  ngOnInit() : void {
    this.promise = this.obs.toPromise();
  }

  listen() {
    this.promise.then((val : number) => {
      this.result = val;
    })
  }

}
