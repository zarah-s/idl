import Image from "next/image";
import React from "react";
import CommonBtn from "./CommonBtn";
import TitleContent from "./TitleContent";
export interface Props {
  reversed?: boolean;
  title?: String;
  content?: String;
  imageUrl: any;
}
const SummaryDisplay = (props: Props) => {
  return !props.reversed ? (
    <div className="flex mt-10 items-end">
      <Image src={props.imageUrl} className="w-2/5" alt="" />
      <div>
        <TitleContent title={props.title} content={props.content} />
        <CommonBtn text="Learn More ..." />
      </div>
    </div>
  ) : (
    <div className="flex mt-10 items-end">
      <div>
        <TitleContent title={props.title} content={props.content} />
        <CommonBtn text="Learn More ..." />
      </div>
      <Image src={props.imageUrl} className="w-1/2" alt="" />
    </div>
  );
};

export default SummaryDisplay;
