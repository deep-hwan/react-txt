/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
import { TxtType } from "../types/txt";
type Types = {
    children: ReactNode;
} & TxtType & HTMLAttributes<HTMLElement>;
export default function TxtSpan(props: Types & {
    [key: string]: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
