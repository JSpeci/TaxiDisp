import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { observable, computed, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { ApiRequest } from './Utils/ApiRequest';
import { ObjednavkyModel } from './Models/ObjednavkyModel';
import { StavUzivatele } from './Utils/Interfaces';
import { StavUzivateleModel } from './Models/StavUzivateleModel';
import { UzivateleModel } from './Models/UzivateleModel';
import { DochazkaModel } from './Models/DochazkaModel';

const apiRequest = new ApiRequest();

ReactDOM.render(
  <Provider modelStore={new StavUzivateleModel(apiRequest)}
            objednavkyStore={new ObjednavkyModel(apiRequest)}
            uzivateleStore={new UzivateleModel(apiRequest)}
            dochazkaStore={new DochazkaModel(apiRequest)}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
