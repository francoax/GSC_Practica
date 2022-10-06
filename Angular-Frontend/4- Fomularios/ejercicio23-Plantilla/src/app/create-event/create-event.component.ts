import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
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
  
  private messages : {type : string, msg : string}[] = [
    {type : 'required', msg : 'Campo requerido.'},
    {type : 'minlenght', msg : 'Requiere mas letras.'}
  ];

  setMessage(field : NgModel) : string | null {
    let error = field.control.errors;
    if(this.beWarn(field)) {
      for (let e of this.messages) {
        if(error?.[e.type]) 
          this.setClass();
          return e.msg
      }
    }
    return null;
  }

  beWarn(field : NgModel) : boolean{
   return field.control.invalid && field.control.touched; 
  }

  private warnClasses : {for : string, class : string} = 
    {for : 'required', class : 'alert-danger'};

  setClass() : string {
    return this.warnClasses.class;
  }

  ngOnInit() {
  }

  onSubmit() {
   this.eventService.saveEvent(this.modelEvent);
   console.log(this.modelEvent.name);
   this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
