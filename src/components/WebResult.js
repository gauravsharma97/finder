import React from "react";

export default function WebResult(props) {
  return (
    <div className="row ms-2 me-2">
      <div className="col-12">
        <a
          className="noLinkDecoration"
          rel="noreferrer"
          href={props.url}
          target="_blank"
        >
          {props.url}
        </a>
        <a rel="noreferrer" href={props.url} target="_blank">
          <h2>{props.title}</h2>
        </a>
      </div>
      <div
        className="col-12"
        dangerouslySetInnerHTML={{ __html: props.desc }}
      ></div>
    </div>
  );
}
