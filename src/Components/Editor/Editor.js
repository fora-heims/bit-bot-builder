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
  const handleFeelings = () => {
    props.setFeelings((prevState) => [...prevState, props.feel]);
    props.setFeel('');
  };
  return (
    <div className="editor">
      <div className="selectors">
        <label>
          Light
          <select value={props.light} onChange={handleLight}>
            <option value="light-red">Red</option>
            <option value="light-orange">Orange</option>
            <option value="light-yellow">Yellow</option>
            <option value="light-green">Green</option>
            <option value="light-blue">Blue</option>
            <option value="light-indigo">Indigo</option>
            <option value="light-violet">Violet</option>
          </select>
        </label>
        <label>
          Middle
          <select value={props.mid} onChange={handleMid}>
            <option value="mid-red">Red</option>
            <option value="mid-orange">Orange</option>
            <option value="mid-yellow">Yellow</option>
            <option value="mid-green">Green</option>
            <option value="mid-blue">Blue</option>
            <option value="mid-indigo">Indigo</option>
            <option value="mid-violet">Violet</option>
          </select>
        </label>
        <label>
          Dark
          <select value={props.dark} onChange={handleDark}>
            <option value="dark-redd">Red</option>
            <option value="dark-orange">Orange</option>
            <option value="dark-yellow">Yellow</option>
            <option value="dark-green">Green</option>
            <option value="dark-blue">Blue</option>
            <option value="dark-indigo">Indigo</option>
            <option value="dark-violet">Violet</option>
          </select>
        </label>
      </div>
      <div className="selectors">
        <label>
          What feelings can you identify within yourself while interacting with this image.
          <input type="text" value={props.feel} onChange={(e) => props.setFeel(e.target.value)} />
        </label>
        <button onClick={handleFeelings}>Observe your feelings come and go</button>
      </div>
    </div>
  );
}
