Feature: Sign Out

@run
Scenario: TBB Portal Sign oufter signining in
	Given I have signedin to the TBB portal
    When  I click on Sign out button
    Then I should be logged out from the portal