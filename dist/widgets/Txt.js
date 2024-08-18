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
function Txt(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var _j = props.as, as = _j === void 0 ? "p" : _j, size = props.size, weight = props.weight, onClick = props.onClick, restProps = __rest(props, ["as", "size", "weight", "onClick"]);
    var elementProps = (0, extandedProps_1.extandedProps)(restProps).elementProps;
    var mq_styles = (0, mediaQuery_1.extandedMediaQuery)({ mediaQuery: props.mediaQuery });
    var TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: "300" },
        normal: { fontWeight: 400 },
        medium: { fontWeight: "500" },
        bold: { fontWeight: "600" },
    };
    var txt_size_extend = function () {
        if (size)
            return typeof size === "string" ? size : (size !== null && size !== void 0 ? size : 15) / 16 + "rem";
        if (as === "h1")
            return 54 / 16 + "rem";
        if (as === "h2")
            return 46 / 16 + "rem";
        if (as === "h3")
            return 42 / 16 + "rem";
        if (as === "h4")
            return 38 / 16 + "rem";
        if (as === "h5")
            return 30 / 16 + "rem";
        if (as === "h6")
            return 26 / 16 + "rem";
        if (as === "b")
            return 24 / 16 + "rem";
        if (as === "strong")
            return 18 / 16 + "rem";
        if (as === "i")
            return 15 / 16 + "rem";
        if (as === "p")
            return 15 / 16 + "rem";
        return typeof size === "string" ? size : (size !== null && size !== void 0 ? size : 15 / 16) + "rem";
    };
    var txt_weight = function () {
        if (weight)
            return TYPOGRAPH_WEIGHT[weight !== null && weight !== void 0 ? weight : "normal"].fontWeight;
        if (as === "h1")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "h2")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "h3")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "h4")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "h5")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "h6")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "b")
            return TYPOGRAPH_WEIGHT["bold"].fontWeight;
        if (as === "strong")
            return TYPOGRAPH_WEIGHT["medium"].fontWeight;
        if (as === "i")
            return TYPOGRAPH_WEIGHT["normal"].fontWeight;
        if (as === "p")
            return TYPOGRAPH_WEIGHT["normal"].fontWeight;
        return TYPOGRAPH_WEIGHT[weight !== null && weight !== void 0 ? weight : "normal"].fontWeight;
    };
    var txt_ellipsis_extend = {
        maxWidth: (_b = (_a = restProps === null || restProps === void 0 ? void 0 : restProps.ellipsis) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : restProps.maxWidth,
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: (_c = restProps === null || restProps === void 0 ? void 0 : restProps.ellipsis) === null || _c === void 0 ? void 0 : _c.line,
    };
    var txt_theme = (0, view_1.TxtTheme)(__assign(__assign(__assign({}, restProps), { size: txt_size_extend(), weight: txt_weight(), color: (_d = restProps.color) !== null && _d !== void 0 ? _d : "#4e4e51", txtAlign: (_e = restProps.txtAlign) !== null && _e !== void 0 ? _e : "start", whiteSpace: ((_f = props === null || props === void 0 ? void 0 : props.ellipsis) === null || _f === void 0 ? void 0 : _f.ellipsis)
            ? "normal"
            : (_g = props.whiteSpace) !== null && _g !== void 0 ? _g : "pre-line", userSelect: props.userSelect ? props.userSelect : onClick && "none", cursor: props.cursor ? props.cursor : onClick && "pointer" }), (((_h = restProps.ellipsis) === null || _h === void 0 ? void 0 : _h.ellipsis) && txt_ellipsis_extend)));
    var globel_theme = __assign(__assign(__assign({}, txt_theme), mq_styles), { "&:hover": (0, view_1.TxtTheme)(__assign({}, restProps.hover)), "&:active": (0, view_1.TxtTheme)(__assign({}, restProps.active)), "&:disabled": (0, view_1.TxtTheme)(__assign({}, restProps.disabled)) });
    //
    //
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [as === "h1" && ((0, jsx_runtime_1.jsx)("h1", __assign({ className: "h1_txt", css: __assign({}, globel_theme), onClick: onClick }, elementProps, { children: props.children }))), as === "h2" && ((0, jsx_runtime_1.jsx)("h2", __assign({ className: "h2_txt", css: __assign({}, globel_theme), onClick: onClick }, elementProps, { children: props.children }))), as === "h3" && ((0, jsx_runtime_1.jsx)("h3", __assign({ className: "h3_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "h4" && ((0, jsx_runtime_1.jsx)("h4", __assign({ className: "h4_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "h5" && ((0, jsx_runtime_1.jsx)("h5", __assign({ className: "h5_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "h6" && ((0, jsx_runtime_1.jsx)("h6", __assign({ className: "h6_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "b" && ((0, jsx_runtime_1.jsx)("b", __assign({ className: "b_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "strong" && ((0, jsx_runtime_1.jsx)("strong", __assign({ className: "strong_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "i" && ((0, jsx_runtime_1.jsx)("i", __assign({ className: "i_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "p" && ((0, jsx_runtime_1.jsx)("p", __assign({ className: "p_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children }))), as === "div" && ((0, jsx_runtime_1.jsx)("p", __assign({ className: "p_txt", css: __assign({}, globel_theme) }, elementProps, { children: props.children })))] }));
}
exports.default = Txt;
