// Dependencies
import React from 'react';
import { render } from '@testing-library/react';

// Component
import Procesos from '@views/Procesos';

describe('Procesos View', () => {
  const defaultProps = { routes: [] };
  it('Should match snapshot', () => {
    const component = render(<Procesos {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
