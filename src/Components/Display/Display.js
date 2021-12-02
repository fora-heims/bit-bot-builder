import './Display.css';
import React from 'react';

export default function Display(props) {
  return (
    <div className="display">
      <div className="image-container">
        <img src=""></img>
        <img src=""></img>
        <img src=""></img>
      </div>
      <span>You have changed the light color {props.lightCount} times.</span>
      <span>You have changed the middle color {props.midCount} times.</span>
      <span>You have changed the dark color {props.darkCount} times.</span>
      <span>The feelings I get looking at this image:</span>
      <div>
        {props.feelings.map((feeling) => {
          <span>{feeling}</span>;
        })}
      </div>
    </div>
  );
}
