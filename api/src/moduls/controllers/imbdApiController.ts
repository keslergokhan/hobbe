import { Response,Request } from "express";
import { ImbdHtmlReaderService } from "../../services/ImbdHtmlReaderService";

export class ImbdApiController {

    public imbdHtmlReaderService:ImbdHtmlReaderService;

    constructor() {
        this.imbdHtmlReaderService = new ImbdHtmlReaderService();
    }

    public imbdSearchMouve = async (req:Request,res:Response):Promise<void> =>
    {
        const resultControl = await this.imbdHtmlReaderService.GetAllReader();
        res.json(resultControl);
    }
}
