"use strict";
/** @jsxImportSource @emotion/react */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxtTheme = void 0;
var TxtTheme = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
    var direction = props.direction, reverse = props.reverse, gap = props.gap, crossGap = props.crossGap, axis = props.axis;
    if (!props)
        return {};
    return {
        width: props === null || props === void 0 ? void 0 : props.width,
        minWidth: props === null || props === void 0 ? void 0 : props.minWidth,
        maxWidth: props === null || props === void 0 ? void 0 : props.maxWidth,
        height: props === null || props === void 0 ? void 0 : props.height,
        minHeight: props === null || props === void 0 ? void 0 : props.minHeight,
        maxHeight: props === null || props === void 0 ? void 0 : props.maxHeight,
        //
        position: props.positionType,
        top: (_a = props === null || props === void 0 ? void 0 : props.position) === null || _a === void 0 ? void 0 : _a.top,
        bottom: (_b = props.position) === null || _b === void 0 ? void 0 : _b.bottom,
        left: (_c = props.position) === null || _c === void 0 ? void 0 : _c.left,
        right: (_d = props.position) === null || _d === void 0 ? void 0 : _d.right,
        transform: !!axis &&
            "translate(".concat(typeof (axis === null || axis === void 0 ? void 0 : axis.x) === "number" ? (axis === null || axis === void 0 ? void 0 : axis.x) + "px" : (_e = axis === null || axis === void 0 ? void 0 : axis.x) !== null && _e !== void 0 ? _e : 0, ", ").concat(typeof (axis === null || axis === void 0 ? void 0 : axis.y) === "number" ? (axis === null || axis === void 0 ? void 0 : axis.y) + "px" : (_f = axis === null || axis === void 0 ? void 0 : axis.y) !== null && _f !== void 0 ? _f : 0, ")"),
        //
        display: (_g = props === null || props === void 0 ? void 0 : props.display) !== null && _g !== void 0 ? _g : "-webkit-box",
        flexDirection: reverse && props.direction
            ? props.direction + "-reverse"
            : props.direction,
        alignItems: props.align,
        justifyContent: props === null || props === void 0 ? void 0 : props.crossAlign,
        alignContent: props === null || props === void 0 ? void 0 : props.alignContent,
        alignSelf: props === null || props === void 0 ? void 0 : props.alignSelf,
        flex: props.flex,
        flexWrap: props === null || props === void 0 ? void 0 : props.wrap,
        flexBasis: props === null || props === void 0 ? void 0 : props.basis,
        flexFlow: props === null || props === void 0 ? void 0 : props.flow,
        flexGrow: props === null || props === void 0 ? void 0 : props.grow,
        flexShrink: props === null || props === void 0 ? void 0 : props.shrink,
        rowGap: (direction === "column" && gap) ||
            (direction === "row" && crossGap) ||
            gap,
        columnGap: (direction === "column" && crossGap) ||
            (direction === "row" && gap) ||
            crossGap,
        order: props.order,
        //
        zIndex: props === null || props === void 0 ? void 0 : props.zIndex,
        transition: (props === null || props === void 0 ? void 0 : props.transitionTime) && "".concat(props === null || props === void 0 ? void 0 : props.transitionTime, "s ease-in-out"),
        cursor: props === null || props === void 0 ? void 0 : props.cursor,
        opacity: props.opacity,
        rotate: typeof props.rotate === "number" ? props.rotate + "deg" : props.rotate,
        userSelect: props.userSelect,
        scale: props.scale,
        //
        paddingTop: ((_h = props === null || props === void 0 ? void 0 : props.padding) === null || _h === void 0 ? void 0 : _h.all) || ((_j = props === null || props === void 0 ? void 0 : props.padding) === null || _j === void 0 ? void 0 : _j.vertical) || ((_k = props === null || props === void 0 ? void 0 : props.padding) === null || _k === void 0 ? void 0 : _k.top),
        paddingBottom: ((_l = props === null || props === void 0 ? void 0 : props.padding) === null || _l === void 0 ? void 0 : _l.all) || ((_m = props === null || props === void 0 ? void 0 : props.padding) === null || _m === void 0 ? void 0 : _m.vertical) || ((_o = props === null || props === void 0 ? void 0 : props.padding) === null || _o === void 0 ? void 0 : _o.bottom),
        paddingRight: ((_p = props === null || props === void 0 ? void 0 : props.padding) === null || _p === void 0 ? void 0 : _p.all) ||
            ((_q = props === null || props === void 0 ? void 0 : props.padding) === null || _q === void 0 ? void 0 : _q.horizontal) ||
            ((_r = props === null || props === void 0 ? void 0 : props.padding) === null || _r === void 0 ? void 0 : _r.right),
        paddingLeft: ((_s = props === null || props === void 0 ? void 0 : props.padding) === null || _s === void 0 ? void 0 : _s.all) || ((_t = props === null || props === void 0 ? void 0 : props.padding) === null || _t === void 0 ? void 0 : _t.horizontal) || ((_u = props === null || props === void 0 ? void 0 : props.padding) === null || _u === void 0 ? void 0 : _u.left),
        //
        marginTop: ((_v = props === null || props === void 0 ? void 0 : props.margin) === null || _v === void 0 ? void 0 : _v.all) || ((_w = props === null || props === void 0 ? void 0 : props.margin) === null || _w === void 0 ? void 0 : _w.vertical) || ((_x = props === null || props === void 0 ? void 0 : props.margin) === null || _x === void 0 ? void 0 : _x.top),
        marginBottom: ((_y = props === null || props === void 0 ? void 0 : props.margin) === null || _y === void 0 ? void 0 : _y.all) || ((_z = props === null || props === void 0 ? void 0 : props.margin) === null || _z === void 0 ? void 0 : _z.vertical) || ((_0 = props === null || props === void 0 ? void 0 : props.margin) === null || _0 === void 0 ? void 0 : _0.bottom),
        marginRight: ((_1 = props === null || props === void 0 ? void 0 : props.margin) === null || _1 === void 0 ? void 0 : _1.all) || ((_2 = props === null || props === void 0 ? void 0 : props.margin) === null || _2 === void 0 ? void 0 : _2.horizontal) || ((_3 = props === null || props === void 0 ? void 0 : props.margin) === null || _3 === void 0 ? void 0 : _3.right),
        marginLeft: ((_4 = props === null || props === void 0 ? void 0 : props.margin) === null || _4 === void 0 ? void 0 : _4.all) || ((_5 = props === null || props === void 0 ? void 0 : props.margin) === null || _5 === void 0 ? void 0 : _5.horizontal) || ((_6 = props === null || props === void 0 ? void 0 : props.margin) === null || _6 === void 0 ? void 0 : _6.left),
        //
        color: props.color,
        fontSize: props.size,
        fontWeight: props.weight,
        lineHeight: props === null || props === void 0 ? void 0 : props.lineHeight,
        textAlign: props.txtAlign,
        whiteSpace: props.whiteSpace,
        textTransform: props.txtTransform,
        textDecoration: props.txtDecoration,
        overflow: ((_7 = props.ellipsis) === null || _7 === void 0 ? void 0 : _7.ellipsis) && "hidden",
        textOverflow: ((_8 = props.ellipsis) === null || _8 === void 0 ? void 0 : _8.ellipsis) && "ellipsis",
        WebkitBoxOrient: ((_9 = props.ellipsis) === null || _9 === void 0 ? void 0 : _9.ellipsis) && "vertical",
        WebkitLineClamp: (_10 = props === null || props === void 0 ? void 0 : props.ellipsis) === null || _10 === void 0 ? void 0 : _10.line,
    };
};
exports.TxtTheme = TxtTheme;
