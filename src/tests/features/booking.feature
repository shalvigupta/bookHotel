Feature: Book hotel 

Background: 
Given user navigates to the application 
And has succesfully navigated

# Scenario: Check for Tv icon 
# And if user sees "televisio" text in TV room ??
# Then TV icon should be visible 

Scenario: FirstName validations
And select todays date and '2' days
And click on book now for "Single"
And insert "T","Test","test@gmail.com","89123456781" as details and click Reserve now 
Then user should be able to see errors 

Scenario: Booking Success
And select todays date and '2' days
And click on book now for "Suite"
And insert "Test","Test","test@gmail.com","89123456781" as details and click Reserve now 
Then user should see success message 
