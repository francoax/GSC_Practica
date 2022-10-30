"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_guard_1 = require("./auth.guard");
const event_detail_component_1 = require("./event-detail/event-detail.component");
const events_list_component_1 = require("./events-list/events-list.component");
const myresolver_resolver_1 = require("./myresolver.resolver");
const routes = [
    { path: 'event-list', component: events_list_component_1.EventsListComponent,
        resolve: { list: myresolver_resolver_1.MyresolverResolver }
    },
    { path: 'detail/:id', component: event_detail_component_1.EventDetailComponent, canActivate: [auth_guard_1.AuthGuard], canDeactivate: [auth_guard_1.AuthGuard] }
];
let RoutingRoutingModule = class RoutingRoutingModule {
};
RoutingRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], RoutingRoutingModule);
exports.RoutingRoutingModule = RoutingRoutingModule;
