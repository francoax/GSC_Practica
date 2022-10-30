"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDetailsComponent = void 0;
const core_1 = require("@angular/core");
let EventDetailsComponent = class EventDetailsComponent {
    constructor() {
        this.data = {
            name: 'ngConf 2025',
            date: '3/1/2025',
            time: '8am',
            location: {
                address: '123 Main St',
                city: 'Salt Lake City, UT',
                country: 'USA'
            }
        };
    }
    ngOnInit() {
    }
};
EventDetailsComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-event-details',
        templateUrl: './event-details.component.html',
        styleUrls: ['./event-details.component.css']
    })
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
