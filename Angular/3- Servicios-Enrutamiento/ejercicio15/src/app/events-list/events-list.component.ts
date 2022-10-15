import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../eventos.service';
import { Events } from '../events'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events! : Events[];

  constructor( private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ list }) => {
      this.events = list;
    });
  }

}
