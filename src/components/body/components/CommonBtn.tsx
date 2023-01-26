import React from "react";

export interface Props {
  text: string;
  styles?: string;
}
const CommonBtn = (props: Props) => {
  return (
    <button
      className={`bg-[#047C01] text-sm text-white py-1.5 px-3 rounded-sm ${props.styles}`}
    >
      {props.text}
    </button>
  );
};

export default CommonBtn;
