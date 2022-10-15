import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormGroup, FormControl , FormBuilder , Validators} from '@angular/forms';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventForm!: FormGroup;

  constructor(private eventService: EventService, private router: Router, private fb : FormBuilder) { 

  this.eventForm = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(4)]],
    date : ['', Validators.required],
    time : ['', Validators.required],
    location : this.fb.group({
      address : ['', Validators.required],
      city : ['', Validators.required],
      country : ['', [Validators.required, Validators.pattern('[A-Z][a-z][A-Z]')]]
    })
  })
  }

  // Defino la estructura del formulario como los datos requeridos del evento.
  /* eventForm = new FormGroup({
    name : new FormControl(''),
    date : new FormControl(''),
    time : new FormControl(''),
    location : new FormGroup({
      address : new FormControl(''),
      city : new FormControl(''),
      country : new FormControl('')
    })
  }); */

  ngOnInit() {
  }

  private warnMessages : {type : string, msg : string}[] = [
    {type : 'required', msg : 'Este campo es requerido'},
    {type : 'pattern', msg : 'No posee dos letras mayusculas.'},
    {type : 'minlength', msg : 'Deben ser mas de 4 letas'}
  ]

  requireWarn(campo : string) : boolean {
    let input = this.eventForm.get(campo);
    if(!input) return false;

    return input.invalid && !input.untouched;
  }

  errorMsg(campo : string) : string | null{
    let inputError = this.eventForm.get(campo)?.errors;
    for (let e of this.warnMessages) {
      if(inputError?.[e.type]) return e.msg;
    }
    return null;
  }

  setWarnStyle() : {[klass : string] : any} {

    return {'color' : 'red'};

  }
  onSubmit() {
    console.info(this.eventForm.value);
    // .value para mandar la estructura de datos del evento.
    this.eventService.saveEvent(this.eventForm.value);
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
