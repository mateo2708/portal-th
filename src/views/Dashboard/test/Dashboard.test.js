// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import Dashboard from '@views/Dashboard';

describe('Dashboard View', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<Dashboard {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
