import config from 'config'
import axios from 'axios';
import * as cheerio from 'cheerio'
import { GetAllReaderResModel } from '../moduls/models/GetAllReaderResModel';
import { IResultDataControl } from '../commons/ResultControls/IResultControl';
import { ResultControlData } from '../commons/ResultControls/ResultControl';

export class ImbdHtmlReaderService{

    private imbdSearchUrl:string;
    constructor(){
        this.imbdSearchUrl = config.get<string>("imbdSearchUrl");
    }

    public GetAllReader = async ():Promise<IResultDataControl<Array<GetAllReaderResModel>>>=> {

        const result = new ResultControlData<Array<GetAllReaderResModel>>();

        const items = new Array<GetAllReaderResModel>();
        try {
            const response = await axios.get(this.imbdSearchUrl,{
                headers:{
                    'User-Agent': 'hobbe/1.0'
                }
            });

            const $ = cheerio.load(response.data);

            const listContainer = $(".ipc-metadata-list").first();
            $(listContainer).find("li").each((index,element)=>{
                let image = $(element).find(".ipc-image").attr("srcset");
                const title = $(element).find(".ipc-metadata-list-summary-item__t").text();
            
                if(image!=null && title!=null){
                    if(image.indexOf("@")>-1){
                        const splitResult = image.split(' ');

                        image = splitResult[splitResult.length -2].replace("100w","").replace(' ','');
                    }
                    items.push(new GetAllReaderResModel(title,image));
                }
            });

            result.SuccessSetData(items);

        } catch (error) {
            result.FailSetException(error);
        }
        

        return result;
    }
}