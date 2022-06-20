export class possibilityItem{

    imageURL: string;
    title: string;
    description: string;
    order: number;


    constructor(url: string, titre :string, desc:string, ord: number){

        this.imageURL = url;
        this.title = titre;
        this.description = desc;
        this.order = ord;

    }
}