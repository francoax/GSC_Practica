"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const weather_service_1 = require("./weather.service");
describe('WeatherService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(weather_service_1.WeatherService);
        expect(service).toBeTruthy();
    });
});
