// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Container
import Home from '@views/Home';

describe('Home Container', () => {
  it('Should match snapshot', () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
});
