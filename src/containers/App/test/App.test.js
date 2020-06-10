// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Container
import App from '@containers/App';

describe('App Container', () => {
  it('Should match snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
