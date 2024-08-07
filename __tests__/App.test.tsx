import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('should render content correctly', () => {
  const appContent = renderer.create(<App />).toJSON();

  expect(appContent).toMatchSnapshot();
});

it('should render Step One', async () => {
  render(<App />);

  const stepOne = await screen.findByText('Step One');

  expect(stepOne).toHaveTextContent('Steps');
});
