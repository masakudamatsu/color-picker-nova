import React from 'react';
import {render} from '@testing-library/react';
import {axe} from 'jest-axe';

import SideMarginRegulator from './SideMarginRegulator';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<SideMarginRegulator {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      margin: 0 8.5px;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<SideMarginRegulator {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
