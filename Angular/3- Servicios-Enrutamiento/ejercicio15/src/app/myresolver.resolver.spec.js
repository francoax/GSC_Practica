"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const myresolver_resolver_1 = require("./myresolver.resolver");
describe('MyresolverResolver', () => {
    let resolver;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        resolver = testing_1.TestBed.inject(myresolver_resolver_1.MyresolverResolver);
    });
    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
