Feature: Signing into TBB portal

@run
Scenario: TBB Portal Sign In
	Given I want to open the browser to sign into TBB portal
	And I visit the https://tbbqabeta.productpartners.com url for signin
    And I click on the Signin link
    Then I should move to Login Page
    And I provide userid credentails to do signin
