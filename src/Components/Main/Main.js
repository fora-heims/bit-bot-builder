import './Main.css';
import React from 'react';
import Editor from '../Editor/Editor';
import Display from '../Display/Display';

export default function Main() {
  return (
    <main>
      <Editor />
      <Display />
    </main>
  );
}
