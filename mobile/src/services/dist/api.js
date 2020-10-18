"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = axios_1["default"].create({
    baseURL: 'http://192.168.0.14:3333'
});
exports["default"] = api;
