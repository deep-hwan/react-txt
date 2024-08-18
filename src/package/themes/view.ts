/** @jsxImportSource @emotion/react */

import { Interpolation, Theme } from "@emotion/react";
import { TxtType } from "../types/txt";

export const TxtTheme = (props: TxtType & { direction?: "row" | "column" }) => {
  const { direction, reverse, gap, crossGap, axis } = props;

  if (!props) return {};

  return {
    width: props?.width,
    minWidth: props?.minWidth,
    maxWidth: props?.maxWidth,
    height: props?.height,
    minHeight: props?.minHeight,
    maxHeight: props?.maxHeight,

    //
    position: props.positionType,
    top: props?.position?.top,
    bottom: props.position?.bottom,
    left: props.position?.left,
    right: props.position?.right,
    transform:
      !!axis &&
      `translate(${
        typeof axis?.x === "number" ? axis?.x + "px" : axis?.x ?? 0
      }, ${typeof axis?.y === "number" ? axis?.y + "px" : axis?.y ?? 0})`,

    //
    display: props?.display ?? "-webkit-box",
    flexDirection:
      reverse && props.direction
        ? props.direction + "-reverse"
        : props.direction,
    alignItems: props.align,
    justifyContent: props?.crossAlign,
    alignContent: props?.alignContent,
    alignSelf: props?.alignSelf,
    flex: props.flex,
    flexWrap: props?.wrap,
    flexBasis: props?.basis,
    flexFlow: props?.flow,
    flexGrow: props?.grow,
    flexShrink: props?.shrink,
    rowGap:
      (direction === "column" && gap) ||
      (direction === "row" && crossGap) ||
      gap,
    columnGap:
      (direction === "column" && crossGap) ||
      (direction === "row" && gap) ||
      crossGap,
    order: props.order,

    //
    zIndex: props?.zIndex,
    transition:
      props?.transitionTime && `${props?.transitionTime}s ease-in-out`,
    cursor: props?.cursor,
    opacity: props.opacity,
    userSelect: props.userSelect,

    //
    paddingTop:
      props?.padding?.all || props?.padding?.vertical || props?.padding?.top,
    paddingBottom:
      props?.padding?.all || props?.padding?.vertical || props?.padding?.bottom,
    paddingRight:
      props?.padding?.all ||
      props?.padding?.horizontal ||
      props?.padding?.right,
    paddingLeft:
      props?.padding?.all || props?.padding?.horizontal || props?.padding?.left,

    //
    marginTop:
      props?.margin?.all || props?.margin?.vertical || props?.margin?.top,
    marginBottom:
      props?.margin?.all || props?.margin?.vertical || props?.margin?.bottom,
    marginRight:
      props?.margin?.all || props?.margin?.horizontal || props?.margin?.right,
    marginLeft:
      props?.margin?.all || props?.margin?.horizontal || props?.margin?.left,

    //
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
    lineHeight: props?.lineHeight,
    textAlign: props.txtAlign,
    whiteSpace: props.whiteSpace,
    textTransform: props.txtTransform,
    textDecoration: props.txtDecoration,
    overflow: props.ellipsis?.ellipsis && "hidden",
    textOverflow: props.ellipsis?.ellipsis && "ellipsis",
    WebkitBoxOrient: props.ellipsis?.ellipsis && "vertical",
    WebkitLineClamp: props?.ellipsis?.line,
  } as Interpolation<Theme>;
};
