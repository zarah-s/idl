import React from "react";
export interface Props {
  title?: String;
  content?: String;
}
const TitleContent = (props: Props) => {
  return (
    <div className="">
      <p className="text-2xl font-bold">{props.title}</p>
      <p className="text-[1b1c1e80] my-5">{props.content}</p>
    </div>
  );
};

export default TitleContent;
