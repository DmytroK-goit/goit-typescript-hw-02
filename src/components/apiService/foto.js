"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_KEY = "zPfqKHlY8f2W7Z-xNLRkx9ipN25JRq5Yw0Irf_pQgQ8";
axios_1.default.defaults.baseURL = "https://api.unsplash.com/";
axios_1.default.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios_1.default.defaults.params = {
    per_page: 16,
};
const getPhotos = async (searchValue, page) => {
    const { data } = await axios_1.default.get(`search/photos?query=${searchValue}&page=${page}>`);
    return data;
};
exports.default = getPhotos;
