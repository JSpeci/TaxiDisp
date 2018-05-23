import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import { DochazkaModel } from '../Models/DochazkaModel';
import { DochazkaRowComponent } from './DochazkaRowComponent';
import { TypPraceUzivatele, Uzivatel } from '../Utils/Interfaces';

export interface NewDochazkaComponentProps {
    typyPrace: TypPraceUzivatele[];
    uzivatele: Uzivatel[];
    prichod: (idUzivatel: string, idTypPrace: string) => void;
}

@observer
export class NewDochazkaComponent extends React.Component<NewDochazkaComponentProps> {

    constructor(props: NewDochazkaComponentProps) {
        super(props);
    }

    public render() {
        return (
            <form className="form-inline">
                <div className="form-group mb-2">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                </div>
                <div className="form-group mx-sm-3 mb-2">

                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
            </form>
        );
    }
}
