"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDetailComponent = void 0;
const core_1 = require("@angular/core");
let EventDetailComponent = class EventDetailComponent {
    constructor(ar, service, route) {
        this.ar = ar;
        this.service = service;
        this.route = route;
        this.reviewed = false;
    }
    ngOnInit() {
        const id = this.ar.snapshot.paramMap.get('id');
        this.user = this.service.getDetail(id);
    }
    returnToEvents() {
        this.route.navigateByUrl("/event-list");
    }
    isReviewed() {
        this.reviewed = !this.reviewed;
    }
};
EventDetailComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-event-detail',
        templateUrl: './event-detail.component.html',
        styleUrls: ['./event-detail.component.css']
    })
], EventDetailComponent);
exports.EventDetailComponent = EventDetailComponent;
