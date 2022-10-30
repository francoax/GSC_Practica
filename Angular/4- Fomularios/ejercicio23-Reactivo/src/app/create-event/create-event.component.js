"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let CreateEventComponent = class CreateEventComponent {
    constructor(eventService, router, fb) {
        this.eventService = eventService;
        this.router = router;
        this.fb = fb;
        this.warnMessages = [
            { type: 'required', msg: 'Este campo es requerido' },
            { type: 'pattern', msg: 'No posee dos letras mayusculas.' },
            { type: 'minlength', msg: 'Deben ser mas de 4 letas' }
        ];
        this.eventForm = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            date: ['', forms_1.Validators.required],
            time: ['', forms_1.Validators.required],
            location: this.fb.group({
                address: ['', forms_1.Validators.required],
                city: ['', forms_1.Validators.required],
                country: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[A-Z][a-z][A-Z]')]]
            })
        });
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
    requireWarn(campo) {
        let input = this.eventForm.get(campo);
        if (!input)
            return false;
        return input.invalid && !input.untouched;
    }
    errorMsg(campo) {
        var _a;
        let inputError = (_a = this.eventForm.get(campo)) === null || _a === void 0 ? void 0 : _a.errors;
        for (let e of this.warnMessages) {
            if (inputError === null || inputError === void 0 ? void 0 : inputError[e.type])
                return e.msg;
        }
        return null;
    }
    setWarnStyle() {
        return { 'color': 'red' };
    }
    onSubmit() {
        console.info(this.eventForm.value);
        // .value para mandar la estructura de datos del evento.
        this.eventService.saveEvent(this.eventForm.value);
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
};
CreateEventComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-create-event',
        templateUrl: './create-event.component.html',
        styleUrls: ['./create-event.component.css']
    })
], CreateEventComponent);
exports.CreateEventComponent = CreateEventComponent;
