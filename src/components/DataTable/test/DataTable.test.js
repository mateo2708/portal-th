// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import DataTable from '@components/DataTable';

describe('DataTable Component', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<DataTable {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
