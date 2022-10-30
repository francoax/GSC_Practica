"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const events_list_component_1 = require("./events-list/events-list.component");
const event_details_component_1 = require("./event-details/event-details.component");
const event_details_activator_service_1 = require("./event-details-activator.service");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    {
        path: 'events/:eventId',
        component: event_details_component_1.EventDetailsComponent,
        canActivate: [event_details_activator_service_1.EventDetailsActivatorService]
    },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
