import React from "react";
import "../styles/App.css";
export const Input = (props) => {
  return (
    <>
      <label className="label" htmlFor={`${props.name}`}>
        {props.title}
      </label>
      <br />
      <input
        className="input"
        type={`${props.type}`}
        name={`${props.name}`}
        id={`${props.name}`}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      ></input>
      <br />
      {props.errors && props.touched ? (
        <div className="error">{props.errors}</div>
      ) : null}
    </>
  );
};
