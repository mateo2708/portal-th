// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import Login from '@views/Login';

describe('Login View', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<Login {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
