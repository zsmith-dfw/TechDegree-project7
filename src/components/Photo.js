import React from "react";

const Photo = (props) => (
  <li>
    <img src={props.url} title={props.desc} />
  </li>
);
export default Photo;
