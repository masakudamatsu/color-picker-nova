import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import StyledComponent from './StyledComponent';

const mockProps = {};

// DELETE THIS LINE
describe.skip('delete this line', () => {
  test('renders UI correctly', () => {
    const {container} = render(<StyledComponent {...mockProps} />);
    expect(container).toMatchInlineSnapshot();
  });

  test('rerenders with a new prop value', () => {
    const {container, rerender} = render(<Swatch {...mockProps} />);
    const newProp = '';
    rerender(<Swatch propName={newProp} />);
    expect(container).toMatchInlineSnapshot();
  });

  test('is accessible', async () => {
    const {container} = render(<StyledComponent {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); // DELETE THIS LINE
