/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from "react";
import { TxtType } from "../types/txt";
import { extandedProps } from "../utils/extandedProps";
import { TxtTheme } from "../themes/view";
import { extandedMediaQuery } from "../themes/mediaQuery";

//
type Types = {
  children: ReactNode;
} & TxtType &
  HTMLAttributes<HTMLElement>;

//
export default function TxtSpan(props: Types & { [key: string]: any }) {
  const { size, weight, onClick, ...restProps } = props;

  const { elementProps } = extandedProps(restProps);
  const mq_styles = extandedMediaQuery({ mediaQuery: props.mediaQuery });

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: "300" },
    normal: { fontWeight: 400 },
    medium: { fontWeight: "500" },
    bold: { fontWeight: "600" },
  } as const;

  const txt_ellipsis_extend = {
    maxWidth: restProps?.ellipsis?.width ?? restProps.maxWidth,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: restProps?.ellipsis?.line,
  } as any;

  const txt_theme = TxtTheme({
    ...restProps,
    size: typeof size === "string" ? size : (size ?? 15) / 16 + "rem",
    weight: TYPOGRAPH_WEIGHT[weight ?? "normal"].fontWeight,
    color: restProps.color,
    txtAlign: restProps.txtAlign ?? "start",
    whiteSpace: props?.ellipsis?.ellipsis
      ? "normal"
      : props.whiteSpace ?? "pre-line",
    userSelect: props.userSelect ? props.userSelect : onClick && "none",
    cursor: props.cursor ? props.cursor : onClick && "pointer",
    ...(restProps.ellipsis?.ellipsis && txt_ellipsis_extend),
  });

  const globel_theme = {
    ...(txt_theme as any),
    ...mq_styles,
    "&:hover": TxtTheme({ ...restProps.hover }),
    "&:active": TxtTheme({ ...restProps.active }),
    "&:disabled": TxtTheme({ ...restProps.disabled }),
  };

  //
  //

  return (
    <span
      className="span_txt"
      css={{ ...(globel_theme as any) }}
      {...elementProps}
    >
      {props.children}
    </span>
  );
}
