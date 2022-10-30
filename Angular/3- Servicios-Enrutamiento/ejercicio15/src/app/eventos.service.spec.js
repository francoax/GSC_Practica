"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const eventos_service_1 = require("./eventos.service");
describe('EventosService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(eventos_service_1.EventosService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
