import { Response,Request } from "express";
import { ImbdHtmlReaderService } from "../../services/ImbdHtmlReaderService";

export class ImbdApiController {

    private imbdHtmlReaderService:ImbdHtmlReaderService;

    /**
     *
     */
    constructor() {
        this.imbdHtmlReaderService = new ImbdHtmlReaderService();
    }

    imbdSearchMouve = (req:Request,res:Response):void => {
        res.send(this.imbdHtmlReaderService.getAllReader());
    }
}
