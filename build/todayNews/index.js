"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todayNews = void 0;
var puppeteer_1 = __importDefault(require("puppeteer"));
var cheerio_1 = __importDefault(require("cheerio"));
/**
 * Retrieves the news titles from "Hadshot Hayom" and returns them in a JSON format.
 *
 * @returns {Promise<string[] | null>} An array of news titles extracted from the website or null if an error occurs.
 */
function todayNews() {
    return __awaiter(this, void 0, void 0, function () {
        var url, browser, page, htmlContent, $, articleBlocks, jsonResponse, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://www.hidabroot.org/%D7%97%D7%93%D7%A9%D7%95%D7%AA-%D7%94%D7%99%D7%95%D7%9D";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, puppeteer_1.default.launch({
                            headless: "new",
                        })];
                case 2:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 3:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto(url)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, page.content()];
                case 5:
                    htmlContent = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 6:
                    _a.sent();
                    $ = cheerio_1.default.load(htmlContent);
                    articleBlocks = $(".article_block");
                    jsonResponse = [
                        $(articleBlocks[1]).find("span").attr("title").trim() || null,
                        $(articleBlocks[2]).find("span").attr("title").trim() || null,
                        $(articleBlocks[3]).find("span").attr("title").trim() || null,
                        $(articleBlocks[4]).find("span").attr("title").trim() || null,
                    ];
                    return [2 /*return*/, jsonResponse];
                case 7:
                    err_1 = _a.sent();
                    console.error("Error:", err_1);
                    return [2 /*return*/, undefined];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.todayNews = todayNews;
//# sourceMappingURL=index.js.map