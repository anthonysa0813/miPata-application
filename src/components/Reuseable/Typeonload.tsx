import React from "react";
import Typist from "react-typist";

interface Prop {
  text: string;
  show?: boolean;
  hideWhenDone?: boolean;
  hideWhenDoneDelay?: number;
  startDelay?: number;
}

function Typeonload(props: Prop) {
  const {
    text,
    show = true,
    hideWhenDone = true,
    hideWhenDoneDelay = 10,
    startDelay = 0,
  } = props;

  return (
    <Typist
      startDelay={startDelay}
      cursor={{
        show: show,
        hideWhenDone: hideWhenDone,
        hideWhenDoneDelay: hideWhenDoneDelay,
      }}
    >
      {text}
    </Typist>
  );
}
export default Typeonload;
