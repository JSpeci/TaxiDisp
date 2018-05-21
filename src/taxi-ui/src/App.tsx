import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, computed, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Model } from './index';

import { ApiRequest, IStavUzivatele } from './ApiRequest';

export interface AppProps {

}



export default class App extends React.Component<AppProps> {

  constructor(props: AppProps) {
    super(props);

  }

  public render() {
    return (

        <Router>
          <div className="App">

            <ul>
              <li><Link to='/'>Homeee</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>

            </ul>

            <hr />

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />

          </div>
        </Router>
      
    );
  }
}

export interface HomeProps{
  modelStore: Model;
}

@inject('modelStore')
@observer
export class Home extends React.Component<HomeProps> {

  constructor(props: any) {
    super(props);
  }

  clicked() {
    console.log("clicked");
    console.log(this.props.modelStore);
    this.props.modelStore.pop();
  }

  clicked2() {
    console.log("clicked2");
    this.props.modelStore.reload();
  }

  public render() {

    return (
      <div className="stavy">
        <button onClick={() => this.clicked()}>POP</button>
        <button onClick={() => this.clicked2()}>Reload</button>
        <span>{JSON.stringify(this.props.modelStore.array)}</span>
      </div>
    );
  }
}

export class About extends React.Component {

  public render() {

    return (
      "About"
    );
  }
}

export class Topics extends React.Component {

  public render() {

    return (
      "Topics"
    );
  }
}




