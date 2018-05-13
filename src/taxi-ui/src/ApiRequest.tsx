
export interface IStavUzivatele{
    id: string;
    nazevStavu: string;
}

export class ApiRequest {
    url: string;
    urlPrefix: string = "/TaxiDisp/src";

    constructor(url: string) {
        this.url = url;
    }

    getStav(): Promise<IStavUzivatele[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch(this.urlPrefix + '/public/StavUzivatele', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
    }

}