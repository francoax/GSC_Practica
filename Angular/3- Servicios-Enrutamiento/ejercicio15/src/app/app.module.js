"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const app_component_1 = require("./app.component");
const events_list_component_1 = require("./events-list/events-list.component");
const eventos_service_1 = require("./eventos.service");
const event_detail_component_1 = require("./event-detail/event-detail.component");
const routing_routing_module_1 = require("./routing-routing.module");
const auth_guard_1 = require("./auth.guard");
const myresolver_resolver_1 = require("./myresolver.resolver");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            events_list_component_1.EventsListComponent,
            event_detail_component_1.EventDetailComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            routing_routing_module_1.RoutingRoutingModule
        ],
        providers: [eventos_service_1.EventosService, auth_guard_1.AuthGuard, myresolver_resolver_1.MyresolverResolver],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
