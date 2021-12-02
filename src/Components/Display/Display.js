import './Display.css';
import React from 'react';

export default function Display(props) {
  return (
    <div className="display">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/assets/${props.light}.png`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/${props.mid}.png`}></img>
        <img src={`${process.env.PUBLIC_URL}/assets/${props.dark}.png`}></img>
      </div>
      <span>You have changed the light color {props.lightCount} times.</span>
      <span>You have changed the middle color {props.midCount} times.</span>
      <span>You have changed the dark color {props.darkCount} times.</span>
      <span>The feelings I observed while interacting with this image:</span>
      <div className="feelings">
        {props.feelings.map((feeling) => (
          <span key={feeling}>{feeling}</span>
        ))}
      </div>
    </div>
  );
}
