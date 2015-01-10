Feature: ClubRegistration
Background: SignUp
	Given I want to open the browser
	And I visit the https://tbbqabeta.productpartners.com url
    And I visit to the Signup Page
    When I click on the club signup
	
@run
Scenario: DataEntryValid
	Then i submit form with valid data and get welcome page
	| firstName  | lastName | email | confirmEmail | password | confirmPassword | screenName | dateOfBirth | phoneTextbox | shippingCountry | shippingStreet1 | shippingStreet2 | shippingCity | shippingState | shippingZip | ccFirstName | ccLastName | ccType | ccNumber | ccExp | ccCvv | billingCB | coachReferral | COACHID | tnC | CASL | captchaText |
  	#| Dec1215 | c1 | Dec1215Club1@mailinator.com | Dec1215Club1@mailinator.com | 11111 | 11111 | Dec1215C1 | 1978 | 1111111111 | Canada | DecC | club1 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4153456798632146 | 2021 | 123 | TRUE | FALSE | 994 | TRUE | TRUE | 5971 |

@run
Scenario: DataEntryInValid
	Then i submit form with Invalid data and get error page
	| firstName  | lastName | email | confirmEmail | password | confirmPassword | screenName | dateOfBirth | phoneTextbox | shippingCountry | shippingStreet1 | shippingStreet2 | shippingCity | shippingState | shippingZip | ccFirstName | ccLastName | ccType | ccNumber | ccExp | ccCvv | billingCB | coachReferral | COACHID | tnC | CASL | captchaText |
  	| Demo12 | cl | Demo12Club1@mailinator.com | Demo12Club1@mailinator.com | 11111 | 11111 | Demo12Club1 | 1978 | 1111111111 | Canada | OctC | club7 | montreal | Quebec | h3b5l1 | abc | xyz | Visa | 4222222222222 | 2021 | 123 | TRUE | TRUE | 994 | TRUE | TRUE | 1111 |
