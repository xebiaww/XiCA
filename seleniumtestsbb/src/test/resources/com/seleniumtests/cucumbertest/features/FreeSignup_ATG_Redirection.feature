Feature: ATG Redirection for Free Signup

@run
Scenario: Check ATG redirection
	Given I want to open the browser for free signup
	And I visit the https://tbbqabeta.productpartners.com url for free signup
    And I visit to the Signup Page for free signup
    When I click on the free signup
	Then i should redirect to ATG page

