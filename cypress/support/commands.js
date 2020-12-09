// Cypress Image Snapshot: Start ////////////////////
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

if (Cypress.config('isInteractive')) {
  // Skip taking snapshots with Cypress GUI. See https://glebbahmutov.com/blog/open-source-visual-testing-of-components/#local-workflow
  Cypress.Commands.add('matchImageSnapshot', () => {
    cy.log('Skipping snapshot 👀');
  });
} else {
  addMatchImageSnapshotCommand({
    // Avoid the full page snapshot
    capture: 'viewport', // replace this with 'fullPage' for snapshotting the entire page

    // Allow tiny differences in snapshots
    customDiffConfig: {threshold: 0.1}, // threshold for each pixel
    failureThreshold: 0.03, // threshold for entire image
    failureThresholdType: 'percent', // percent of image or number of pixels
  });
}

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});
// Cypress Image Snapshot: End /////////////////////////

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
