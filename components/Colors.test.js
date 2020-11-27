import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import Colors from "./Colors";

const mockProps = {
  handleHover: jest.fn(),
  handleUnhover: jest.fn(),
  intensity: 50,
};

test("is accessible", async () => {
  const { container } = render(
    <svg>
      <Colors {...mockProps} />
    </svg>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("renders UI correctly for intensity prob value of 100", () => {
  const { container } = render(
    <svg>
      <Colors {...mockProps} intensity={100} />
    </svg>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <svg>
        <g>
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(255, 0, 0);"
            width="1"
            x="100"
            y="79"
          />
        </g>
      </svg>
    </div>
  `);
});

test("renders UI correctly for intensity prob value of 0", () => {
  const { container } = render(
    <svg>
      <Colors {...mockProps} intensity={0} />
    </svg>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <svg>
        <g>
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(0, 0, 0);"
            width="1"
            x="0"
            y="100"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(26, 26, 26);"
            width="1"
            x="0"
            y="99"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(39, 39, 39);"
            width="1"
            x="0"
            y="98"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(49, 49, 49);"
            width="1"
            x="0"
            y="97"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(57, 57, 57);"
            width="1"
            x="0"
            y="96"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(64, 64, 64);"
            width="1"
            x="0"
            y="95"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(70, 70, 70);"
            width="1"
            x="0"
            y="94"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(75, 75, 75);"
            width="1"
            x="0"
            y="93"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(80, 80, 80);"
            width="1"
            x="0"
            y="92"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(85, 85, 85);"
            width="1"
            x="0"
            y="91"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(89, 89, 89);"
            width="1"
            x="0"
            y="90"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(94, 94, 94);"
            width="1"
            x="0"
            y="89"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(98, 98, 98);"
            width="1"
            x="0"
            y="88"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(101, 101, 101);"
            width="1"
            x="0"
            y="87"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(105, 105, 105);"
            width="1"
            x="0"
            y="86"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(108, 108, 108);"
            width="1"
            x="0"
            y="85"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(112, 112, 112);"
            width="1"
            x="0"
            y="84"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(115, 115, 115);"
            width="1"
            x="0"
            y="83"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(118, 118, 118);"
            width="1"
            x="0"
            y="82"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(121, 121, 121);"
            width="1"
            x="0"
            y="81"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(124, 124, 124);"
            width="1"
            x="0"
            y="80"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(127, 127, 127);"
            width="1"
            x="0"
            y="79"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(130, 130, 130);"
            width="1"
            x="0"
            y="78"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(132, 132, 132);"
            width="1"
            x="0"
            y="77"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(135, 135, 135);"
            width="1"
            x="0"
            y="76"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(137, 137, 137);"
            width="1"
            x="0"
            y="75"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(140, 140, 140);"
            width="1"
            x="0"
            y="74"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(142, 142, 142);"
            width="1"
            x="0"
            y="73"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(145, 145, 145);"
            width="1"
            x="0"
            y="72"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(147, 147, 147);"
            width="1"
            x="0"
            y="71"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(149, 149, 149);"
            width="1"
            x="0"
            y="70"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(152, 152, 152);"
            width="1"
            x="0"
            y="69"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(154, 154, 154);"
            width="1"
            x="0"
            y="68"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(156, 156, 156);"
            width="1"
            x="0"
            y="67"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(158, 158, 158);"
            width="1"
            x="0"
            y="66"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(160, 160, 160);"
            width="1"
            x="0"
            y="65"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(162, 162, 162);"
            width="1"
            x="0"
            y="64"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(164, 164, 164);"
            width="1"
            x="0"
            y="63"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(166, 166, 166);"
            width="1"
            x="0"
            y="62"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(168, 168, 168);"
            width="1"
            x="0"
            y="61"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(170, 170, 170);"
            width="1"
            x="0"
            y="60"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(172, 172, 172);"
            width="1"
            x="0"
            y="59"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(174, 174, 174);"
            width="1"
            x="0"
            y="58"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(176, 176, 176);"
            width="1"
            x="0"
            y="57"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(178, 178, 178);"
            width="1"
            x="0"
            y="56"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(179, 179, 179);"
            width="1"
            x="0"
            y="55"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(181, 181, 181);"
            width="1"
            x="0"
            y="54"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(183, 183, 183);"
            width="1"
            x="0"
            y="53"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(185, 185, 185);"
            width="1"
            x="0"
            y="52"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(186, 186, 186);"
            width="1"
            x="0"
            y="51"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(188, 188, 188);"
            width="1"
            x="0"
            y="50"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(190, 190, 190);"
            width="1"
            x="0"
            y="49"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(191, 191, 191);"
            width="1"
            x="0"
            y="48"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(193, 193, 193);"
            width="1"
            x="0"
            y="47"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(195, 195, 195);"
            width="1"
            x="0"
            y="46"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(196, 196, 196);"
            width="1"
            x="0"
            y="45"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(198, 198, 198);"
            width="1"
            x="0"
            y="44"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(199, 199, 199);"
            width="1"
            x="0"
            y="43"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(201, 201, 201);"
            width="1"
            x="0"
            y="42"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(202, 202, 202);"
            width="1"
            x="0"
            y="41"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(204, 204, 204);"
            width="1"
            x="0"
            y="40"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(205, 205, 205);"
            width="1"
            x="0"
            y="39"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(207, 207, 207);"
            width="1"
            x="0"
            y="38"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(208, 208, 208);"
            width="1"
            x="0"
            y="37"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(210, 210, 210);"
            width="1"
            x="0"
            y="36"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(211, 211, 211);"
            width="1"
            x="0"
            y="35"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(213, 213, 213);"
            width="1"
            x="0"
            y="34"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(214, 214, 214);"
            width="1"
            x="0"
            y="33"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(216, 216, 216);"
            width="1"
            x="0"
            y="32"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(217, 217, 217);"
            width="1"
            x="0"
            y="31"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(218, 218, 218);"
            width="1"
            x="0"
            y="30"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(220, 220, 220);"
            width="1"
            x="0"
            y="29"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(221, 221, 221);"
            width="1"
            x="0"
            y="28"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(222, 222, 222);"
            width="1"
            x="0"
            y="27"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(224, 224, 224);"
            width="1"
            x="0"
            y="26"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(225, 225, 225);"
            width="1"
            x="0"
            y="25"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(226, 226, 226);"
            width="1"
            x="0"
            y="24"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(228, 228, 228);"
            width="1"
            x="0"
            y="23"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(229, 229, 229);"
            width="1"
            x="0"
            y="22"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(230, 230, 230);"
            width="1"
            x="0"
            y="21"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(232, 232, 232);"
            width="1"
            x="0"
            y="20"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(233, 233, 233);"
            width="1"
            x="0"
            y="19"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(234, 234, 234);"
            width="1"
            x="0"
            y="18"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(235, 235, 235);"
            width="1"
            x="0"
            y="17"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(237, 237, 237);"
            width="1"
            x="0"
            y="16"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(238, 238, 238);"
            width="1"
            x="0"
            y="15"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(239, 239, 239);"
            width="1"
            x="0"
            y="14"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(240, 240, 240);"
            width="1"
            x="0"
            y="13"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(242, 242, 242);"
            width="1"
            x="0"
            y="12"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(243, 243, 243);"
            width="1"
            x="0"
            y="11"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(244, 244, 244);"
            width="1"
            x="0"
            y="10"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(245, 245, 245);"
            width="1"
            x="0"
            y="9"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(246, 246, 246);"
            width="1"
            x="0"
            y="8"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(247, 247, 247);"
            width="1"
            x="0"
            y="7"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(249, 249, 249);"
            width="1"
            x="0"
            y="6"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(250, 250, 250);"
            width="1"
            x="0"
            y="5"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(251, 251, 251);"
            width="1"
            x="0"
            y="4"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(252, 252, 252);"
            width="1"
            x="0"
            y="3"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(253, 253, 253);"
            width="1"
            x="0"
            y="2"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(254, 254, 254);"
            width="1"
            x="0"
            y="1"
          />
          <rect
            data-testid="color"
            height="1"
            style="fill: rgb(255, 255, 255);"
            width="1"
            x="0"
            y="0"
          />
        </g>
      </svg>
    </div>
  `);
});
