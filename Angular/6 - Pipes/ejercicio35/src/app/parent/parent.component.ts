import { Component, OnInit } from '@angular/core';
import { Movie, Ratings } from './entitie/movie';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

/*   movies : Movie[] = [
    { name:  "Star Wars Episode X", rating: Ratings["PG"]},
    { name:  "Rocky XV", rating: Ratings["PG-13"]},
    { name:  "Jaws the Revenge", rating: Ratings["R"]},
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: Ratings["PG-13"]},
    { name:  "Finding Dory's Grandkids", rating: Ratings["G"]},
  ]; */
  
  movies : Movie[] = [
    { name:  "Star Wars Episode X", rating: "PG"},
    { name:  "Rocky XV", rating: "PG-13"},
    { name:  "Jaws the Revenge", rating: "R"},
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13"},
    { name:  "Finding Dory's Grandkids", rating: "G"},
  ];
  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    this.movies = this.movies.sort((a, b) => {
      if(Ratings[a.rating] > Ratings[b.rating]) {
        return 1;
      }
      if(Ratings[a.rating] < Ratings[b.rating]){
        return -1;
      } 
      return 0;
    })
  }

  sortDesc() {
    this.movies = this.movies.sort((a, b) => {
      if(Ratings[a.rating] < Ratings[b.rating]) {
        return 1;
      }
      if(Ratings[a.rating] > Ratings[b.rating]){
        return -1;
      } 
      return 0;
    })
  }
}
