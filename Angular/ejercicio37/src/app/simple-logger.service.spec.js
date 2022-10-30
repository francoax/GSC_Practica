"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const simple_logger_service_1 = require("./simple-logger.service");
describe('SimpleLoggerService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(simple_logger_service_1.SimpleLoggerService);
        expect(service).toBeTruthy();
    });
});
