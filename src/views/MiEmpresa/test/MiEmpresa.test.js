// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import MiEmpresa from '@views/MiEmpresa';

describe('MiEmpresa View', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<MiEmpresa {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
