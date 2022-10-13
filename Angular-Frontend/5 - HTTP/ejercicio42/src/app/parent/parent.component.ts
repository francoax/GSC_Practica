import { Component, OnInit } from '@angular/core';
import { SWAPIService } from '../swapi.service';
import { Film } from 'src/app/entities/film';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList : Film[];

  constructor(private service : SWAPIService ) { }

  ngOnInit() {
  }

  makeRequest() {
    this.service.makeRequest().subscribe(data => {
      this.movieList = data.results;
    });
  }
}
