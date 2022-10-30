"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnoComponent = void 0;
const core_1 = require("@angular/core");
let UnoComponent = class UnoComponent {
    constructor() {
        this.estado = true;
        this.value1 = 2;
        this.imgSource = 'https://picsum.photos/200/300?ts100';
    }
    ngOnInit() {
    }
    habDes() {
        this.estado = !this.estado;
    }
    refreshImg() {
        this.imgSource = `https://picsum.photos/200/300?ts${Math.random() * 100 + 1}`;
    }
};
__decorate([
    (0, core_1.Input)()
], UnoComponent.prototype, "value1", void 0);
UnoComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-uno',
        templateUrl: './uno.component.html',
        styleUrls: ['./uno.component.css']
    })
], UnoComponent);
exports.UnoComponent = UnoComponent;
