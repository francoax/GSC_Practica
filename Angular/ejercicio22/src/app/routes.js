"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const events_list_component_1 = require("./events-list/events-list.component");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
