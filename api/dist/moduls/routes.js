"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imbdApiController_1 = require("./controllers/imbdApiController");
const imbdApiController = new imbdApiController_1.ImbdApiController();
const route = (0, express_1.Router)();
route.get("/get-search-imbd-movie", imbdApiController.imbdSearchMouve);
exports.default = route;
