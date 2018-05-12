
export interface IStav{
    
}

export class ApiRequest {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    getStav(): Promise<IStav[]> {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders
        };

        return fetch('/api/Localizations', myInit).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        });
    }

}