import { ApiRequest } from "../Utils/ApiRequest";
import { observable, computed } from "mobx";
import { Dochazka } from "../Utils/Interfaces";

export class DochazkaRowModel{

    apiRequester: ApiRequest;

    //otestovat jestli funguje private @oibservable

    @observable dochazka: Dochazka;

    constructor(dochazka: Dochazka, apiRequester: ApiRequest){
        this.apiRequester = apiRequester;
        this.dochazka = dochazka;
    }

    @computed get jeVPraci(): boolean {
        return this.dochazka.odchod == null;
    }

}