"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const movie_service_1 = require("./movie.service");
describe('MovieService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(movie_service_1.MovieService);
        expect(service).toBeTruthy();
    });
});
