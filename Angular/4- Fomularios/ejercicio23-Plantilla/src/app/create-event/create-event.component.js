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
let CreateEventComponent = class CreateEventComponent {
    constructor(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.modelEvent = {
            id: undefined,
            name: '',
            time: '',
            date: '',
            location: {
                address: '',
                city: '',
                country: ''
            }
        };
        this.messages = [
            { error: 'required', msg: 'Campo requerido' },
            { error: 'minlenght', msg: 'Minimo de letras requerido' },
            { error: 'isSaturday', msg: 'No puede ser un sabado' },
            { error: 'isSunday', msg: 'No puede ser un domingo' }
        ];
        this.warnClasses = { for: 'required', class: 'alert-danger' };
    }
    setMessage(field) {
        if (!field)
            return null;
        for (let e of this.messages) {
            if (field[e.error]) {
                this.setClass();
                return e.msg;
            }
        }
        return null;
    }
    beWarn(field) {
        return field.control.invalid && field.control.touched;
    }
    setClass() {
        return this.warnClasses.class;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.eventService.saveEvent(this.modelEvent);
        console.log(this.modelEvent.name);
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
