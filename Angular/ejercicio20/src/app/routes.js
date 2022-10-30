"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const events_list_component_1 = require("./events-list/events-list.component");
const event_details_component_1 = require("./event-details/event-details.component");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:eventId', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
