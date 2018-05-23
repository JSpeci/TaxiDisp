import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import { DochazkaModel } from '../Models/DochazkaModel';
import { DochazkaRowComponent } from './DochazkaRowComponent';
import { StavUzivateleModel } from '../Models/StavUzivateleModel';
import { Uzivatel } from '../Utils/Interfaces';
import { UzivatelRowModel } from '../Models/UzivatelRowModel';
import { DochazkaRowModel } from '../Models/DochazkaRowModel';

export interface StavSelectComponentProps {
    dochazkaRowModel: DochazkaRowModel;
}

@observer
export class StavSelectComponent extends React.Component<StavSelectComponentProps> {

    constructor(props: StavSelectComponentProps) {
        super(props);
    }

    public render() {
        let list = this.props.dochazkaRowModel.stavModel.array.map(
            s => {
                return (
                    <option key={s.id}>{s.nazevStavu}</option>
                );
            }
        );

        return (
            <select defaultValue={this.props.dochazkaRowModel.dochazka.StavUzivatele.nazevStavu} className="form-control" onChange={(e) => {this.props.dochazkaRowModel.stavChanged(e.target.value)}}>
                {list}
            </select>
        );
    }

}
