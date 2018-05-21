import { observable } from "mobx";
import { StavUzivatele } from "../Utils/Interfaces";
import { ApiRequest } from "../Utils/ApiRequest";

export class StavUzivateleModel {

    @observable array: StavUzivatele[];
  
    apiRequester: ApiRequest;
    constructor(apiRequester: ApiRequest) {
      this.apiRequester = apiRequester;
      this.load();
    }
  
    pop() {
      this.array.pop();
      console.log("popped");
    }
  
    reload() {
      this.load();
      console.log("reloaded");
    }
  
    async load() {
      await this.apiRequester.getStav().then(data => { this.array = data });
    }
  
  }