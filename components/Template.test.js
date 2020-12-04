import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Template from 'components/Template';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Template {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        Welcome to Next.js!
      </div>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Template {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
