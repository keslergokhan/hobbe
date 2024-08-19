import config from 'config';

export class ImbdHtmlReaderService{
    imbdUrl:string;
    constructor(){
       this.imbdUrl = config.get<string>("imbdSearchUrl");
    }


    getAllReader():string{
        return this.imbdUrl;
    }
}