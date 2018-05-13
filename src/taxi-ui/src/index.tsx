import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { observable, computed, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { ApiRequest, IStavUzivatele } from './ApiRequest';

export class Model {

  @observable array: IStavUzivatele[];

  constructor() {
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
    let apiRequester = new ApiRequest("http://localhost:50062/");
    await apiRequester.getStav().then(data => { this.array = data });
  }

}
const stores = { Model };

ReactDOM.render(
  <Provider  modelStore={new Model()}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
