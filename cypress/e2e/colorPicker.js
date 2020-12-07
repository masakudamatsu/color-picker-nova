describe('Clicking a color returns its swatch with color code', () => {
  for (let resolution = 3; resolution < 11; resolution++) {
    const screenWidth = 110 * resolution;
    describe(`Screen width ${screenWidth}px`, () => {
      const testInputOutput = [
        {
          clickX: 0,
          clickY: 0,
          outputColor: 'rgb(255, 255, 255)',
        },
        {
          clickX: 0,
          clickY: 100 * resolution,
          outputColor: 'rgb(0, 0, 0)',
        },
        {
          clickX: 100 * resolution,
          clickY: 79 * resolution,
          outputColor: 'rgb(255, 0, 0)',
        },
        {
          clickX: 0,
          clickY: 50 * resolution,
          outputColor: 'rgb(187, 187, 187)',
        },
        {
          clickX: 50 * resolution,
          clickY: 80 * resolution,
          outputColor: 'rgb(207, 80, 80)',
        },
      ];
      testInputOutput.forEach(options => {
        it(`Clicking (${options.clickX.toString()}, ${options.clickY.toString()}) returns ${
          options.outputColor
        }`, () => {
          cy.viewport(screenWidth, 1100);
          cy.visit('/');
          cy.findByTestId('color-triangle').click(
            options.clickX,
            options.clickY,
          );
          cy.findByTestId('swatch')
            .should('have.css', 'background-color', options.outputColor)
            .should('have.text', options.outputColor);
        });
      });
    });
  }
});
