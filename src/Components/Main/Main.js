import './Main.css';
import { useState } from 'react';
import Editor from '../Editor/Editor';
import Display from '../Display/Display';

export default function Main() {
  const [lightCount, setLightCount] = useState(0);
  const [midCount, setMidCount] = useState(0);
  const [darkCount, setDarkCount] = useState(0);
  const [feelings, setFeelings] = useState([]);
  const [light, setLight] = useState('red');
  const [mid, setMid] = useState('red');
  const [dark, setDark] = useState('red');

  return (
    <main>
      <Editor
        {...{
          lightCount,
          setLightCount,
          midCount,
          setMidCount,
          darkCount,
          setDarkCount,
          feelings,
          setFeelings,
          light,
          setLight,
          mid,
          setMid,
          dark,
          setDark,
        }}
      />
      <Display
        {...{
          lightCount,
          setLightCount,
          midCount,
          setMidCount,
          darkCount,
          setDarkCount,
          feelings,
          setFeelings,
          light,
          setLight,
          mid,
          setMid,
          dark,
          setDark,
        }}
      />
    </main>
  );
}
