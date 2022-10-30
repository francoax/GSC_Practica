"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const logger_service_1 = require("./logger.service");
describe('LoggerService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(logger_service_1.LoggerService);
        expect(service).toBeTruthy();
    });
});
