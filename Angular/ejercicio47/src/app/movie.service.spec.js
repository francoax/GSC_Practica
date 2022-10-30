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
    it('adding a cast member increases the cast member count by one', () => {
        const service = testing_1.TestBed.get(movie_service_1.MovieService);
        let mockActorService;
        // agregamos el codigo aqui
        service.addCastMember('Sylvester', 'Rambo', mockActorService);
        expect(service.castMembers.length).toBe(1);
    });
});
