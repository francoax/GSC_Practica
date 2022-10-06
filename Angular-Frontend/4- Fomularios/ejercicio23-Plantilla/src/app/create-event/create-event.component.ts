import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../entitie/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router) { }

  modelEvent : Event = {
    id : undefined,
    name : '',
    time : '',
    date : '',
    location : {
      address : '',
      city : '',
      country : ''
    }

  };

  beWarn(campo : string) {
    
  }

  ngOnInit() {
  }

  onSubmit() {
   // this.eventService.saveEvent();
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
