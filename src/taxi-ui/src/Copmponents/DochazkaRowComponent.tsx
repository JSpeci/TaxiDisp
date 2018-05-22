import * as React from 'react';
import { observer } from 'mobx-react';
import { DochazkaRowModel } from '../Models/DochazkaRowModel';


export interface DochazkaRowComponentProps {
    dochazkaRowModel: DochazkaRowModel;
}

@observer
export class DochazkaRowComponent extends React.Component<DochazkaRowComponentProps> {

    constructor(props: DochazkaRowComponentProps) {
        super(props);
    }

    public render() {

        return (
            <tr className="" key={this.props.dochazkaRowModel.dochazka.id}>
                <td className="objItem">{this.props.dochazkaRowModel.dochazka.prichod}</td>
                <td className="objItem">{this.props.dochazkaRowModel.dochazka.odchod} </td>

                <td className={this.getClassNameByStavUzivatele()}>{this.props.dochazkaRowModel.dochazka.StavUzivatele.nazevStavu} </td>
                <td className={this.getClassNameByTypPrace()}>{this.props.dochazkaRowModel.dochazka.TypPraceUzivatele.typPraceUzivatele} </td>
                <td className={this.getClassNameByPracuje()}>{this.props.dochazkaRowModel.jeVPraci ? "v praci" : "nepracuje"} </td>
                <td><button type="button" className="btn btn-success">Edit</button></td>
            </tr>
        );
    }

    getClassNameByPracuje() {
        return this.props.dochazkaRowModel.jeVPraci ? "objItem bg-success" : "objItem bg-danger"
    }


    getClassNameByTypPrace() {
        if (this.props.dochazkaRowModel.dochazka.TypPraceUzivatele.typPraceUzivatele === "směna") {
            return "objItem bg-primary";
        }
        else {
            return "objItem bg-secondary";
        }
    }

    getClassNameByStavUzivatele() {
        switch (this.props.dochazkaRowModel.dochazka.StavUzivatele.nazevStavu) {
            case "volny":
                return "objItem bg-success";
            case "obsazeny":
                return "objItem bg-waarning";
            case "vedle":
                return "objItem bg-success";
            case "mimo":
                return "objItem bg-info";
            default:
                return "objItem bg-light";
        }
    }
}
