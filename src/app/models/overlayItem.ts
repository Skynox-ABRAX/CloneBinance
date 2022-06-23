export class overlayItem{

    svgPath: string;
    title: string;
    description: string;
    more: string

    constructor(url: string, titre :string, desc:string, more:string){

        this.svgPath = url;
        this.title = titre;
        this.description = desc;
        this.more = more;
    }
}