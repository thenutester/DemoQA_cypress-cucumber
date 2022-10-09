class demoqaprofilePage {
  elements = {
    loginLnk: () => cy.get('[href="/login"]'),
    usernameInput: () => cy.get("#userName"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login"),
    errorMessage: () => cy.get('#name'),
    gotobookstoreBtn: () => cy.get('#gotoStore'),
    bookLnk: () => cy.contains("Learning JavaScript Design Patterns"),
    addtocollectionBtn: () => cy.contains("Add To Your Collection"),
    profileLnk: () => cy.get(':nth-child(6) > .element-list > .menu-list > #item-3'),
    backtostoreBtn:() => cy.contains("Back To Book Store"),
    deletbookBtn:() => cy.contains("Delete All Books"),
    deletealertMessage:() => cy.get('.modal-body'),
    deletealertokBtn:() => cy.get('#closeSmallModal-ok'), 
    logoutBtn:() => cy.get('#submit')
    
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickBookname(bookname) {
    this.elements.bookLnk().should('have.text', bookname).click({force: true});
  }

  clickAddbook(addbook) {
    cy.scrollTo('bottom')
    this.elements.addtocollectionBtn().should('have.text', addbook).click({force: true});

  }
  
  clickGoback(goback) {
    cy.scrollTo('bottom')
    this.elements.backtostoreBtn().should('have.text', goback).click({force: true});
    this.elements.profileLnk().click();

  }

  clickGotobookstore() {
    this.elements.gotobookstoreBtn().click();
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickLoginlnk() {
    this.elements.loginLnk().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
  
  clickok(alertmessage){
    expect(alertmessage).to.equal(alertmessage);

  }
  
  checkAddedbook(addedbook){
    this.elements.bookLnk().should('have.text', addedbook);
  }

  clickdeletAllbookBtn(deleteallbook){
    this.elements.deletbookBtn().should('have.text', deleteallbook).click({force: true});
  }
  
  checkdeletebookalertBtn(alertmessage){
    this.elements.deletealertMessage().should('have.text', alertmessage);
    this.elements.deletealertokBtn().click();
  }
  
  checkdeletbook(){
    this.elements.bookLnk().should('not.exist');
  }

  clicklogoutBtn(){
    this.elements.logoutBtn().click();
  }

  checklogout(){
    this.elements.usernameInput().should('be.visible');
  }

}

module.exports = new demoqaprofilePage();
