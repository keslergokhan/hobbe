"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImbdHtmlReaderService = void 0;
const config_1 = __importDefault(require("config"));
class ImbdHtmlReaderService {
    constructor() {
        this.imbdUrl = config_1.default.get("imbdSearchUrl");
    }
    getAllReader() {
        return this.imbdUrl;
    }
}
exports.ImbdHtmlReaderService = ImbdHtmlReaderService;
