export interface Event {

    id : number | undefined,
    name : string,
    time : string,
    date : string,
    location : {
        address : string,
        city : string,
        country : string
    }

}