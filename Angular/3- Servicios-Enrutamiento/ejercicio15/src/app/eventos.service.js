"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosService = void 0;
const core_1 = require("@angular/core");
let EventosService = class EventosService {
    constructor() {
        this.events = [
            {
                id: 1,
                name: 'Angular Connect',
                date: '9/26/2036',
                time: '10am',
                location: {
                    address: '1 London Rd',
                    city: 'London',
                    country: 'England'
                }
            },
            {
                id: 2,
                name: 'ng-nl',
                date: '4/15/2037',
                time: '9am',
                location: {
                    address: '127 DT ',
                    city: 'Amsterdam',
                    country: 'NL'
                }
            },
            {
                id: 3,
                name: 'ng-conf 2037',
                date: '4/15/2037',
                time: '9am',
                location: {
                    address: 'The Palatial America Hotel',
                    city: 'Salt Lake City',
                    country: 'USA'
                }
            },
            {
                id: 4,
                name: 'UN Angular Summit',
                date: '6/10/2037',
                time: '8am',
                location: {
                    address: 'The UN Angular Center',
                    city: 'New York',
                    country: 'USA'
                }
            },
        ];
    }
    getEvents() {
        return this.events;
    }
    getDetail(id) {
        if (!id) {
            return undefined;
        }
        return this.events.find(events => events.id === +id);
    }
};
EventosService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], EventosService);
exports.EventosService = EventosService;
