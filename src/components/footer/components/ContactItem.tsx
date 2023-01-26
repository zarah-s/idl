import React from "react";
export interface Props {
  text: String;
}
const ContactItem = (props: Props) => {
  return (
    <li>
      <a className="hover:underline">{props.text}</a>
    </li>
  );
};

export default ContactItem;
