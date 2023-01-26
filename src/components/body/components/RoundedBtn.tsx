import React from "react";
export interface Props {
  text: String;
}
const RoundedBtn = (props: Props) => {
  return (
    <button className="bg-[#047C01] rounded-full text-white py-1 px-8 font-semibold">
      {props.text}
    </button>
  );
};

export default RoundedBtn;
