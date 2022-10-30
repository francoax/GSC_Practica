"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildComponent = void 0;
const core_1 = require("@angular/core");
let ChildComponent = class ChildComponent {
    constructor() {
        this.counter = 0;
        this.counterNumber = new core_1.EventEmitter();
    }
    ngOnInit() {
        setInterval(() => { this.counter++; }, 1000);
    }
    buttonClicked() {
        this.counterNumber.emit(this.counter);
    }
};
__decorate([
    (0, core_1.Output)()
], ChildComponent.prototype, "counterNumber", void 0);
ChildComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-child',
        templateUrl: './child.component.html',
        styleUrls: ['./child.component.css']
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
