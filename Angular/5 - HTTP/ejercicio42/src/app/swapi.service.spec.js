"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const swapi_service_1 = require("./swapi.service");
describe('SWAPIService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(swapi_service_1.SWAPIService);
        expect(service).toBeTruthy();
    });
});
