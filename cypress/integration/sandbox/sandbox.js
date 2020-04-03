import { Given, Before, Then } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit("https://e2e-boilerplate.github.io/sandbox/");
});

Given("I am on the sandbox page", async () => {
  cy.title().then((title) => {
    expect(title).toEqual("Sandbox");
  });
});

Then("The page header should be {string}", async (expected) => {
  cy.get("h1").then(($header) => {
    const text = $header.text();
    expect(text).toEqual(expected);
  });
});
