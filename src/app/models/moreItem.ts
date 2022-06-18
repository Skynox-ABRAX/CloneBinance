export class moreItem{

    imageURL: string;
    title: string;
    description: string;
    more: string

    constructor(url: string, titre :string, desc:string, more:string){

        this.imageURL = url;
        this.title = titre;
        this.description = desc;
        this.more = more;
    }
}