import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Color from './Color';
import getContrastRatio from '../utils/getContrastRatio';

const mockColor = {
  redValue: 123,
  greenValue: 22,
  blueValue: 33,
  intensityValue: 55,
};

const mockProps = {
  red: mockColor.redValue,
  green: mockColor.greenValue,
  blue: mockColor.blueValue,
  intensity: mockColor.intensityValue,
};

test('renders UI correctly', () => {
  const {container} = render(
    <svg>
      <Color {...mockProps} />
    </svg>,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <svg>
        <rect
          data-testid="color"
          height="1"
          style="fill: rgb(123, 22, 33);"
          width="1"
          x="55"
          y="95.10"
        />
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(
    <svg>
      <Color {...mockProps} />
    </svg>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('fills the color specified by the red, green, and blue props', () => {
  const expectedColor = `rgb(${mockColor.redValue}, ${mockColor.greenValue}, ${mockColor.blueValue})`;
  const {getByTestId} = render(
    <svg>
      <Color {...mockProps} />
    </svg>,
  );
  expect(getByTestId('color')).toHaveStyle({fill: expectedColor});
});

test('is located at the position specified by the prop values', () => {
  const contrastRatio = getContrastRatio(
    mockColor.redValue,
    mockColor.greenValue,
    mockColor.blueValue,
  );
  const expectedX = mockColor.intensityValue.toString();
  const expectedY = (100 - (contrastRatio - 1) * 5).toFixed(2);

  const {getByTestId} = render(
    <svg>
      <Color {...mockProps} />
    </svg>,
  );
  expect(getByTestId('color')).toHaveAttribute('x', expectedX);
  expect(getByTestId('color')).toHaveAttribute('y', expectedY);
});
