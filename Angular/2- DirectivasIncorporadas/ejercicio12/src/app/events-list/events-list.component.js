"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsListComponent = void 0;
const core_1 = require("@angular/core");
let EventsListComponent = class EventsListComponent {
    constructor() {
        this.events = [
            {
                name: 'Angular Connect',
                date: '9/26/2036',
                time: '10am',
                location: {
                    address: '1 London Road ',
                    city: 'London',
                    country: 'England'
                },
                format: "InPerson"
            },
            {
                name: 'ng-conf 2037',
                date: '4/15/2037',
                time: '9am',
                onlineUrl: 'https://www.ng-conf.org/',
                format: "Online"
            },
            {
                name: 'Future Conf (Location/Url TBD)',
                date: '6/10/2037',
                time: '8am'
            },
            {
                name: 'UN Angular Summit',
                date: '6/10/2037',
                time: '8am',
                location: {
                    address: 'The UN Angular Center',
                    city: 'New York',
                    country: 'USA'
                },
                format: "InPerson"
            }
        ];
    }
    ngOnInit() {
    }
};
EventsListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-events-list',
        templateUrl: './events-list.component.html',
        styleUrls: ['./events-list.component.css']
    })
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
