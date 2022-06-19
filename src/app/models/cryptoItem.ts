export class cryptoItem{

    imageURL: string;
    title: string;
    crypto: string;
    lastPrice: string;
    variation: string;
    capitalisation: string;

    constructor(url: string, titre :string, cry:string, lastP:string, vr: string, cap: string){

        this.imageURL = url;
        this.title = titre;
        this.crypto=cry;
        this.lastPrice=lastP;
        this.variation=vr;
        this.capitalisation=cap;

    }
}