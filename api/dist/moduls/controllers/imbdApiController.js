"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImbdApiController = void 0;
const ImbdHtmlReaderService_1 = require("../../services/ImbdHtmlReaderService");
class ImbdApiController {
    /**
     *
     */
    constructor() {
        this.imbdSearchMouve = (req, res) => {
            res.send(this.imbdHtmlReaderService.getAllReader());
        };
        this.imbdHtmlReaderService = new ImbdHtmlReaderService_1.ImbdHtmlReaderService();
    }
}
exports.ImbdApiController = ImbdApiController;
