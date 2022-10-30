"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const core_1 = require("@angular/core");
let MovieService = class MovieService {
    constructor() {
        this.castMembers = [];
    }
    addCastMember(name, part, actorService) {
        let dup = this.castMembers.some(member => {
            return member.name === name || member.part === part;
        });
        let ok = actorService.canAddMovieToActor(name, this.movieName);
        if (!dup && ok) {
            this.castMembers.push({ name: name, part: part });
        }
    }
};
MovieService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], MovieService);
exports.MovieService = MovieService;
