export class sectionItem{

    imageURL: string;
    title: string;
    description: string;
    link: string;


    constructor(url: string, titre :string, desc:string, lk: string){

        this.imageURL = url;
        this.title = titre;
        this.description = desc;
        this.link=lk;

    }
}