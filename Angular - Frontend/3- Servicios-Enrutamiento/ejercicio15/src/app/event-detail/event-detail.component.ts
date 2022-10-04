import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventosService } from '../eventos.service';
import { Events } from '../events';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  user! : Events | undefined;
  reviewed : boolean = false;
  constructor(private ar: ActivatedRoute, private service : EventosService, private route : Router ) { }

    ngOnInit(): void {
    const id = this.ar.snapshot.paramMap.get('id');
    this.user = this.service.getDetail(id);
  }

  returnToEvents() {
    this.route.navigateByUrl("/event-list");
  }
  	
  isReviewed() {
    this.reviewed = !this.reviewed;
  }
}
