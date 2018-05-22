import { ApiRequest } from "../Utils/ApiRequest";
import { observable, computed } from "mobx";
import { Uzivatel, Dochazka } from "../Utils/Interfaces";
import { DochazkaRowModel } from "../Models/DochazkaRowModel";

export class DochazkaModel{

    apiRequester: ApiRequest;
    @observable loading: boolean;

    //otestovat jestli funguje private @oibservable
    @observable dochazky: Dochazka[];

    @observable dochazkyModels: DochazkaRowModel[];

    @computed get DochazkaAll(): Dochazka[] {
        return (this.dochazky == null) ? [] : this.dochazky;
    }

    @computed get DochazkaRowModelsAll(): DochazkaRowModel[] {
        return (this.dochazkyModels == null) ? [] : this.dochazkyModels;
    }

    @computed get DochazkaPritomni(): DochazkaRowModel[] {
        return (this.dochazkyModels == null) ? [] : this.dochazkyModels.filter(i => i.jeVPraci);
    }

    @computed get DochazkaNepritomni(): DochazkaRowModel[] {
        return (this.dochazkyModels == null) ? [] : this.dochazkyModels.filter(i => !i.jeVPraci);
    }

    constructor(apiRequester: ApiRequest){
        this.apiRequester = apiRequester;
        this.dochazkyModels = [];
        this.load();
    }

    async load() {
        this.loading = true;
        await this.apiRequester.getAllDochazka().then(data => { this.dochazky = data });
        this.DochazkaAll.forEach(d => {
            this.dochazkyModels.push(new DochazkaRowModel(d,this.apiRequester));
        });
        this.loading = false;
    }
}