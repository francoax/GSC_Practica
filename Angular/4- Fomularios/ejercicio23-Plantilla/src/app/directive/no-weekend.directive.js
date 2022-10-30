"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NoWeekendDirective_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoWeekendDirective = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let NoWeekendDirective = NoWeekendDirective_1 = class NoWeekendDirective {
    constructor() { }
    validate(control) {
        let n = new Date(control.value).getDay();
        if (n == 6) {
            return { isSaturday: true };
        }
        else if (n == 0) {
            return { isSunday: true };
        }
        return null;
    }
    registerOnValidatorChange(fn) {
    }
};
NoWeekendDirective = NoWeekendDirective_1 = __decorate([
    (0, core_1.Directive)({
        selector: '[appNoWeekend]',
        providers: [{
                provide: forms_1.NG_VALIDATORS,
                useExisting: NoWeekendDirective_1,
                multi: true
            }]
    })
], NoWeekendDirective);
exports.NoWeekendDirective = NoWeekendDirective;
