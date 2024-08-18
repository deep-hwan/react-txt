"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extandedMediaQuery = void 0;
var view_1 = require("./view");
var TxtThemes = function (props) {
    return (0, view_1.TxtTheme)(props);
};
var extandedMediaQuery = function (_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h;
    var mediaQuery = _a.mediaQuery;
    var mq_theme = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (mediaQuery) {
            return {
                s1440: __assign(__assign({}, TxtThemes(mediaQuery.s1440 || {})), { "&:hover": TxtThemes(((_a = mediaQuery.s1440) === null || _a === void 0 ? void 0 : _a.hover) || {}), "&:active": TxtThemes(((_b = mediaQuery.s1440) === null || _b === void 0 ? void 0 : _b.active) || {}) }),
                s1280: __assign(__assign({}, TxtThemes(mediaQuery.s1280 || {})), { "&:hover": TxtThemes(((_c = mediaQuery.s1280) === null || _c === void 0 ? void 0 : _c.hover) || {}), "&:active": TxtThemes(((_d = mediaQuery.s1280) === null || _d === void 0 ? void 0 : _d.active) || {}) }),
                s1080: __assign(__assign({}, TxtThemes(mediaQuery.s1080 || {})), { "&:hover": TxtThemes(((_e = mediaQuery.s1080) === null || _e === void 0 ? void 0 : _e.hover) || {}), "&:active": TxtThemes(((_f = mediaQuery.s1080) === null || _f === void 0 ? void 0 : _f.active) || {}) }),
                s768: __assign(__assign({}, TxtThemes(mediaQuery.s768 || {})), { "&:hover": TxtThemes(((_g = mediaQuery.s768) === null || _g === void 0 ? void 0 : _g.hover) || {}), "&:active": TxtThemes(((_h = mediaQuery.s768) === null || _h === void 0 ? void 0 : _h.active) || {}) }),
                s600: __assign(__assign({}, TxtThemes(mediaQuery.s600 || {})), { "&:hover": TxtThemes(((_j = mediaQuery.s600) === null || _j === void 0 ? void 0 : _j.hover) || {}), "&:active": TxtThemes(((_k = mediaQuery.s600) === null || _k === void 0 ? void 0 : _k.active) || {}) }),
                s428: __assign(__assign({}, TxtThemes(mediaQuery.s428 || {})), { "&:hover": TxtThemes(((_l = mediaQuery.s428) === null || _l === void 0 ? void 0 : _l.hover) || {}), "&:active": TxtThemes(((_m = mediaQuery.s428) === null || _m === void 0 ? void 0 : _m.active) || {}) }),
            };
        }
    };
    var screenSize = [1440, 1280, 1080, 768, 600, 428];
    var MQ = screenSize.map(function (bp) { return "@media (max-width: ".concat(bp, "px)"); });
    return _b = {},
        _b[MQ[0]] = __assign({}, (_c = mq_theme()) === null || _c === void 0 ? void 0 : _c.s1440),
        _b[MQ[1]] = __assign({}, (_d = mq_theme()) === null || _d === void 0 ? void 0 : _d.s1280),
        _b[MQ[2]] = __assign({}, (_e = mq_theme()) === null || _e === void 0 ? void 0 : _e.s1080),
        _b[MQ[3]] = __assign({}, (_f = mq_theme()) === null || _f === void 0 ? void 0 : _f.s768),
        _b[MQ[4]] = __assign({}, (_g = mq_theme()) === null || _g === void 0 ? void 0 : _g.s600),
        _b[MQ[5]] = __assign({}, (_h = mq_theme()) === null || _h === void 0 ? void 0 : _h.s428),
        _b;
};
exports.extandedMediaQuery = extandedMediaQuery;
