// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Container
import AppRoutes from '@components/AppRoutes';

describe('AppRoutes Container', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<AppRoutes {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
