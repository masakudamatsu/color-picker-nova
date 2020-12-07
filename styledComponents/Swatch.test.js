import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Swatch from './Swatch';

const mockProps = {
  rgb: 'rgb(20, 222, 33)',
};

test('renders UI correctly', () => {
  const {container} = render(<Swatch {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: rgb(20,222,33);
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      max-width: 100px;
      width: 100px;
    }

    .c0::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});

test('rerenders with a new prop value', () => {
  const {container, rerender} = render(<Swatch {...mockProps} />);
  const newProp = 'rgb(33, 22, 167)';
  rerender(<Swatch rgb={newProp} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: rgb(33,22,167);
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      max-width: 100px;
      width: 100px;
    }

    .c0::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Swatch {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
