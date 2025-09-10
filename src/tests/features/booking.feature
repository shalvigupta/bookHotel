Feature: Book hotel 

Background: 
Given user has succesfully navigated

# Scenario: Check for Tv icon 
# And if user sees "televisio" text in TV room ??
# Then TV icon should be visible 

Scenario: FirstName validations
And select todays date and '2' days
And click on book now
And insert "T","Test","test@gmail.com","89123456781" as details and click Reserve now 
Then user should be able to see errors 

Scenario Outline: Booking Success
And select todays date and '2' days
And click on book now
And insert "<FirstName>","<Lastname>","<Email>","<PhoneNo>" as details and click Reserve now 
Then user should see success message 

Examples:
|FirstName|Lastname|Email         |PhoneNo    |
|Test     |Test    |test@gmail.com|89123456781|