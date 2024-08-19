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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var extandedProps_1 = require("../utils/extandedProps");
var view_1 = require("../themes/view");
var mediaQuery_1 = require("../themes/mediaQuery");
//
function TxtSpan(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var size = props.size, weight = props.weight, onClick = props.onClick, restProps = __rest(props, ["size", "weight", "onClick"]);
    var elementProps = (0, extandedProps_1.extandedProps)(restProps).elementProps;
    var mq_styles = (0, mediaQuery_1.extandedMediaQuery)({ mediaQuery: props.mediaQuery });
    var TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: "300" },
        normal: { fontWeight: 400 },
        medium: { fontWeight: "500" },
        bold: { fontWeight: "600" },
    };
    var txt_ellipsis_extend = {
        maxWidth: (_b = (_a = restProps === null || restProps === void 0 ? void 0 : restProps.ellipsis) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : restProps.maxWidth,
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: (_c = restProps === null || restProps === void 0 ? void 0 : restProps.ellipsis) === null || _c === void 0 ? void 0 : _c.line,
    };
    var txt_theme = (0, view_1.TxtTheme)(__assign(__assign(__assign({}, restProps), { size: typeof size === "string" ? size : (size !== null && size !== void 0 ? size : 15) / 16 + "rem", weight: TYPOGRAPH_WEIGHT[weight !== null && weight !== void 0 ? weight : "normal"].fontWeight, color: restProps.color, txtAlign: (_d = restProps.txtAlign) !== null && _d !== void 0 ? _d : "start", whiteSpace: ((_e = props === null || props === void 0 ? void 0 : props.ellipsis) === null || _e === void 0 ? void 0 : _e.ellipsis)
            ? "normal"
            : (_f = props.whiteSpace) !== null && _f !== void 0 ? _f : "nowrap", userSelect: props.userSelect ? props.userSelect : onClick && "none", cursor: props.cursor ? props.cursor : onClick && "pointer" }), (((_g = restProps.ellipsis) === null || _g === void 0 ? void 0 : _g.ellipsis) && txt_ellipsis_extend)));
    var globel_theme = __assign(__assign(__assign({}, txt_theme), mq_styles), { "&:hover": (0, view_1.TxtTheme)(__assign({}, restProps.hover)), "&:active": (0, view_1.TxtTheme)(__assign({}, restProps.active)), "&:disabled": (0, view_1.TxtTheme)(__assign({}, restProps.disabled)) });
    //
    //
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "span_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children })));
}
exports.default = TxtSpan;
