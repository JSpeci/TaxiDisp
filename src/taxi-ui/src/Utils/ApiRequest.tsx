import { StavUzivatele, Objednavka, Uzivatel, Dochazka, DochazkaDTO, TypPraceUzivatele, Auto } from "./Interfaces";


export class ApiRequest {
    url: string;
    urlPrefix: string;     /*pro webhosting endora*/
    urlPrefix2: string;

    constructor() {
        this.urlPrefix = "";     /*pro webhosting endora*/
        this.urlPrefix2 = "/TaxiDisp/src";
    }

    public static formatTimeToMysqlFormat(date: Date): string {
        let result = "";
        //2018-02-21 09:30:00
        result += date.getFullYear();
        result += "-";
        if (date.getMonth() <= 9) {
            result += "0";
        }
        result += date.getMonth();
        result += "-";
        if (date.getDay() <= 9) {
            result += "0";
        }
        result += date.getDay();
        result += " ";
        if (date.getHours() <= 9) {
            result += "0";
        }
        result += date.getHours();
        result += ":";
        if (date.getMinutes() <= 9) {
            result += "0";
        }
        result += date.getMinutes();
        result += ":";
        if (date.getSeconds() <= 9) {
            result += "0";
        }
        result += date.getSeconds();
        return result;
    }

    putDochazka(dochazka: DochazkaDTO): void {

        let obj = dochazka;
        console.log("PUT: " + JSON.stringify(obj));

        var myInit = {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log(this.urlPrefix2 + "/public/Dochazka/" + dochazka.idDochazka);
        fetch(this.urlPrefix2 + "/public/Dochazka/" + dochazka.idDochazka, myInit).then(res => res.json());
    }

    postDochazka(dochazka: DochazkaDTO): Promise<Dochazka> {

        let obj = dochazka;
        console.log("POST: " + JSON.stringify(obj));

        let url = this.urlPrefix2 + "/public/Dochazka";
        return fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(dochazka), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res =>  res.json())
            .catch(error => console.error('Error:', error));
    }

    getStavy(): Promise<StavUzivatele[]> {

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

    getTypyPrace(): Promise<TypPraceUzivatele[]> {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix2 + '/public/TypPraceUzivatele', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    }

    getAllAuto(): Promise<Auto[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix2 + '/public/Auto', myInit).then((response) => {
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