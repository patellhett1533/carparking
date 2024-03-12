import React, { ReactNode } from "react";

interface Prop {
  border?: string;
  bg?: string;
  text?: string;
  size?: string;
  weight?: string;
  py?: string;
  px?: string;
  hover?: string;
  color?: string;
  children: string;
}

const Button = (props: Prop): ReactNode => {
  return (
    <div>
      <button
        className={`tracking-widest bg-${props.bg || "transparent"} px-${
          props.px || "8"
        } py-${props.py || "2"} text-${props.text || "white"} text-${
          props.size || "xl"
        } font-${props.weight || "semibold"} hover:bg-${
          props.hover || ""
        } hover:text-${props.color || ""} ${
          props.border && "border-solid"
        } border-2 border-${props.border || "sky"}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
