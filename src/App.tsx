import React from "react";
import { Txt, TxtSpan } from "./package/index";

export default function App() {
  return (
    <>
      <Txt as="h1">Typograpy H1</Txt>

      <Txt as="h2">Typograpy H2</Txt>

      <Txt as="h3">Typograpy H3</Txt>

      <Txt as="h4">Typograpy H4</Txt>

      <Txt as="h5">Typograpy H5</Txt>

      <Txt as="h6">Typograpy H6</Txt>

      <Txt as="b">Typograpy B</Txt>

      <Txt as="strong">
        Typograpy Strong&nbsp;
        <TxtSpan size={18} color="#aaa">
          Typograpy Span
        </TxtSpan>
      </Txt>

      <Txt as="i">Typograpy I</Txt>

      <Txt weight="medium" size={15} color="red">
        Typograpy
      </Txt>
    </>
  );
}
