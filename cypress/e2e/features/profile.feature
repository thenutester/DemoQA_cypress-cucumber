Feature: Profile page

    Feature Profile page will work depending on the user credentials.

    Background:
        Given A web browser is at the demoqa profile page
        When A user click on login link      
        Then A user enters the username "thentest", the password "Welcome@1", and clicks on the login button
    @profile_page_01    
    Scenario: Success navigation to demoqa profile page 
        Then the url will contains the "profile"
    @profile_page_02    
    Scenario: Check whether the User can add the book to the profile page
        Then A user click on "Go to Book Store" button on the page   
        Then the url will contains the "books"
        When A user click on the book "Learning JavaScript Design Patterns" and navigate to the book details page
        Then A user click "Add To Your Collection" button
        Then A user will see "Book added to your collection." message on the page
        Then A user click "Back To Book Store" button on the page and click on profile link 
        Then A user will see the book "Learning JavaScript Design Patterns" added in the profile page
    @profile_page_03    
    Scenario: Check whether the User can delete the book on the profile page    
        Then A user will see the book "Learning JavaScript Design Patterns" added in the profile page
        Then A user click "Delete All Books" button on the profile page
        Then A user click ok on the alert message "Do you want to delete all books?"
        Then the book is deleted from the User profile page
    @profile_page_04   
    Scenario: Success Logout from demoqa profile page  
        Then A user click on the Logout button on the page
        Then A user successfully logout from the demoqa profile page

        
    
      



    