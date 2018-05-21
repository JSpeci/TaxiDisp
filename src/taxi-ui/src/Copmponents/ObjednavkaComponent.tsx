import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Objednavka } from '../Utils/Interfaces';


export interface ObjednavkaProps {
    objednavka: Objednavka;
}

@observer
export class ObjednavkaComponent extends React.Component<ObjednavkaProps> {

    constructor(props: ObjednavkaProps) {
        super(props);
    }

    public render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center"
             key={this.props.objednavka.id}> {this.props.objednavka.adresaKam} </li>
        );
    }
}
