"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentComponent = void 0;
const core_1 = require("@angular/core");
let ParentComponent = class ParentComponent {
    constructor(service) {
        this.service = service;
        this.appid = "69bc9bb1bbaa496601358677ea57a017";
    }
    ngOnInit() {
    }
    makeRequest() {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid;
        this.service.getWeather(url).subscribe(data => {
            this.forecast = data;
        });
    }
};
ParentComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-parent',
        templateUrl: './parent.component.html',
        styleUrls: ['./parent.component.css']
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;
