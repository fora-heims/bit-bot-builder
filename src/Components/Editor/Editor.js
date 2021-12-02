import './Editor.css';
import React from 'react';

export default function Editor(props) {
  const handleLight = (e) => {
    props.setLight(e.target.value);
    props.setLightCount((prevState) => prevState + 1);
  };
  const handleMid = (e) => {
    props.setMid(e.target.value);
    props.setMidCount((prevState) => prevState + 1);
  };
  const handleDark = (e) => {
    props.setDark(e.target.value);
    props.setDarkCount((prevState) => prevState + 1);
  };
  return (
    <div className="editor">
      <select value={props.light} onChange={handleLight}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <select value={props.mid} onChange={handleMid}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <select value={props.dark} onChange={handleDark}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
    </div>
  );
}
