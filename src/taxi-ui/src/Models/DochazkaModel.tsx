import { ApiRequest } from "../Utils/ApiRequest";
import { observable, computed, action } from "mobx";
import { Uzivatel, Dochazka } from "../Utils/Interfaces";
import { DochazkaRowModel } from "../Models/DochazkaRowModel";
import { StavUzivateleModel } from "./StavUzivateleModel";
import { TypPraceUzivateleModel } from "./TypPraceUzivateleModel";
import { UzivateleModel } from "./UzivateleModel";

export class DochazkaModel{

    apiRequester: ApiRequest;
    @observable loading: boolean;

    //otestovat jestli funguje private @oibservable
    @observable dochazky: Dochazka[];

    @observable dochazkyModels: DochazkaRowModel[];

    @observable stavModel: StavUzivateleModel;

    @observable typPraceModel: TypPraceUzivateleModel;

    @observable uzivateleModel: UzivateleModel;


    @computed get DochazkaAll(): Dochazka[] {
        return (this.dochazky == null) ? [] : this.dochazky;
    }

    @computed get DochazkaRowModelsAll(): DochazkaRowModel[] {
        return (this.dochazkyModels == null) ? [] : this.dochazkyModels.sort(a => {
            //chci mit navrchu ty přítomné v práci
            if(a.jeVPraci)    {
                return -1;
            }
            else return 1;
        });
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

        this.stavModel = new StavUzivateleModel(this.apiRequester);
        this.typPraceModel = new TypPraceUzivateleModel(this.apiRequester);
        this.uzivateleModel = new UzivateleModel(this.apiRequester);

        this.load();
    }


    @action.bound
    prichodOsoby(idUzivatel: string, idTypPrace: string){

    }


    async load() {
        this.loading = true;
        await this.apiRequester.getAllDochazka().then(data => { this.dochazky = data });
        this.DochazkaAll.forEach(d => {
            this.dochazkyModels.push(new DochazkaRowModel(d, this.stavModel ,this.apiRequester));
        });
        this.loading = false;
    }
}