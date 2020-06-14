// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import Layout from '@containers/Layout';

describe('Layout Container', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<Layout {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
