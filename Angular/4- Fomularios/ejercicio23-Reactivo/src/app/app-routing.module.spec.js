"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_routing_module_1 = require("./app-routing.module");
describe('AppRoutingModule', () => {
    let appRoutingModule;
    beforeEach(() => {
        appRoutingModule = new app_routing_module_1.AppRoutingModule();
    });
    it('should create an instance', () => {
        expect(appRoutingModule).toBeTruthy();
    });
});
