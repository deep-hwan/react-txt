import React from "react";
import { Txt, TxtSpan } from "./package/index";

export default function App() {
  return (
    <>
      <Txt as="h1">Typogrphy H1</Txt>

      <Txt as="h2">Typogrphy H2</Txt>

      <Txt as="h3">Typogrphy H3</Txt>

      <Txt as="h4">Typogrphy H4</Txt>

      <Txt as="h5">Typogrphy H5</Txt>

      <Txt as="h6">Typogrphy H6</Txt>

      <Txt as="b">Typogrphy B</Txt>

      <Txt as="strong">
        Typogrphy Strong&nbsp;
        <TxtSpan size={18} color="#aaa">
          Typogrphy Span
        </TxtSpan>
      </Txt>

      <Txt as="i">Typogrphy I</Txt>

      <Txt
        weight="medium"
        size={15}
        maxWidth={150}
        ellipsis={{ ellipsis: true, line: 1 }}
        color="red"
      >
        Typogrphy Typogrphy react-typogrphy-txt react-typogrphy-txt
      </Txt>
    </>
  );
}
