"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesComponent = void 0;
const core_1 = require("@angular/core");
let MoviesComponent = class MoviesComponent {
    constructor(route) {
        this.route = route;
        this.movies = [
            { name: "Star Wars", rating: 'R', id: 1 },
            { name: "Jaws", rating: 'PG', id: 2 },
            { name: "E.T.", rating: 'R', id: 3 },
            { name: "Teen Wolf", rating: 'G', id: 4 },
            { name: "Ferris Bueller's Day Off", rating: 'G', id: 5 },
        ];
    }
    ngOnInit() {
    }
};
MoviesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-movies',
        templateUrl: './movies.component.html',
        styleUrls: ['./movies.component.css']
    })
], MoviesComponent);
exports.MoviesComponent = MoviesComponent;
