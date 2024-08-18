/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
import { TxtType } from "../types/txt";
type Types = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "b" | "i" | "p" | "div";
    children: ReactNode;
} & TxtType & HTMLAttributes<HTMLElement>;
export default function Txt(props: Types & {
    [key: string]: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
