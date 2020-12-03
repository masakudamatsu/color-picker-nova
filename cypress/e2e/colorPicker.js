describe('Color Picker', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Clicking a color returns its swatch with color code', () => {
    const white = 'rgb(255, 255, 255)';
    cy.findByTestId('color-triangle').click(0, 0);
    cy.findByTestId('swatch')
      .should('have.css', 'background-color', white)
      .should('have.text', white);
    const black = 'rgb(0, 0, 0)';
    cy.findByTestId('color-triangle').click(0, 1000);
    cy.findByTestId('swatch')
      .should('have.css', 'background-color', black)
      .should('have.text', black);
    const red = 'rgb(255, 0, 0)';
    cy.findByTestId('color-triangle').click(1000, 790);
    cy.findByTestId('swatch')
      .should('have.css', 'background-color', red)
      .should('have.text', red);
    const midgray = 'rgb(187, 187, 187)';
    cy.findByTestId('color-triangle').click(0, 500);
    cy.findByTestId('swatch')
      .should('have.css', 'background-color', midgray)
      .should('have.text', midgray);
    const midred = 'rgb(207, 80, 80)';
    cy.findByTestId('color-triangle').click(500, 800);
    cy.findByTestId('swatch')
      .should('have.css', 'background-color', midred)
      .should('have.text', midred);
  });
});
