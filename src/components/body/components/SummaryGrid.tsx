import Image from "next/image";
import React from "react";
import TitleContent from "./TitleContent";
export interface Props {
  reversed?: boolean;
  title?: String;
  content?: String;
  imageUrl: any;
}
const SummaryGrid = (props: Props) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg">
      <Image alt="" src={props.imageUrl} className="w-[100%] object-cover" />
      <div className="p-5">
        <TitleContent title={props.title} content={props.content} />
      </div>
    </div>
  );
};

export default SummaryGrid;
