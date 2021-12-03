import { render, screen } from '@testing-library/react';
import Editor from './Editor.js';

test('renders the Display panel', () => {
  const container = render(
    <Editor
      lightCount="5"
      midCount="3"
      darkCount="2"
      feelings={['hello', 'goodbye']}
      feel=""
      light="orange"
      mid="green"
      dark="blue"
    />
  );
  expect(container).toMatchSnapshot();
});
