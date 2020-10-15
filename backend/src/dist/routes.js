"use strict";
exports.__esModule = true;
var express_1 = require("express");
var multer_1 = require("multer");
var upload_1 = require("./config/upload");
var OrphanagesController_1 = require("./controller/OrphanagesController");
var routes = express_1.Router();
var upload = multer_1["default"](upload_1["default"]);
routes.get('/orphanages', OrphanagesController_1["default"].index);
routes.get('/orphanages/:id', OrphanagesController_1["default"].show);
routes.post('/orphanages', OrphanagesController_1["default"].create);
exports["default"] = routes;