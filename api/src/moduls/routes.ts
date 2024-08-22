import { Router } from "express";
import { ImbdApiController } from "./controllers/imbdApiController";

const imbdApiController = new ImbdApiController();

const route = Router();

route.get("/get-search-imbd-movie",imbdApiController.imbdSearchMouve);

export default route;