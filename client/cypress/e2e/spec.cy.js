/* eslint-disable no-undef */

import { click } from "@testing-library/user-event/dist/click";

/* eslint-disable quotes */
describe("empty spec", () => {
  it("link", () => {
    cy.visit("http://localhost:3000/");
  });

  it("title", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should("eq", "ShowMan");
  });
  it("stories", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Stories").click();
  });
  it("button1 test", () => {
    cy.visit("http://localhost:3000/");

    cy.get(':nth-child(2) > [href="/"]');
  });

  it("button2 test", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".btn2").click();
  });

  it("login test", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Login").click();
    cy.get("#loginemail").type("a@a");
    cy.get("#loginpassword").type("1");
    cy.get("#submit").click();

    cy.get(".swal-button").click();
  });

  it("signup test", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#name").type("rama");
    cy.get("#email").type("a@ab");
    cy.get("#password").type("1");
    cy.get("#submit").click();

    cy.get(".swal-button").click();
    cy.get("p > a").click();

    cy.get("#loginemail").type("a@a");
    cy.get("#loginpassword").type("1");
    cy.get("#submit").click();
    cy.wait(1000);

    cy.get(".swal-button").click();
  });

  it("create story", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Login").click();
    cy.get("#loginemail").type("a@a");
    cy.get("#loginpassword").type("1");
    cy.get("#submit").click();

    cy.get(".swal-button").click();
    cy.get(".btn2").click();
    cy.get("#title").type("Rama");
    cy.get("#about").type("Devotion of rama towards his citizens");
    cy.get("#type").type("devotion");
    cy.get("#b1").click();
    cy.wait(1000);
    cy.get(".swal-button").click();
    cy.contains("Stories").click();
    cy.get(":nth-child(18) > a > .btn3").click();
    cy.get(".btn7").click();
    cy.get("#b1").click();
    cy.get(".btn8").click();
    cy.wait(1000);
    cy.get(".swal-button").click();
    cy.contains("Logout").click();
  });
  it("about", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("About").click();
  });
  it("home  ", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Home").click();
  });
});
