"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxtTheme = exports.TxtSpan = exports.Txt = void 0;
var view_1 = require("./themes/view");
Object.defineProperty(exports, "TxtTheme", { enumerable: true, get: function () { return view_1.TxtTheme; } });
var Txt_1 = __importDefault(require("./widgets/Txt"));
exports.Txt = Txt_1.default;
var TxtSpan_1 = __importDefault(require("./widgets/TxtSpan"));
exports.TxtSpan = TxtSpan_1.default;
