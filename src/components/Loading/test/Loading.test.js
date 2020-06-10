// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import Loading from '@components/Loading';

describe('Loading Component', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<Loading {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
