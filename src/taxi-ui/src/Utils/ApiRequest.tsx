import { StavUzivatele, Objednavka, Uzivatel, Dochazka } from "./Interfaces";


export class ApiRequest {
    url: string;
    urlPrefix: string;     /*pro webhosting endora*/
    urlPrefix2: string;

    constructor() {
        this.urlPrefix = "";     /*pro webhosting endora*/
        this.urlPrefix2 = "/TaxiDisp/src";
    }

    getStav(): Promise<StavUzivatele[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix2 + '/public/StavUzivatele', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    }

    getAllObjednavka(): Promise<Objednavka[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix2 + '/public/Objednavka', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    }

    getAllDochazka(): Promise<Dochazka[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix2 + '/public/Dochazka', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    }

    getAllUzivatel(): Promise<Uzivatel[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix2 + '/public/Uzivatele', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    }

}