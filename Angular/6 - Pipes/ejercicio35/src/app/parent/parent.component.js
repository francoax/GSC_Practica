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
var Ratings;
(function (Ratings) {
    Ratings[Ratings["G"] = 0] = "G";
    Ratings[Ratings["PG"] = 1] = "PG";
    Ratings[Ratings["PG-13"] = 2] = "PG-13";
    Ratings[Ratings["R"] = 3] = "R";
})(Ratings || (Ratings = {}));
let ParentComponent = class ParentComponent {
    constructor() {
        this.movies = [
            { name: "Star Wars Episode X", rating: "PG" },
            { name: "Rocky XV", rating: "PG-13" },
            { name: "Jaws the Revenge", rating: "R" },
            { name: "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
            { name: "Finding Dory's Grandkids", rating: "G" },
        ];
    }
    ngOnInit() {
    }
    sortAsc() {
        let rating;
        let sortMovies = this.movies.sort((a, b) => {
        });
    }
    sortDesc() {
        // Implementar
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
