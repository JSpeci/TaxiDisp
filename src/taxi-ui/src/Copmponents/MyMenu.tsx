import * as React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export interface MyMenuProps {

}
export class MyMenu extends React.Component<MyMenuProps>{
    constructor(props: MyMenuProps) {
        super(props);
    }
    public render() {
        return (
            <nav className="navbar sticky-top navbar-light bg-light">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Link to='/Home' className="navbar-brand">Home</Link>
                    <Link to='/Objednavky' className="navbar-brand" >Objednavky</Link>
                    <Link to='/Uzivatele' className="navbar-brand" >Řidiči a dispečeři</Link>
                    <Link to='/Dochazka' className="navbar-brand" >Docházka</Link>
                </ul>
            </nav>
        );
    }
}