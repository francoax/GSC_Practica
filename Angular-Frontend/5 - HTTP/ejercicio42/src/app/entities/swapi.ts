import { Film } from "./film";

export interface Swapi {
    count:    number;
    next:     null;
    previous: null;
    results:  Film[];
}
