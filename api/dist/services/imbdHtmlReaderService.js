"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImbdHtmlReaderService = void 0;
const config_1 = __importDefault(require("config"));
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const GetAllReaderResModel_1 = require("../moduls/models/GetAllReaderResModel");
const ResultControl_1 = require("../commons/ResultControls/ResultControl");
class ImbdHtmlReaderService {
    constructor() {
        this.GetAllReader = () => __awaiter(this, void 0, void 0, function* () {
            const result = new ResultControl_1.ResultControlData();
            const items = new Array();
            try {
                const response = yield axios_1.default.get(this.imbdSearchUrl, {
                    headers: {
                        'User-Agent': 'hobbe/1.0'
                    }
                });
                const $ = cheerio.load(response.data);
                const listContainer = $(".ipc-metadata-list").first();
                $(listContainer).find("li").each((index, element) => {
                    let image = $(element).find(".ipc-image").attr("srcset");
                    const title = $(element).find(".ipc-metadata-list-summary-item__t").text();
                    if (image != null && title != null) {
                        if (image.indexOf("@") > -1) {
                            const splitResult = image.split(' ');
                            image = splitResult[splitResult.length - 2].replace("100w", "").replace(' ', '');
                        }
                        items.push(new GetAllReaderResModel_1.GetAllReaderResModel(title, image));
                    }
                });
                result.SuccessSetData(items);
            }
            catch (error) {
                result.FailSetException(error);
            }
            return result;
        });
        this.imbdSearchUrl = config_1.default.get("imbdSearchUrl");
    }
}
exports.ImbdHtmlReaderService = ImbdHtmlReaderService;
