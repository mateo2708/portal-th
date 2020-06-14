// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import ForgotPassword from '@views/ForgotPassword';

describe('ForgotPassword View', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<ForgotPassword {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
