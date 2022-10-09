import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const profilePage = require("../../pages/ProfilePage");

Given("A web browser is at the demoqa profile page", () => {
  cy.visit("/profile");
});

When("A user click on login link", () => {
  profilePage.clickLoginlnk();
});

Then("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
 
  profilePage.submitLogin(username,password)
});



Then("the url will contains the {string}", (pagename) => {
  cy.url().should("contains", pagename);
});


Then("The error message {string} is displayed", (errorMessage) => {
  profilePage.elements.errorMessage().should("have.text", errorMessage);
});

Then("A user click on {string} button on the page", () => {
  profilePage.clickGotobookstore();
});


When("A user click on the book {string} and navigate to the book details page", (bookname)  => {

  profilePage.clickBookname(bookname);
});

Then("A user click {string} button", (addbook) => {
  profilePage.clickAddbook(addbook);

});

Then("A user will see {string} message on the page", (alertmessage) => {
  profilePage.clickok(alertmessage);
});


Then("A user click {string} button on the page and click on profile link", (goback) => {
  profilePage.clickGoback(goback);

});

Then("A user will see the book {string} added in the profile page", (addedbook) => {

  profilePage.checkAddedbook(addedbook);

});

Then("A user click {string} button on the profile page", (deleteallbook) => {
  profilePage.clickdeletAllbookBtn(deleteallbook);
});

Then("A user click ok on the alert message {string}", (alertmessage) => {
  profilePage.checkdeletebookalertBtn(alertmessage);
});

Then("the book is deleted from the User profile page", () => {
  profilePage.checkdeletbook();
});

Then("A user click on the Logout button on the page", () => {
  profilePage.clicklogoutBtn();
});


Then("A user successfully logout from the demoqa profile page", () => {
  profilePage.checklogout();

});
