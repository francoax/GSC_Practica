"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const event_service_1 = require("./event.service");
describe('EventService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(event_service_1.EventService);
        expect(service).toBeTruthy();
    });
});
