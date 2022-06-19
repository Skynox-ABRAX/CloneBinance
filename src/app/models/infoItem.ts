export class infoItem{

    imageURL: string;
    title: string;
    description: string;

    constructor(url: string, titre :string, desc:string){

        this.imageURL = url;
        this.title = titre;
        this.description = desc;

    }
}