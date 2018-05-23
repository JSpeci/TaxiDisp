import { ApiRequest } from "../Utils/ApiRequest";
import { observable, computed, action } from "mobx";
import { Dochazka, StavUzivatele, DochazkaDTO } from "../Utils/Interfaces";
import { StavUzivateleModel } from "./StavUzivateleModel";

export class DochazkaRowModel {

    apiRequester: ApiRequest;

    //otestovat jestli funguje private @oibservable

    @observable dochazka: Dochazka;

    stavModel: StavUzivateleModel;

    constructor(dochazka: Dochazka, stavModel: StavUzivateleModel, apiRequester: ApiRequest) {
        this.apiRequester = apiRequester;
        this.dochazka = dochazka;
        this.stavModel = stavModel;

        /*
        if (this.dochazka.odchod == null) {
            //jenom tem, kteri jsou pritomni vytvorim stavModel na dochazce
            this.stavModel = new StavUzivateleModel(this.apiRequester);
        }*/

    }

    @computed get jeVPraci(): boolean {
        return this.dochazka.odchod == null;
    }

    @action.bound
    async odchodCreated() {
        console.log("Odchod created on dochazka id", this.dochazka.Uzivatel.nickName);
        console.log("Should change stav in DB");


        //cas pro odchod ve formatu mysql
        let date = new Date();
        let dateString = ApiRequest.formatTimeToMysqlFormat(date);

        //update client model
        this.dochazka.odchod = dateString;
        this.putDochazka();
       
    }

    async putDochazka(){
         //update db
         let dto: DochazkaDTO = {
            idDochazka: this.dochazka.id,
            prichod: this.dochazka.prichod,
            odchod: this.dochazka.odchod,
            idUzivatel: this.dochazka.Uzivatel.id,
            idTypPraceUzivatele: this.dochazka.TypPraceUzivatele.id,
            idStavUzivatele: this.dochazka.StavUzivatele.id, // novy stav nastaven vyse
            idAuto: this.dochazka.Auto.id
        }

        await this.apiRequester.putDochazka(dto);
    }

    @action.bound
    async stavChanged(stavName: string) {
        console.log("Stav changed on dochazka id", this.dochazka.Uzivatel.nickName, "to state", stavName);
        console.log("Should change stav in DB");


        //update client model
        let newStav = this.stavModel.getStavByName(stavName);
        if(newStav != null){
            this.dochazka.StavUzivatele = newStav;
        }

        this.putDochazka();
    }    
}