import { render, screen } from '@testing-library/react';
import Display from './Display';

test('renders the Display panel', () => {
  const container = render(
    <Display
      lightCount="5"
      midCount="3"
      darkCount="2"
      feelings=""
      feel=""
      light="orange"
      mid="green"
      dark="blue"
    />
  );
  expect(container).toMatchSnapshot();
});
