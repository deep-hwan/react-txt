/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { TxtType } from "../types/txt";
export declare const TxtTheme: (props: {
    display?: "none" | "flex" | undefined;
    direction?: "row" | "column" | undefined;
    flex?: string | number | undefined;
    reverse?: boolean | undefined;
    align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
    crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
    flow?: string | undefined;
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    basis?: string | number | undefined;
    grow?: number | undefined;
    shrink?: number | undefined;
    gap?: number | undefined;
    crossGap?: number | undefined;
    order?: number | undefined;
    scale?: number | undefined;
} & {
    positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
    position?: {
        top?: string | number | undefined;
        bottom?: string | number | undefined;
        left?: string | number | undefined;
        right?: string | number | undefined;
    } | undefined;
    axis?: {
        x?: string | number | undefined;
        y?: string | number | undefined;
    } | undefined;
} & {
    color?: string | undefined;
    size?: string | number | undefined;
    lineHeight?: string | number | undefined;
    txtAlign?: "start" | "end" | "center" | undefined;
    weight?: "lighter" | "normal" | "medium" | "bold" | undefined;
    whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
    txtTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit" | undefined;
    ellipsis?: {
        ellipsis?: boolean | undefined;
        line?: number | undefined;
        width?: number | undefined;
    } | undefined;
    txtDecoration?: string | undefined;
} & {
    width?: string | undefined;
    minWidth?: string | number | undefined;
    maxWidth?: string | number | undefined;
    height?: string | undefined;
    minHeight?: string | number | undefined;
    maxHeight?: string | number | undefined;
} & {
    zIndex?: number | undefined;
    transitionTime?: number | undefined;
    cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
    opacity?: number | undefined;
    userSelect?: "auto" | "none" | "text" | "contain" | "all" | undefined;
    rotate?: string | number | undefined;
} & {
    padding?: {
        all?: string | number | undefined;
        horizontal?: string | number | undefined;
        vertical?: string | number | undefined;
        top?: string | number | undefined;
        bottom?: string | number | undefined;
        left?: string | number | undefined;
        right?: string | number | undefined;
    } | undefined;
    margin?: {
        all?: string | number | undefined;
        horizontal?: string | number | undefined;
        vertical?: string | number | undefined;
        top?: string | number | undefined;
        bottom?: string | number | undefined;
        left?: string | number | undefined;
        right?: string | number | undefined;
    } | undefined;
} & {
    _hover?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
        scale?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        color?: string | undefined;
        size?: string | number | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        weight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "text" | "contain" | "all" | undefined;
        rotate?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    }) | undefined;
    _active?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
        scale?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        color?: string | undefined;
        size?: string | number | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        weight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "text" | "contain" | "all" | undefined;
        rotate?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    }) | undefined;
    _disabled?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
        scale?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        color?: string | undefined;
        size?: string | number | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        weight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "text" | "contain" | "all" | undefined;
        rotate?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    }) | undefined;
    _focus?: ({
        display?: "none" | "flex" | undefined;
        direction?: "row" | "column" | undefined;
        flex?: string | number | undefined;
        reverse?: boolean | undefined;
        align?: "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline" | undefined;
        flow?: string | undefined;
        wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        basis?: string | number | undefined;
        grow?: number | undefined;
        shrink?: number | undefined;
        gap?: number | undefined;
        crossGap?: number | undefined;
        order?: number | undefined;
        scale?: number | undefined;
    } & {
        positionType?: "static" | "relative" | "fixed" | "absolute" | "sticky" | undefined;
        position?: {
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        axis?: {
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
    } & {
        color?: string | undefined;
        size?: string | number | undefined;
        lineHeight?: string | number | undefined;
        txtAlign?: "start" | "end" | "center" | undefined;
        weight?: "lighter" | "normal" | "medium" | "bold" | undefined;
        whiteSpace?: "nowrap" | "normal" | "pre" | "pre-wrap" | "pre-line" | undefined;
        txtTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit" | undefined;
        ellipsis?: {
            ellipsis?: boolean | undefined;
            line?: number | undefined;
            width?: number | undefined;
        } | undefined;
        txtDecoration?: string | undefined;
    } & {
        width?: string | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        height?: string | undefined;
        minHeight?: string | number | undefined;
        maxHeight?: string | number | undefined;
    } & {
        zIndex?: number | undefined;
        transitionTime?: number | undefined;
        cursor?: "default" | "grab" | "pointer" | "zoom" | undefined;
        opacity?: number | undefined;
        userSelect?: "auto" | "none" | "text" | "contain" | "all" | undefined;
        rotate?: string | number | undefined;
    } & {
        padding?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
        margin?: {
            all?: string | number | undefined;
            horizontal?: string | number | undefined;
            vertical?: string | number | undefined;
            top?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
            right?: string | number | undefined;
        } | undefined;
    }) | undefined;
} & import("../types/txt").MediaQueryType & {
    direction?: "row" | "column" | undefined;
}) => Interpolation<Theme>;
