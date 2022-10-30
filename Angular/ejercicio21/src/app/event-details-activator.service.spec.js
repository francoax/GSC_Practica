"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const event_details_activator_service_1 = require("./event-details-activator.service");
describe('EventDetailsActivatorService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(event_details_activator_service_1.EventDetailsActivatorService);
        expect(service).toBeTruthy();
    });
});
