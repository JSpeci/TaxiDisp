export interface Objednavka {
    id: string;
    adresaKam: string;
    pocetAut: number;
    casVzniku: string;
    casPristaveniVozu: string;
    casVyrizeni: string;
    kontaktNaKlienta: string;
    StavObjednavky: StavObjednavky;
    Dochazka: Dochazka;
}
export interface Uzivatel {
    id: string;
    nickName: string;
    login: string;
    celeJmeno: string;
    role: RoleUzivatele;
}
export interface Dochazka {
    id: string;
    prichod: string;
    odchod: string;
    Uzivatel: Uzivatel;
    TypPraceUzivatele: TypPraceUzivatele;
    StavUzivatele: StavUzivatele;
    Auto: Auto;
}
export interface RoleUzivatele {
    id: string;
    nazevRole: string;
}
export interface Auto {
    id: string;
    znacka: string;
    typ: string;
    barva: string;
    rokVyroby: number;
    pocetMist: number;
    idVysilacka: number;
    cisloMagistratni: number;
    registracniZnacka: string;
}
export interface TypPraceUzivatele {
    id: string;
    typPraceUzivatele: string;
}
export interface StavUzivatele {
    id: string;
    nazevStavu: string;
}
export interface StavObjednavky {
    id: number;
    nazevStavu: string;
}
