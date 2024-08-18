/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from "react";
import { TxtType } from "../types/txt";
import { extandedProps } from "../utils/extandedProps";
import { TxtTheme } from "../themes/view";
import { extandedMediaQuery } from "../themes/mediaQuery";

//
type Types = {
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "strong"
    | "b"
    | "i"
    | "p"
    | "div";
  children: ReactNode;
} & TxtType &
  HTMLAttributes<HTMLElement>;

//
export default function Txt(props: Types & { [key: string]: any }) {
  const { as = "p", size, weight, onClick, ...restProps } = props;

  const { elementProps } = extandedProps(restProps);
  const mq_styles = extandedMediaQuery({ mediaQuery: props.mediaQuery });

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: "300" },
    normal: { fontWeight: 400 },
    medium: { fontWeight: "500" },
    bold: { fontWeight: "600" },
  } as const;

  const txt_size_extend = () => {
    if (size)
      return typeof size === "string" ? size : (size ?? 15) / 16 + "rem";
    if (as === "h1") return 54 / 16 + "rem";
    if (as === "h2") return 46 / 16 + "rem";
    if (as === "h3") return 42 / 16 + "rem";
    if (as === "h4") return 38 / 16 + "rem";
    if (as === "h5") return 30 / 16 + "rem";
    if (as === "h6") return 26 / 16 + "rem";
    if (as === "b") return 24 / 16 + "rem";
    if (as === "strong") return 18 / 16 + "rem";
    if (as === "i") return 15 / 16 + "rem";
    if (as === "p") return 15 / 16 + "rem";

    return typeof size === "string" ? size : (size ?? 15 / 16) + "rem";
  };

  const txt_weight = () => {
    if (weight) return TYPOGRAPH_WEIGHT[weight ?? "normal"].fontWeight;
    if (as === "h1") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "h2") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "h3") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "h4") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "h5") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "h6") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "b") return TYPOGRAPH_WEIGHT["bold"].fontWeight;
    if (as === "strong") return TYPOGRAPH_WEIGHT["medium"].fontWeight;
    if (as === "i") return TYPOGRAPH_WEIGHT["normal"].fontWeight;
    if (as === "p") return TYPOGRAPH_WEIGHT["normal"].fontWeight;

    return TYPOGRAPH_WEIGHT[weight ?? "normal"].fontWeight;
  };

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
    size: txt_size_extend(),
    weight: txt_weight(),
    color: restProps.color ?? "#4e4e51",
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
    marginBlockStart: 0,
    marginBlockEnd: 0,
    "&:hover": TxtTheme({ ...restProps.hover }),
    "&:active": TxtTheme({ ...restProps.active }),
    "&:disabled": TxtTheme({ ...restProps.disabled }),
  };

  //
  //

  return (
    <>
      {as === "h1" && (
        <h1
          className="h1_txt"
          css={{ ...(globel_theme as any) }}
          onClick={onClick}
          {...elementProps}
        >
          {props.children}
        </h1>
      )}

      {as === "h2" && (
        <h2
          className="h2_txt"
          css={{ ...(globel_theme as any) }}
          onClick={onClick}
          {...elementProps}
        >
          {props.children}
        </h2>
      )}

      {as === "h3" && (
        <h3
          className="h3_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </h3>
      )}

      {as === "h4" && (
        <h4
          className="h4_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </h4>
      )}

      {as === "h5" && (
        <h5
          className="h5_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </h5>
      )}

      {as === "h6" && (
        <h6
          className="h6_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </h6>
      )}

      {as === "b" && (
        <b
          className="b_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </b>
      )}

      {as === "strong" && (
        <strong
          className="strong_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </strong>
      )}

      {as === "i" && (
        <i
          className="i_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </i>
      )}

      {as === "p" && (
        <p
          className="p_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </p>
      )}

      {as === "div" && (
        <p
          className="p_txt"
          css={{ ...(globel_theme as any) }}
          {...elementProps}
        >
          {props.children}
        </p>
      )}
    </>
  );
}
